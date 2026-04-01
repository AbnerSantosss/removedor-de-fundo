import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { UploadCloud, Image as ImageIcon, Loader2, Download, RefreshCw, AlertCircle } from 'lucide-react';

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
      const response = await axios.post('http://localhost:8000/api/remove-bg', formData, {
        responseType: 'blob', // Important to handle binary data
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const url = URL.createObjectURL(new Blob([response.data]));
      setProcessedImage(url);
    } catch (err: any) {
      console.error(err);
      setError('Erro ao processar imagem. Verifique se o servidor FastAPI está rodando.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
    <div className="w-full max-w-5xl mx-auto space-y-8">
      
      {/* Upload Zone */}
      {!originalImage && (
        <div 
          {...getRootProps()} 
          className={`border-4 border-dashed rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200
            ${isDragActive ? 'border-primary bg-blue-50' : 'border-gray-300 bg-white hover:bg-gray-50'}`}
        >
          <input {...getInputProps()} />
          <UploadCloud className={`w-20 h-20 mb-6 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} />
          <p className="text-2xl font-semibold text-gray-700 text-center">
            {isDragActive ? 'Solte a imagem aqui...' : 'Arraste uma imagem ou clique'}
          </p>
          <p className="mt-2 text-sm text-gray-500 text-center">
            Suporta JPEG, PNG e WEBP. Alta resolução suportada.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-center shadow-sm">
          <AlertCircle className="text-red-500 mr-3 hidden sm:block" />
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* Processing State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
          <Loader2 className="w-16 h-16 animate-spin text-blue-600 mb-6" />
          <h3 className="text-xl font-bold text-gray-800">Magia acontecendo...</h3>
          <p className="text-gray-500 mt-2">A inteligência artificial está identificando e cortando os objetos perfeitos.</p>
        </div>
      )}

      {/* Results View */}
      {originalImage && !isLoading && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Original */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-gray-500" /> Original
              </h3>
              <div className="relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner flex-1 flex items-center justify-center min-h-[300px]">
                <img src={originalImage} alt="Original" className="max-w-full max-h-[500px] object-contain" />
              </div>
            </div>

            {/* Resultado */}
            {processedImage && (
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span> Fundo Removido
                </h3>
                {/* BG checkard classe para mostrar transparência */}
                <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-checkered flex-1 flex items-center justify-center min-h-[300px]">
                  <img src={processedImage} alt="Processada sem fundo" className="max-w-full max-h-[500px] object-contain relative z-10 drop-shadow-lg" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center md:justify-end">
            <button 
              onClick={resetAll}
              className="px-6 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Tentar Nova Imagem
            </button>
            
            {processedImage && (
              <a 
                href={processedImage} 
                download="imagem-sem-fundo.png"
                className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/30 transition-all flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar em Alta Resolução (PNG)
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;
