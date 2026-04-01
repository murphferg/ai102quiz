const AnswerOptions = ({ answers, selectedAnswerId, onSelect }) => (
    <div className="space-y-4">
        {answers.map(ans => (
            <button
                key={ans.id}
                onClick={() => onSelect(ans.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswerId === ans.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-white'
                }`}
            >
                <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 ${
                        selectedAnswerId === ans.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}></div>
                    <span className="text-gray-700 font-medium">{ans.answer}</span>
                </div>
            </button>
        ))}
    </div>
);
