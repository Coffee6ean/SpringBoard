import React, {useState} from "react";
import Circle from "./Circle";

const ColoredCircles = () => {
    const [circles, setCircles] = useState(['indigo', 'peachpuff', 'lavender', 'cornflowerblue']);
    /*
    const addCircle = () => {
        setCircles(circles => {
            const newCircles = circles.slice();
            newCircles.push('magenta');
            return newCircles;
        })
    }
    */
   const addCircle = () => {
    setCircles(circles => [...circles, 'magenta']);
   }

    return(
        <div>
            {circles.map((color, idx) => (
                <Circle color={color} idx={idx} key={idx}/>
            ))}
            <button onClick={addCircle}>Add</button>
        </div>
    )
}

export default ColoredCircles;
