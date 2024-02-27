import React from "react";
import './style/ColorButtons.css'

const ColorButton = ({color, addCircle}) => {
    return (
        <button onClick={() => addCircle(color)} className="ColorButtons-btn" style={{backgroundColor: color}}>
            {color}
        </button>
    )
}

export default ColorButton;
