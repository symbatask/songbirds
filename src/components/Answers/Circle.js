import React, {useState, useEffect} from 'react';

const Circle = ({selectedAnswer, question, index}) => {
    const [color, setColor] = useState('')

    const setBgColor = ()=> {
        if (question.id === index && question.id === selectedAnswer.id) {
            setColor('green')
        }
        else if (selectedAnswer.id === index) {
            setColor('red')
        }
        else if (!selectedAnswer.isChecked) {
            setColor('gray')
        }
    }
    useEffect(() => {
        setBgColor()
    })
    return (
        <div className='circle' style={{backgroundColor: color}}>
        </div>

    )
}

export default Circle;