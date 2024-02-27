import React, {useState} from 'react';

function SimpleCounter() {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    //Will prompt error due to hook rules
    /*
    if(num % 2 === 1) {
        const [num2, setNum2] = useState(0);
    }
    */
    console.log("Running again! Num is:", num);

    const clickUp = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickUp}>Up</button>
            <h3>Count2: {num2}</h3>
            <button onClick={() => setNum2(num2 + 1)}>Up</button>
        </div>
    );
}

export default SimpleCounter;
