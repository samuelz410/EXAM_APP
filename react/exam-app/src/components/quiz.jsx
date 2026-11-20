import React, { useState, useEffect } from 'react';
import { data } from '../assets/data';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';
import QuestionNav from './QuestionNav';

const STORAGE_KEY = 'exam_app_progress_v1';

function getSavedProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export default function Quiz() {
  const saved = getSavedProgress();

  // 1. Restore saved question index (safely bounded to data.length)
  const [index, setIndex] = useState(() => {
    if (
      saved &&
      typeof saved.index === 'number' &&
      saved.index >= 0 &&
      saved.index < data.length
    ) {
      return saved.index;
    }
    return 0;
  });

  // 2. Restore saved answers
  const [userAnswers, setUserAnswers] = useState(() => {
    return saved && typeof saved.userAnswers === 'object' && saved.userAnswers !== null
      ? saved.userAnswers
      : {};
  });

  // 3. Restore finished state
  const [isFinished, setIsFinished] = useState(() => {
    return Boolean(saved && saved.isFinished);
  });

  // 4. Save progress whenever index, userAnswers, or isFinished changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ index, userAnswers, isFinished })
      );
    } catch (err) {
      console.error('Could not save quiz progress:', err);
    }
  }, [index, userAnswers, isFinished]);

  const currentQuestion = data[index];
  const selectedOption = userAnswers[index] ?? null;

  const calculateScore = () => {
    let totalScore = 0;
    data.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) {
        totalScore += 1;
      }
    });
    return totalScore;
  };

  const handleSelectOption = (key) => {
    if (selectedOption === null) {
      setUserAnswers((prev) => ({
        ...prev,
        [index]: key
      }));
    }
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSkip = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleNavigate = (targetIndex) => {
    setIndex(targetIndex);
  };

  // 5. Clear saved progress when restarting
  const handleRestart = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIndex(0);
    setUserAnswers({});
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-purple-500/20 to-purple-800/90 flex items-center justify-center p-4 lg:p-8">
      {isFinished ? (
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-6">
          <ResultCard
            score={calculateScore()}
            totalQuestions={data.length}
            onRestart={handleRestart}
          />
        </div>
      ) : (
        /* Two-Column Responsive Layout */
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl w-full mx-auto items-stretch">
          
          {/* Main Question Box */}
          <div className="quiz-container flex-1 bg-white rounded-xl shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="font-extrabold text-2xl text-purple-950">EXAM APP</h1>
                <span className="text-sm font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                  Question {index + 1} / {data.length}
                </span>
              </div>
              <hr className="my-4 border-purple-200" />

              <QuestionCard
                question={currentQuestion}
                selectedOption={selectedOption}
                onSelectOption={handleSelectOption}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8 pt-4 border-t border-gray-100">
              <button
                onClick={handleSkip}
                disabled={selectedOption !== null}
                className="px-6 py-2 border border-purple-900 text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Skip
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="px-8 py-2 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {index === data.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>

          {/* Right Navigation Aside */}
          <QuestionNav
            totalQuestions={data.length}
            currentIndex={index}
            userAnswers={userAnswers}
            onNavigate={handleNavigate}
          />

        </div>
      )}
    </div>
  );
}