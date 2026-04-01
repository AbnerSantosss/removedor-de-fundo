import BackgroundRemover from './components/BackgroundRemover';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 sm:text-5xl border-b-4 border-transparent pb-2">
          Magic Remover
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Remova o fundo de qualquer imagem em segundos com IA de alta precisão.
        </p>
      </header>
      
      <main className="w-full">
        <BackgroundRemover />
      </main>

      <footer className="mt-16 text-center text-gray-400 text-sm">
        Construído com FastApi e React
      </footer>
    </div>
  );
}

export default App;
