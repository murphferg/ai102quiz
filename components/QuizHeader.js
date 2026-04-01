const QuizHeader = ({ currentIndex, totalQuestions, score }) => (
    <div className="flex justify-between items-center mb-6 border-b pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
            Current Score: {score}
        </span>
    </div>
);
