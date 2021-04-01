import React, {useState, useEffect} from 'react';

const Items = ({step, el}) => {
    const [color, setColor] = useState('')
    
    const setBgColor = () => {
        if (step === el.id) 
            setColor('green')
        else if (step > el.id)
            setColor('darkgreen')
        else
            setColor('gray')
    }
    useEffect(() => {
        setBgColor()
    })
    return (
            <li style={{backgroundColor: color}} className="header__level-item header__level-item--in-progress">{el.name}</li>
    );
};

export default Items;