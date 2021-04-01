import React from 'react';

const Question = ({question, selectedAnswer}) => {
    return (
        <div className="question">
            {
                selectedAnswer.id === question.id
                    ?
                  <>
                      <img className="question__bird-image"  src={question.image} alt="bird" />
                      <div className="question__content">
                          <h3 className="question__bird-name">{question.name}</h3>
                          <hr/>
                          <audio className="react-audio-player question__audio-player" controls id=""
                                 preload="metadata"
                                 src={question.audio}
                          >
                              <p>Your browser does not support the <code>audio</code> element.</p></audio>
                      </div></>

                    :
                    <>
                        <img className="question__bird-image" alt="bird"
                             src='https://ipgpt-birds-quiz.netlify.app/static/media/bird.06a46938.jpg'/><div className="question__content">
                        <h3 className="question__bird-name">*****</h3>
                        <hr/>
                        <audio className="react-audio-player question__audio-player" controls id=""
                               preload="metadata"
                               src={question.audio}
                        >
                            <p>Your browser does not support the <code>audio</code> element.</p></audio>
                    </div></>

            }


        </div>

    )
}

export default Question;