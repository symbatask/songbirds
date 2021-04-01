import React from 'react';
import Items from '../Items/Items'

const Header = ({step, points}) => {
    const levels = [
        {
            id: 1,
            name: "Разминка"
        },
        {
            id: 2,
            name: "Воробьиные"
        },
        {
            id: 3,
            name: "Лесные"
        },
        {
            id: 4,
            name: "Певчие"
        },
        {
            id: 5,
            name: "Хищные"
        },
        {
            id: 6,
            name: "Морские"
        },
    ]
    return (
        <div className="header">
            <div className="header__top-part">
                <h2 className="header__logo">SongBird</h2>
                <h5 className="header__score">Счет: {points}</h5></div>
            <div className="header__bottom-part">
                <ul className="header__level-list">
                    {
                        levels.map((el) => (
                            <Items key={el.id} el={el} step={step}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;