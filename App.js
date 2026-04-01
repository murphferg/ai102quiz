const { useState } = React;

const AI102Quiz = () => {
    const [view, setView] = useState('setup');
    const [numRequested, setNumRequested] = useState(10);
    const [quizSet, setQuizSet] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
    const [score, setScore] = useState(0);
    const [answeredCorrectly, setAnsweredCorrectly] = useState({});
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const startQuiz = () => {
        const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.min(numRequested, questionPool.length));
        setQuizSet(selected);
        setCurrentIndex(0);
        setScore(0);
        setAnsweredCorrectly({});
        setWrongAnswers([]);
        resetQuestionState();
        setView('quiz');
    };

    const resetQuestionState = () => {
        setSelectedAnswerId(null);
        setIsAnswerChecked(false);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswerId === null) return;
        const currentQuestion = quizSet[currentIndex];
        const selectedObj = currentQuestion.answers.find(a => a.id === selectedAnswerId);

        if (selectedObj.correct && !answeredCorrectly[currentIndex]) {
            setScore(prev => prev + 1);
            setAnsweredCorrectly(prev => ({ ...prev, [currentIndex]: true }));
        } else if (!selectedObj.correct) {
            setWrongAnswers(prev => {
                const alreadyRecorded = prev.some(w => w.question.id === currentQuestion.id);
                if (alreadyRecorded) return prev;
                return [...prev, { question: currentQuestion, selectedAnswerId }];
            });
        }
        setIsAnswerChecked(true);
    };

    const handleNext = () => {
        if (currentIndex < quizSet.length - 1) {
            setCurrentIndex(prev => prev + 1);
            resetQuestionState();
        } else {
            setView('final');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            resetQuestionState();
        }
    };

    if (view === 'setup') {
        return (
            <SetupScreen
                questionCount={questionPool.length}
                numRequested={numRequested}
                setNumRequested={setNumRequested}
                onStart={startQuiz}
            />
        );
    }

    if (view === 'final') {
        return (
            <FinalScreen
                score={score}
                totalQuestions={quizSet.length}
                wrongAnswers={wrongAnswers}
                onRestart={() => setView('setup')}
            />
        );
    }

    const currentQ = quizSet[currentIndex];

    return (
        <div className="p-4 md:p-10 max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-200">
                <QuizHeader
                    currentIndex={currentIndex}
                    totalQuestions={quizSet.length}
                    score={score}
                />
                <QuestionCard question={currentQ} />

                <div className="space-y-4 mb-10">
                    {!isAnswerChecked ? (
                        <AnswerOptions
                            answers={currentQ.answers}
                            selectedAnswerId={selectedAnswerId}
                            onSelect={setSelectedAnswerId}
                        />
                    ) : (
                        <ResultsDisplay
                            question={currentQ}
                            selectedAnswerId={selectedAnswerId}
                        />
                    )}
                </div>

                <QuizNavigation
                    currentIndex={currentIndex}
                    totalQuestions={quizSet.length}
                    selectedAnswerId={selectedAnswerId}
                    isAnswerChecked={isAnswerChecked}
                    onPrev={handlePrev}
                    onCheckAnswer={handleCheckAnswer}
                    onNext={handleNext}
                />
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AI102Quiz />);
