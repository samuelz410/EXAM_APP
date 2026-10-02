import React from 'react';

export default function ResultCard({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isfailing = score < totalQuestions / 2;
  return (
    <div className="text-center py-6 space-y-4">
      <h1 className="text-3xl font-extrabold text-purple-950">Quiz Completed!</h1>
      <p className="text-lg text-gray-700">
        You scored <span className={`font-bold ${isfailing ? 'text-red-500' : 'text-purple-900'}`}>{score}</span> out of{' '}
        <span className="font-bold text-purple-900">{totalQuestions}</span>
      </p>
      <div className={`text-2xl font-bold ${isfailing ? 'text-red-500' : 'text-purple-800'}`}>{percentage}%</div>
      <p className="text-sm font-medium text-gray-600">
        {isfailing ? 'Keep practicing! You can do better next time.' : 'Great job! You passed the quiz!'}
      </p>
      <button
        onClick={onRestart}
        className="mt-4 px-8 py-2.5 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition cursor-pointer"
      >
        Restart Quiz
      </button>
    </div>
  );
}