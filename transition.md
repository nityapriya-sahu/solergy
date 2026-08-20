Build a scroll-driven "stacked card reveal" section using GSAP and ScrollTrigger, replicating this exact behavior:

**Markup**

- One outer pinned wrapper, `height: 100vh`, `overflow: hidden`, `position: relative`.
- Inside it, one `<section>` per card, each `position: absolute`, `inset: 0` (or `top`/centered with flex), `width/height: 100%`, stacked in normal DOM order.
- Each section contains one `.card` panel (the actual visible card — image + content), sized to roughly 60–70vh tall and 70–90% viewport width, rounded corners, shadow, split into an image half and a content half (alternate image left/right per card for variety).
- Give card 1 the highest `z-index`, decreasing by 1 for each subsequent card (e.g. 4, 3, 2, 1 for 4 cards).

**Initial state (set with `gsap.set` on load)**

- Card 1: `scale: 1, opacity: 1` (fully shown).
- Card 2: `scale: 0.8, opacity: 1` (visible but small, peeking behind card 1 — signals more content below).
- Card 3+: `scale: 0.8, opacity: 0, visibility: hidden`.

**Pin + scrub**

- Wrap the whole thing in a single `ScrollTrigger` with `pin: true`, `scrub: true` (or `scrub: 1` for a touch of smoothing lag), and `end` long enough to give each card an equal scroll budget (e.g. `end: "+=" + (numCards * viewportHeight)` roughly, tune to taste).

**Per-card transition (build as one GSAP timeline, cards driven back-to-back on the same scrubbed timeline)**
For each card `i` transitioning to card `i+1`, at the same position on the timeline:

1. Tween card `i`: `y` (or `top`) from `0` to `-1 × viewportHeight` (or a value comfortably larger than the card's own height), `ease: "power2.inOut"`. No opacity/scale change.
2. Tween card `i+1` at the same timeline position, same duration: `scale` from `0.8` to `1`, and if it isn't already visible, `opacity` from `0` to `1` (and flip `visibility` to `visible` at the start via `immediateRender`/`onStart`), `ease: "power2.inOut"`.
3. Insert a hold (an empty timeline gap, e.g. `+=0.5` of that segment's duration) both before and after this transition so each card has read-time at full size before the next exit begins. A rough split is enter (~1/3) → hold (~1/3) → exit (~1/3) per card.

**Feel**

- Motion should read as: the front card visibly lifts and slides away while the next card simultaneously grows/fades into place underneath it — one continuous, connected motion, not two separate unrelated animations. Because it's scrubbed, scrolling up should reverse the animation exactly, at any point.
- Nothing should be a fixed-duration/autoplay animation — everything is tied 1:1 (or with slight lag if using `scrub: 1`) to scroll position.

**Tech notes**

- GSAP core + the ScrollTrigger plugin are sufficient; ScrollSmoother is optional polish, not required for the effect.
- Register the plugin (`gsap.registerPlugin(ScrollTrigger)`) and build the pin/timeline inside a mount effect (React `useEffect`/`useLayoutEffect`, or plain `DOMContentLoaded` for vanilla JS), and revert/kill the ScrollTrigger on unmount to avoid duplicate instances on route changes.

---

### Quick-reference values

| Property                     | Value                                             |
| ---------------------------- | ------------------------------------------------- |
| Card rest scale (front)      | 1                                                 |
| Card peeking scale (next up) | 0.8                                               |
| Exit translateY              | ≈ −1× viewport height                             |
| Easing                       | ease-in-out (e.g. `power2.inOut`)                 |
| Scroll binding               | scrubbed (not autoplay)                           |
| z-index order                | front card highest, decreasing by 1 per card back |
| Pre-visible cards on load    | current card + the very next one only             |
