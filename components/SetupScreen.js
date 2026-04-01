const SetupScreen = ({ questionCount, numRequested, setNumRequested, onStart }) => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="p-8 max-w-md w-full bg-white rounded-xl shadow-lg space-y-4 border border-gray-200">
            <h1 className="text-2xl font-bold text-blue-600">AI-102 Exam Prep</h1>
            <p className="text-gray-600">How many questions would you like to take?</p>
            <p className="text-sm text-gray-400">{questionCount} questions available</p>
            <input
                type="number"
                value={numRequested}
                onChange={(e) => setNumRequested(parseInt(e.target.value) || 0)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                min="1"
                max={questionCount}
            />
            <button
                onClick={onStart}
                disabled={questionCount === 0}
                className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Start Quiz
            </button>
        </div>
    </div>
);
