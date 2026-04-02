const QuizNavigation = ({ currentIndex, totalQuestions, selectedAnswerIds, isAnswerChecked, onPrev, onCheckAnswer, onNext }) => (
    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
        <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="px-6 py-2 text-gray-600 font-bold hover:text-gray-900 disabled:opacity-0 transition"
        >
            ← Prev
        </button>

        {!isAnswerChecked ? (
            <button
                onClick={onCheckAnswer}
                disabled={selectedAnswerIds.length === 0}
                className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:shadow-none"
            >
                Check Answer
            </button>
        ) : (
            <button
                onClick={onNext}
                className={`px-10 py-3 text-white rounded-xl font-bold shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                    currentIndex === totalQuestions - 1
                    ? 'bg-purple-600 shadow-purple-200 hover:bg-purple-700'
                    : 'bg-blue-600 shadow-blue-200 hover:bg-blue-700'
                }`}
            >
                {currentIndex === totalQuestions - 1 ? 'Final Score' : 'Next Question →'}
            </button>
        )}
    </div>
);
