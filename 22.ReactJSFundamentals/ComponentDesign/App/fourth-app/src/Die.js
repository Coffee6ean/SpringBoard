import React from "react";
import './style/Die.css';
import './style/Dice.css';

const Die = ({val}) => {
    return (
        <div className="Die">
            {val}
        </div>
    )
}

export default Die;
