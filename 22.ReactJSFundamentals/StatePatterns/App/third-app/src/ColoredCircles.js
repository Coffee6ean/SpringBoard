import React, {useState} from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";
import './style/ColorButtons.css';

function getRandom(min = 0, max = 100) {
    return Math.random() * (max-min) + min;
}

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);
    /*
    const addCircle = () => {
        setCircles(circles => {
            const newCircles = circles.slice();
            newCircles.push('magenta');
            return newCircles;
        })
    }
    */

    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom()}]);
    }

    /*
    const changePosition = (idx) => {
        setCircles(circles => {
            const copy = [...circles];
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        })
    }
    */

    const changePosition = (idx) => {
        setCircles(circles => {
            if (!circles) {
                return []; // Initialize circles if it's undefined
            }
            
            return circles.map((circle, i) => (
                i === idx 
                    ? {...circle, x: getRandom(), y: getRandom()}
                    : circle
            ));
        });
    }
    

    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['lightsteelblue', 'paleturquoise']}/>
            <ColorButtons addCircle={addCircle} options={['orange', 'magenta', 'teal']}/>
            {circles.map(({color, x, y}, idx) => (
                <Circle changePosition={changePosition} color={color} idx={idx} key={idx} x={x} y={y}/>
            ))}
            {/* <button onClick={() => addCircle('magenta')}>Add</button> */}
        </div>
    )
}

export default ColoredCircles;
