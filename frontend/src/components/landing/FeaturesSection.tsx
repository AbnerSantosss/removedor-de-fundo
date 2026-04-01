import React from 'react';
import { Zap, Code, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="bg-cyber-card/40 backdrop-blur-md p-8 rounded-3xl border border-cyber-primary/20 hover:border-cyber-primary/60 transition-colors shadow-glow-primary group"
  >
    <div className="w-16 h-16 bg-cyber-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-cyber-primary drop-shadow-glow-primary" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-gray-400 font-light leading-relaxed">{description}</p>
  </motion.div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tighter drop-shadow-glow-primary">
          Qualidade Deslumbrante. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-accent">Zero Esforço.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          A inteligência artificial por trás da nossa plataforma detecta o objeto principal e separa o fundo de maneira cirúrgica, em uma fração de segundos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
        <FeatureCard 
          icon={Zap}
          delay={0}
          title="100% Automático e Gratuito"
          description="Diga adeus ao trabalho manual com pen-tools ou laços. Nossa IA faz todo o trabalho pesado para você instantaneamente. E o melhor: de graça."
        />
        <FeatureCard 
          icon={Star}
          delay={0.2}
          title="Precisão em Cabelos e Bordas"
          description="Nossa rede neural avançada é treinada para identificar os contornos mais difíceis, preservando fios de cabelo e texturas complexas perfeitamente."
        />
        <FeatureCard 
          icon={Code}
          delay={0.4}
          title="Processamento Instantâneo"
          description="Acelere o seu fluxo de trabalho, seja para design gráfico, e-commerce ou mídias sociais. O resultado sai pronto para download em alta resolução."
        />
      </div>

      {/* Social / Social Proof Banner Inspired by remove.bg */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 p-8 md:p-12 bg-gradient-to-r from-cyber-primary/10 via-cyber-accent/10 to-cyber-secondary/10 rounded-3xl border border-cyber-primary/30 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-xl">
          <h3 className="text-2xl font-bold text-white mb-2">Construído para escalar suas ideias.</h3>
          <p className="text-gray-300 font-light">
            Não perca mais horas apagando fundos no Photoshop. Use aquele tempo extra para criar, inovar e colocar seus projetos no ar hoje.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-cyber-primary" />
            <span className="text-gray-300">Sem limites de uso</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-cyber-primary" />
            <span className="text-gray-300">Exportação em PNG transparente</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-cyber-primary" />
            <span className="text-gray-300">Privacidade totalmente garantida</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
