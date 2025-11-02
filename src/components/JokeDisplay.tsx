import React from 'react';

interface JokeDisplayProps {
  joke: string;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
  const parts = joke.split('\n').filter(part => part.trim() !== '');

  const question = parts[0] || "Hmm, I think I forgot the setup...";
  const answer = parts[1] || "...and the punchline! My bad.";

  return (
    <div className="text-center animate-fade-in">
      <p className="text-xl text-gray-600 mb-4">{question}</p>
      <p className="text-2xl font-bold text-indigo-600">{answer}</p>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default JokeDisplay;
