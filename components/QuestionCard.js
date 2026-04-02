const urlSlug = (url, segment) => {
    const match = url.match(new RegExp(`/${segment}/([^/]+)`));
    return match ? match[1] : url;
};

const QuestionCard = ({ question }) => {
    const correctCount = question.answers.filter(a => a.correct).length;
    return (
    <>
        <div className="mb-6 p-4 border border-blue-200 rounded-lg">
            <div className="space-y-2">
                <div className="flex items-start">
                    <span className="text-xs text-blue-800 uppercase tracking-wider mr-2 mt-0.5 whitespace-nowrap">Learning Path:</span>
                    <a
                        href={question.learningPath}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 underline decoration-1 leading-tight break-all"
                    >
                        {urlSlug(question.learningPath, 'paths')}
                    </a>
                </div>
                <div className="flex items-start">
                    <span className="text-xs text-blue-800 uppercase tracking-wider mr-2 mt-0.5 whitespace-nowrap">Module:</span>
                    <a
                        href={question.module}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 underline decoration-1 leading-tight break-all"
                    >
                        {urlSlug(question.module, 'modules')}
                    </a>
                </div>
            </div>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 leading-tight">
            {question.question}
        </h2>
        {correctCount > 1 && (
            <p className="text-sm text-blue-600 font-medium mb-4">Select {correctCount} answers</p>
        )}
    </>
    );
};
