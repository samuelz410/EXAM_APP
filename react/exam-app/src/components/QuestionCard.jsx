import React from 'react';

const optionKeys = ['option1', 'option2', 'option3', 'option4'];

export default function QuestionCard({ question, selectedOption, onSelectOption }) {
  const getOptionStyle = (key) => {
    if (selectedOption === null) {
      return 'border-black/30 hover:bg-purple-50 text-gray-800 cursor-pointer';
    }

    // Always highlight the correct answer in Green
    if (key === question.answer) {
      return 'bg-green-200 border-green-600 text-green-900 font-bold shadow-green-200';
    }

    // Highlight user's wrong pick in Red
    if (key === selectedOption && key !== question.answer) {
      return 'bg-red-200 border-red-600 text-red-900 font-bold shadow-red-200';
    }

    // Dim remaining options
    return 'border-gray-200 text-gray-400 opacity-40 cursor-not-allowed';
  };

  return (
    <div>
      <h2 className="text-center font-bold text-lg text-gray-800 mb-6">
        {question.question}
      </h2>

      <div className="grid gap-3 justify-items-center w-full">
        {optionKeys.map((key) => (
          <button
            key={key}
            onClick={() => onSelectOption(key)}
            disabled={selectedOption !== null}
            className={`shadow-lg text-left px-4 w-full h-12 border rounded-lg transition-all duration-200 ${getOptionStyle(
              key
            )}`}
          >
            {question[key]}
          </button>
        ))}
      </div>
    </div>
  );
}