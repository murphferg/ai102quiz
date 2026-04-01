const FinalScreen = ({ score, totalQuestions, wrongAnswers, onRestart }) => {
    const { useState } = React;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    const [reviewItem, setReviewItem] = useState(null);

    return (
        <div className="p-4 md:p-10 max-w-3xl mx-auto">
            {/* Score summary */}
            <div className="mb-6 p-8 text-center bg-white rounded-xl shadow-lg border border-gray-200">
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

            {/* Wrong answers review list */}
            {wrongAnswers.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-red-600">Review Incorrect Answers ({wrongAnswers.length})</h3>
                        <p className="text-sm text-gray-400">Click any question to see the explanation.</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                        {wrongAnswers.map((item, i) => (
                            <button
                                key={item.question.id}
                                onClick={() => setReviewItem(reviewItem === i ? null : i)}
                                className="w-full text-left px-6 py-4 hover:bg-red-50 transition"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-800 mb-1">{item.question.question}</p>
                                        <p className="text-xs text-red-500">
                                            Your answer: {item.question.answers.find(a => a.id === item.selectedAnswerId).answer}
                                        </p>
                                    </div>
                                    <span className="text-gray-400 text-sm flex-shrink-0">{reviewItem === i ? '▲' : '▼'}</span>
                                </div>
                                {reviewItem === i && (
                                    <div className="mt-4 text-left" onClick={e => e.stopPropagation()}>
                                        <ResultsDisplay
                                            question={item.question}
                                            selectedAnswerId={item.selectedAnswerId}
                                        />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
