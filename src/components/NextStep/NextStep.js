import React from 'react';

const NextStep = ({step, setStep, isRightAnswer, setSelectedAnswer, setWrongAnswers}) => {
    return (
            <button
                onClick={() => {
                    setStep(step + 1)
                    setSelectedAnswer({})
                    setWrongAnswers([])
                }}
                disabled={!isRightAnswer}
                className="App__button">Следующий вопрос</button>
    );
}

export default NextStep;