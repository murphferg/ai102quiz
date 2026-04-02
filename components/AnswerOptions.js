const AnswerOptions = ({ answers, selectedAnswerIds, onToggle }) => {
    const isMultiSelect = answers.filter(a => a.correct).length > 1;
    return (
        <div className="space-y-4">
            {answers.map(ans => {
                const isSelected = selectedAnswerIds.includes(ans.id);
                return (
                    <button
                        key={ans.id}
                        onClick={() => onToggle(ans.id)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            isSelected
                            ? 'border-blue-500 bg-blue-50 shadow-md'
                            : 'border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-white'
                        }`}
                    >
                        <div className="flex items-center">
                            {isMultiSelect ? (
                                <div className={`w-5 h-5 rounded border-2 mr-3 flex-shrink-0 flex items-center justify-center ${
                                    isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                }`}>
                                    {isSelected && <span className="text-white text-xs font-bold">✓</span>}
                                </div>
                            ) : (
                                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 ${
                                    isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                }`}></div>
                            )}
                            <span className="text-gray-700 font-medium">{ans.answer}</span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};
