import React from 'react';
import { Terminal, Globe, TerminalSquare, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const DeveloperSection: React.FC = () => {
  return (
    <section className="w-full py-24 relative z-10 border-t border-white/5 mt-12 overflow-hidden">
      
      {/* Luzes de Fundo e Grafismos exclusivos da sessão do Dev */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-cyber-dark/80 border border-cyber-primary/30 px-4 py-2 rounded-full mb-4">
            <Terminal className="w-4 h-4 text-cyber-primary" />
            <span className="text-xs font-code font-bold tracking-widest text-cyber-primary uppercase">O Desenvolvedor</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tighter">
            Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-secondary to-cyber-accent">Abner Henrique</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
          
          {/* Avatar com frame Cyberpunk */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Animating border container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-secondary rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-cyber-dark bg-cyber-black">
              <img 
                src="/abner-developer.png" 
                alt="Abner Henrique - Desenvolvedor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter hover:contrast-110"
              />
              
              {/* Overlay HUD decorativo */}
              <div className="absolute inset-0 border-[4px] border-black/20 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-primary"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-secondary"></div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 bg-cyber-card border border-cyber-primary/50 text-cyber-primary font-code text-xs px-4 py-2 rounded-lg shadow-glow-primary z-20 flex items-center">
              <Cpu className="w-4 h-4 mr-2" /> SYS.ADMIN
            </div>
          </motion.div>

          {/* Texto de Valor e Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col max-w-xl text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Desenvolvedor & Apaixonado por Programação</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent rounded-full mb-6 mx-auto lg:mx-0"></div>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              O Removedor de Fundo IA nasceu da necessidade de unir agilidade, design futurista e processamento avançado de imagens em uma única ferramenta poderosa.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Acredito que o acesso à tecnologia robusta não deve custar caríssimo. Por isso, desenvolvi esta plataforma unindo a eficiência do Python no back-end e React moderno no front-end, processando redes neurais de alto desempenho localmente para garantir sua privacidade.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/abnersantoss/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#0077b5]/80 to-[#0A66C2]/80 hover:from-[#0077b5] hover:to-[#0A66C2] text-white rounded-xl transition-all shadow-lg hover:shadow-[#0077b5]/50 border border-white/10"
              >
                <Globe className="w-5 h-5 mr-3" /> Conectar
              </a>
              <a 
                href="https://github.com/AbnerSantosss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-cyber-dark hover:bg-[#24292e] text-white rounded-xl transition-all shadow-lg border border-white/10"
              >
                <TerminalSquare className="w-5 h-5 mr-3" /> Projetos
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
