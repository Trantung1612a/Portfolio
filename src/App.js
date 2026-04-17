import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <HeroSection />
      <main>
        <AboutSection />
         <ProjectsSection />
       
      </main>
      <Footer />
    </div>
  );
}

export default App;
