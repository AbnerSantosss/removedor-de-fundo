import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-2 text-center flex flex-col items-center justify-center relative z-10">

      <div className="flex items-center justify-center mb-4 group cursor-pointer w-full px-4 relative">
        {/* Glow sutil atrás da logo */}
        <div className="absolute inset-0 bg-cyber-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
        
        <img 
          src="/logo.png" 
          alt="App Logo" 
          className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:drop-shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-500 relative z-10"
        />
      </div>
      
      <h1 className="mt-1 max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight leading-tight px-4 shadow-sm">
        O removedor de fundo definitivo.
      </h1>
      <p className="mt-2 max-w-lg mx-auto text-sm sm:text-base md:text-lg text-cyber-primary/80 font-light tracking-wide px-6 leading-relaxed">
        Precisão de estúdio em segundos, <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">100% automático e gratuito.</span>
      </p>
    </header>
  );
};

export default Header;
