import React, { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import { Download, RefreshCw, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonSliderProps {
  originalImage: string;
  processedImage: string;
  onReset: () => void;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ originalImage, processedImage, onReset }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    handleDrag(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (isDragging) handleDrag(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (isDragging) handleDrag(e.touches[0].clientX);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col space-y-6 bg-cyber-card/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-cyber-primary/20 shadow-glow-primary overflow-hidden relative z-10"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold uppercase tracking-widest text-white flex items-center">
          <Layers className="w-6 h-6 mr-3 text-cyber-primary" />
          Fundo Removido
        </h3>
        <p className="text-sm font-code text-cyber-primary/70 animate-pulse hidden sm:block">Arraste para comparar</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize group select-none shadow-inner bg-checkered border border-cyber-dark"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => { setIsDragging(true); handleDrag(e.touches[0].clientX); }}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
      >
        {/* Underneath: Processed Image (Transparent Background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center">
          <img src={processedImage} alt="Processada" className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]" draggable={false} />
        </div>

        {/* Top: Original Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center bg-cyber-black/80"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={originalImage} alt="Original" className="w-full h-full object-contain pointer-events-none opacity-50 contrast-125 saturate-50" draggable={false} />
          {/* Scanline overlay for aesthetic */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay"></div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-cyber-primary/80 shadow-[0_0_15px_rgba(0,240,255,1)] pointer-events-none z-20 flex flex-col justify-center items-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-8 h-12 bg-cyber-dark border-2 border-cyber-primary rounded-full shadow-[0_0_20px_rgba(0,240,255,1)] flex items-center justify-center -ml-px transition-transform duration-200 group-hover:scale-110">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-cyber-primary/80 rounded-full"></div>
              <div className="w-0.5 h-6 bg-cyber-primary/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4 mt-8 pt-4 border-t border-cyber-primary/10">
        <button 
          onClick={onReset}
          className="px-6 py-3 bg-cyber-dark/80 backdrop-blur border border-cyber-secondary/50 text-white rounded-xl hover:bg-cyber-secondary hover:shadow-[0_0_20px_rgba(255,0,60,0.6)] font-bold tracking-widest uppercase transition-all flex items-center justify-center flex-1 sm:flex-none"
        >
          <RefreshCw className="w-5 h-5 mr-2" /> NOVA IMAGEM
        </button>

        <a 
          href={processedImage} 
          download="imagem-sem-fundo.png"
          className="px-8 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-white font-bold tracking-widest uppercase rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center flex-1 group"
        >
          <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" /> DOWNLOAD HD
        </a>
      </div>
    </motion.div>
  );
};

export default ComparisonSlider;
