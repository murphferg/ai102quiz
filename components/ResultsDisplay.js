const ResultsDisplay = ({ question, selectedAnswerId }) => {
    const correctAnswer = question.answers.find(a => a.correct);
    const wrongAnswers = question.answers.filter(a => !a.correct);
    const isCorrect = question.answers.find(a => a.id === selectedAnswerId).correct;

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
                <p className="font-bold text-green-800 text-sm uppercase mb-2">Correct Answer & Explanation</p>
                <p className="text-lg font-bold text-gray-900 mb-3">{correctAnswer.answer}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{correctAnswer.explanation}</p>
                <a
                    href={correctAnswer.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-bold text-blue-600 hover:text-blue-800 underline decoration-2"
                >
                    Read Documentation →
                </a>
            </div>

            <div className="space-y-4">
                <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Why the others were wrong:</p>
                {wrongAnswers.map(ans => (
                    <div key={ans.id} className="p-4 border border-gray-200 bg-white rounded-xl">
                        <p className="font-semibold text-gray-400 line-through mb-1">{ans.answer}</p>
                        <p className="text-sm text-gray-500 italic">{ans.explanation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
