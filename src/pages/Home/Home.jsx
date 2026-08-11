import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import WhySolergy from '../../components/WhySolergy/WhySolergy';
import WhySolar from '../../components/WhySolar/WhySolar';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Projects from '../../components/Projects/Projects';
import FAQ from '../../components/FAQ/FAQ';
import Contact from '../../components/Contact/Contact';
import Tagline from '../../components/Tagline/Tagline';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySolergy />
        <WhySolar />
        <Services />
        <Testimonials />
        <Projects />
        <FAQ />
        <Contact />
        <Tagline />
      </main>
      <Footer />
    </>
  );
}

export default Home;
