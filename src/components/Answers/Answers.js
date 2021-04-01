import React from 'react';

const Answers = ({selectedAnswer}) => {
    return (
            <>
                {
                Object.keys(selectedAnswer).length !== 0
                    ? <div className='description'>
                        <div className='description__content'>
                            <div className='description__img'>
                                <img src={selectedAnswer.image} alt="asd"/>
                            </div>
                            <div className='description__left-side'>
                                <h4>{selectedAnswer.name}</h4>
                                <hr/>
                                <p>{selectedAnswer.species}</p>
                                <hr/>
                                <audio controls src={selectedAnswer.audio}></audio>
                            </div>
                        </div>
                        <p>{selectedAnswer.description}</p>
                    </div>

                    :<div className="description">
                        <p className="description__start-text">Послушайте плеер.<br/>Выберите
                            птицу из списка.</p>
                    </div>


            }
            </>
    );
};

export default Answers;