import Header from './Header/Header.jsx';
import Hero from './Hero/Hero.jsx';
import Services from './Services/Services.jsx';
import About from './About/About.jsx';
import Work from './Work/Work.jsx';
import Experience from './Experience/Experience.jsx';
import Skills from './Skills/Skills.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
