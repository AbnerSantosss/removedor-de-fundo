import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackgroundRemover from './components/BackgroundRemover';
import FeaturesSection from './components/landing/FeaturesSection';
import DeveloperSection from './components/landing/DeveloperSection';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-cyber-black scroll-smooth">
      
      {/* Efeito Spotlight Central no Topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] sm:w-[800px] h-[300px] sm:h-[500px] bg-cyber-primary/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Luzes de Fundo (Backlight Blur) Dinâmicas */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-cyber-primary to-transparent opacity-20 blur-[120px] pointer-events-none rounded-full animate-pulse object-cover"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-bl from-cyber-accent to-transparent opacity-15 blur-[120px] pointer-events-none rounded-full" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-cyber-secondary opacity-10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Header />
        
        <main className="w-full flex-1 flex flex-col items-center flex-grow mb-16">
          <div className="w-full flex flex-col items-center justify-start mt-2 sm:mt-6 mb-8">
            <BackgroundRemover />
          </div>

          <FeaturesSection />
          <DeveloperSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
