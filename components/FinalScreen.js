const FinalScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 max-w-md w-full text-center bg-white rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz Complete!</h2>
                <div className="text-5xl font-extrabold text-blue-600 mb-4">{percentage}%</div>
                <p className="text-lg mb-6 text-gray-600">You got {score} out of {totalQuestions} correct.</p>
                <button
                    onClick={onRestart}
                    className="bg-gray-800 text-white px-8 py-2 rounded-full hover:bg-black transition"
                >
                    Restart
                </button>
            </div>
        </div>
    );
};
