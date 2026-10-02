import React from 'react';

export default function QuestionNav({ totalQuestions, currentIndex, userAnswers, onNavigate }) {
  const getButtonStatusClass = (i) => {
    // Current active question
    if (i === currentIndex) {
      return 'bg-purple-900 text-white font-bold ring-2 ring-purple-400 scale-105';
    }

    // Answered question
    if (userAnswers[i] !== undefined && userAnswers[i] !== null) {
      return 'bg-green-100 text-green-800 border-green-500 font-semibold';
    }

    // Skipped / Unanswered past question
    if (i < currentIndex && (userAnswers[i] === undefined || userAnswers[i] === null)) {
      return 'bg-amber-100 text-amber-800 border-amber-400 font-semibold';
    }

    // Default unvisited question
    return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-5 border border-purple-100 w-full lg:w-72 flex flex-col justify-between">
      <div>
        <h3 className="text-center font-bold text-lg text-purple-950 mb-4">
          Question Navigator
        </h3>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-purple-900 inline-block"></span> Current
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-green-200 border border-green-500 inline-block"></span> Answered
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-200 border border-amber-400 inline-block"></span> Skipped
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gray-200 inline-block"></span> Unvisited
          </div>
        </div>

        {/* Number Grid */}
        <div className="grid grid-cols-5 gap-2 max-h-80 overflow-y-auto p-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`h-10 w-10 rounded-lg text-sm border transition-all duration-150 flex items-center justify-center cursor-pointer ${getButtonStatusClass(
                i
              )}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
        Click any number to jump directly
      </div>
    </div>
  );
}