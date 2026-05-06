import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes da Interface Cyberpunk
import UploadArea from './BackgroundRemover/UploadArea';
import ProcessingState from './BackgroundRemover/ProcessingState';
import ComparisonSlider from './BackgroundRemover/ComparisonSlider';

const BackgroundRemover: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Reset states
    setError(null);
    setProcessedImage(null);
    setOriginalImage(URL.createObjectURL(file));
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${API_URL}/api/remove-bg`, formData, {
        responseType: 'blob', // Mantém binário para transparência PNG
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const url = URL.createObjectURL(new Blob([response.data]));
      setProcessedImage(url);
    } catch (err: any) {
      console.error(err);
      setError('Falha na comunicação com o Core AI. Verifique se o backend está online.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const dropzoneState = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  });

  const resetAll = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 relative z-10 px-4 sm:px-0">
      
      {/* Alerta de Erro */}
      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full bg-cyber-secondary/20 border border-cyber-secondary p-4 rounded-xl flex items-center shadow-glow-secondary backdrop-blur-md"
          >
            <AlertTriangle className="text-cyber-secondary mr-4 animate-pulse w-6 h-6" />
            <p className="text-white font-mono tracking-wide">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gerenciador de Estados */}
      <AnimatePresence mode="wait">
        
        {/* Estado 1: Início - Upload Zone */}
        {!originalImage && !isLoading && (
          <UploadArea key="upload" dropzoneState={dropzoneState} />
        )}

        {/* Estado 2: Loading State - Processando */}
        {isLoading && (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <ProcessingState />
          </motion.div>
        )}

        {/* Estado 3: Sucesso - Comparativo */}
        {originalImage && processedImage && !isLoading && (
          <ComparisonSlider 
            key="comparison"
            originalImage={originalImage} 
            processedImage={processedImage} 
            onReset={resetAll} 
          />
        )}

      </AnimatePresence>

    </div>
  );
};

export default BackgroundRemover;
