import React, { useState, useCallback } from 'react';
import { getJoke } from './services/geminiService';
import BotIcon from './components/BotIcon';
import JokeDisplay from './components/JokeDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetJoke = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setJoke(null);
    try {
      const newJoke = await getJoke();
      setJoke(newJoke);
    } catch (err) {
      setError('Oops! My circuits are a bit fuzzy. Please try again!');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <main className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center flex flex-col items-center transition-all duration-300">
        <header className="flex items-center gap-4 mb-4">
          <BotIcon className="w-16 h-16 text-indigo-500" />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">PunBot 9000</h1>
            <p className="text-md text-gray-500">Your Daily Dose of Giggles</p>
          </div>
        </header>

        <div className="w-full min-h-[150px] flex items-center justify-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg p-6 my-6">
          {isLoading && <LoadingSpinner />}
          {error && <p className="text-red-500 font-medium">{error}</p>}
          {joke && <JokeDisplay joke={joke} />}
          {!isLoading && !error && !joke && (
            <p className="text-gray-500">Press the button for a chuckle!</p>
          )}
        </div>

        <button
          onClick={handleGetJoke}
          disabled={isLoading}
          className="w-full py-4 px-6 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          {isLoading ? 'Thinking of a good one...' : 'Tell me a joke!'}
        </button>
      </main>
      <footer className="mt-8 text-center text-gray-400 text-sm">
        <p>Powered by Gemini & a love for puns.</p>
      </footer>
    </div>
  );
};

export default App;
