const FinalScreen = ({ score, totalQuestions, wrongAnswers, onRestart }) => {
    const { useState } = React;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    const [reviewItem, setReviewItem] = useState(null);

    const handleReviewItem = (i) => setReviewItem(reviewItem === i ? null : i);

    return (
        <div className="p-4 md:p-10 max-w-3xl mx-auto">
            {/* Score summary — collapses to a single line when a wrong answer is expanded */}
            {reviewItem !== null ? (
                <button
                    onClick={() => setReviewItem(null)}
                    className="w-full mb-4 px-6 py-3 text-left bg-white rounded-xl shadow border border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition flex items-center justify-between"
                >
                    <span>Score: {percentage}% &mdash; {score}/{totalQuestions}</span>
                    <span className="text-sm text-blue-500">▼ expand</span>
                </button>
            ) : (
                <ScoreSummary score={score} totalQuestions={totalQuestions} onRestart={onRestart} />
            )}

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
                                onClick={() => handleReviewItem(i)}
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
