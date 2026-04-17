import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
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
