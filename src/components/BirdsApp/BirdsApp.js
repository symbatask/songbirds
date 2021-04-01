import React, {useState, useEffect} from 'react';
import birdsData from "../../birdsData";
import Question from "../Question/Question";
import CurrentAnswer from "../CurrentAnswer/CurrentAnswer";
import Answers from "../Answers/Answers";
import NextStep from "../NextStep/NextStep";
import EndGame from "../EndGame/EndGame";
import Header from "../Header/Header";
import correct from './jg-032316-sfx-elearning-correct-answer-sound-1.mp3'
import wrong from './z_uk-proigrysha.mp3'

const BirdsApp = () => {
    const [question, setQuestion] = useState({})
    const [step, setStep] = useState(1)
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const [isRightAnswer, setIsRightAnswer] = useState(false)
    const [points, setPoints] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState([])
    const isCurrentAnswerRight = () => {
        if (selectedAnswer.id === question.id) {
            setIsRightAnswer(true)
            new Audio(correct).play()
        } else {
            setIsRightAnswer(false)
            new Audio(wrong).play()

        }
    }
    let currentAnswers = birdsData[step - 1]

    useEffect(() => {
        setCurrentQuestion()
    }, [currentAnswers])

    useEffect(() => {
        isCurrentAnswerRight()
    })

    const resetAll = () => {
        setQuestion({})
        setSelectedAnswer({})
        setStep(1)
        setIsRightAnswer(false)
    }
    const setCurrentQuestion = () => {
        if(currentAnswers){
            const questionId = (getRandomAudio(1, currentAnswers.length))
            const question = currentAnswers.find(el => el.id === questionId)
            setQuestion(question)
        }
    }

    const getRandomAudio = (min, max) => Math.floor(Math.random() * (max - min) + min)

    return (
        <div className='app'>
            <div className="container">
                <Header points={points} step={step}/>
                {
                    step - 1 < birdsData.length
                        ? <>
                            <Question selectedAnswer={selectedAnswer} question={question}/>
                            <div className="App__answers-and-info">
                                <CurrentAnswer question={question} isRightAnswer={isRightAnswer} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} currentAnswers={currentAnswers} step={step} setStep={setStep} points={points} setPoints={setPoints} wrongAnswers={wrongAnswers} setWrongAnswers={setWrongAnswers}/>
                                <Answers selectedAnswer={selectedAnswer}/>
                            </div>
                            <NextStep isRightAnswer={isRightAnswer} setStep={setStep} step={step} setSelectedAnswer={setSelectedAnswer} setWrongAnswers={setWrongAnswers} wrongAnswers={wrongAnswers}/>
                        </>
                        : <EndGame points={points} resetAll={resetAll} />
                }
            </div>
        </div>
    );
};

export default BirdsApp;