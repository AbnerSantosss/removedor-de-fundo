import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-16 mt-auto text-center border-t border-white/5 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-2">
        <div className="flex flex-col items-center space-y-2 opacity-80 hover:opacity-100 transition-opacity mb-2">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Produzido por</span>
          <img src="/logo.png" className="h-16 sm:h-20 object-contain drop-shadow-glow-primary" alt="Produtora Logo" />
        </div>
        
        <p className="text-gray-500 text-sm">
          Desenvolvido por{' '}
          <a 
            href="https://www.linkedin.com/in/abnersantoss/?skipRedirect=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-primary transition-colors font-semibold relative inline-block group"
          >
            Abner Santos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-primary transition-all group-hover:w-full"></span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
