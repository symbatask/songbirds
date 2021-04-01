import React from 'react';

const EndGame = ({resetAll, points}) => {
    return (
        <div className="App__gameover">
            <h2 className="App__finish-headline">Игра окончена!</h2>
            <h4 className="App__finish-text">Вы прошли викторину и набрали {points} из 30 возможных баллов.</h4>
            <hr />
            <button
                onClick={resetAll} className="App__button">Попробовать еще раз!</button>
        </div>
);
}

export default EndGame;