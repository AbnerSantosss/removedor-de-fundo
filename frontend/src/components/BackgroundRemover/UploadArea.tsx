import React from 'react';
import type { DropzoneState } from 'react-dropzone';
import { UploadCloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface UploadAreaProps {
  dropzoneState: DropzoneState;
}

const UploadArea: React.FC<UploadAreaProps> = ({ dropzoneState }) => {
  const { getRootProps, getInputProps, isDragActive } = dropzoneState;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div
        {...getRootProps()} 
        className={`relative w-full overflow-hidden border-2 border-dashed rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-300
          ${isDragActive ? 'border-cyber-primary bg-cyber-primary/10 shadow-glow-primary' : 'border-cyber-primary/30 bg-cyber-card hover:bg-cyber-dark/80 hover:border-cyber-primary/60 hover:shadow-glow-primary'}`}
      >
        <input {...getInputProps()} />
        
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-accent rounded-tl-3xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-secondary rounded-br-3xl z-0"></div>

        <motion.div 
          animate={{ y: isDragActive ? [0, -10, 0] : 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative z-10"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-cyber-primary blur-2xl opacity-20"></div>
            {isDragActive ? (
              <Zap className="w-24 h-24 text-cyber-primary drop-shadow-glow-primary relative z-10" />
            ) : (
              <UploadCloud className="w-24 h-24 text-cyber-primary/80 drop-shadow-glow-primary relative z-10" />
            )}
          </div>
        </motion.div>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide drop-shadow-lg z-10 relative mt-4">
          {isDragActive ? 'SOLTE A IMAGEM AQUI' : 'FAÇA UPLOAD DE UMA IMAGEM'}
        </p>
        
        <p className="mt-4 text-xs sm:text-sm tracking-wider font-light text-cyber-primary/70 text-center uppercase z-10 relative">
          ou arraste e solte um arquivo (JPEG, PNG, WEBP)
        </p>
      </div>
    </motion.div>
  );
};

export default UploadArea;
