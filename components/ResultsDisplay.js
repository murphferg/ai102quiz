const ResultsDisplay = ({ question, selectedAnswerIds }) => {
    const correctAnswers = question.answers.filter(a => a.correct);
    const incorrectAnswers = question.answers.filter(a => !a.correct);
    const isCorrect =
        correctAnswers.length === selectedAnswerIds.length &&
        correctAnswers.every(a => selectedAnswerIds.includes(a.id));

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className={`p-4 rounded-xl font-black text-xl text-center uppercase tracking-widest ${
                isCorrect
                ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                : 'bg-red-500 text-white shadow-lg shadow-red-200'
            }`}>
                {isCorrect ? "✓ Correct" : "✗ Incorrect"}
            </div>

            <div className="p-6 border-l-8 border-green-500 bg-green-50 rounded-r-xl">
                <p className="font-bold text-green-800 text-sm uppercase mb-3">
                    {correctAnswers.length > 1 ? 'Correct Answers & Explanations' : 'Correct Answer & Explanation'}
                </p>
                {correctAnswers.map(ans => (
                    <div key={ans.id} className="mb-4 last:mb-0">
                        <p className="text-lg font-bold text-gray-900 mb-1">{ans.answer}</p>
                        <p className="text-gray-700 leading-relaxed mb-2">{ans.explanation}</p>
                        {ans.source && ans.source.startsWith('http') && (
                            <a
                                href={ans.source}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block text-sm font-bold text-blue-600 hover:text-blue-800 underline decoration-2"
                            >
                                Read Documentation →
                            </a>
                        )}
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Why the others were wrong:</p>
                {incorrectAnswers.map(ans => {
                    const wasSelected = selectedAnswerIds.includes(ans.id);
                    return (
                        <div key={ans.id} className={`p-4 border rounded-xl ${wasSelected ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'}`}>
                            <p className={`font-semibold mb-1 ${wasSelected ? 'text-red-500 line-through' : 'text-gray-400 line-through'}`}>{ans.answer}</p>
                            {wasSelected && <p className="text-xs font-bold text-red-400 mb-1 uppercase">You selected this</p>}
                            <p className="text-sm text-gray-500 italic">{ans.explanation}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
