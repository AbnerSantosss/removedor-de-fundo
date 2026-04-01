import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

const MESSAGES = [
  "Escaneando cada detalhe da imagem… calma que já vem coisa boa 👀",
  "Ajustando os contornos como um verdadeiro artista digital 🎨",
  "Identificando o que fica e o que sai… decisão difícil 😅",
  "Limpando o fundo como mágica… sem sujeira depois ✨",
  "Trabalhando nos bastidores pra deixar tudo perfeito 🔧",
  "Aplicando inteligência artificial nível cinema 🎬",
  "Detectando bordas com precisão ninja 🥷",
  "Transformando sua imagem em algo profissional… aguarde 🔥",
  "Removendo o fundo como quem nunca errou 😎",
  "Fazendo ajustes finos pixel por pixel… capricho total 🧠",
  "Preparando sua imagem para brilhar sem distrações 💡",
  "Organizando tudo nos mínimos detalhes… quase lá 📐",
  "Deixando só o que realmente importa na imagem 💎",
  "Processando com tecnologia de outro planeta 🚀",
  "Dando aquele upgrade profissional na sua imagem ⚡",
  "Calculando o melhor recorte possível… precisão máxima 🎯",
  "Refinando as bordas para um resultado impecável 🧵",
  "Eliminando o fundo com estilo e elegância 🕶️",
  "Preparando sua imagem para o próximo nível 📈",
  "Quase pronto… só mais alguns ajustes finais ⏳",
  "Ficou pronto! Preparando sua obra de arte para exibição... 🎉"
];

const ProcessingState: React.FC = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => {
        if (prev === MESSAGES.length - 1) return prev; // Para na frase final
        return prev + 1;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-24 bg-cyber-card rounded-3xl shadow-glow-primary border border-cyber-primary/20 backdrop-blur-sm relative overflow-hidden">
      
      {/* Background glow animations */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-primary rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative z-10 mb-8 p-4 rounded-full border border-cyber-primary/50 bg-cyber-black/50"
      >
        <Cpu className="w-14 h-14 text-cyber-primary drop-shadow-glow-primary" />
      </motion.div>
      
      <div className="h-16 flex items-center justify-center relative z-10 w-full px-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h3
            key={msgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide text-center absolute w-full px-2"
          >
            {MESSAGES[msgIndex]}
          </motion.h3>
        </AnimatePresence>
      </div>
      
      {/* Progress Bar Loader */}
      <div className="w-64 h-2 bg-cyber-dark rounded-full mt-8 overflow-hidden relative border border-cyber-primary/20">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-gradient-to-r from-transparent via-cyber-primary to-transparent"
        />
      </div>
    </div>
  );
};

export default ProcessingState;
