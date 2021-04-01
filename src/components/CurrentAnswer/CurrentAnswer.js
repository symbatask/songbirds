import React, {useEffect} from 'react';
import Circle from '../Answers/Circle'

const CurrentAnswer = ({question, currentAnswers, selectedAnswer, setSelectedAnswer, isRightAnswer, setPoints, points, wrongAnswers, step, setWrongAnswers}) => {
    const rightAnswer = (item) => {
        setSelectedAnswer({...item, isChecked: true})
    }
    useEffect(() => {
        console.log(selectedAnswer)
        if (Object.keys(selectedAnswer).length > 0){
            if (selectedAnswer.id === question.id){
                let pts = points + 5 - wrongAnswers.length;
                setPoints(pts)
            }
            else{
                let exists = wrongAnswers.find(el => el.id === selectedAnswer.id)
                if(!exists) {
                    wrongAnswers.push({...selectedAnswer})
                }
            }
        }

    }, [selectedAnswer])
    return (
        <>
            <div className="answers">
                {
                    currentAnswers.map(el => (
                        <button
                            key={el.id}
                            onClick={() => rightAnswer(el)}
                            disabled={isRightAnswer}
                            className='answers__button'>
                                <Circle question={question} selectedAnswer={selectedAnswer} currentAnswers={currentAnswers} index={el.id}/>
                                {el.name}
                        </button>
                    ))
                }
            </div>
        </>
    );
};

export default CurrentAnswer;