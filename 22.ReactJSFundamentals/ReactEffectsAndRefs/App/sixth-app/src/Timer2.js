import React, {useState, useEffect, useRef} from "react";
let intervalId;

const Timer2 = () => {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef();
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000)

        return () => {
            clearInterval(timerId.current);
        }
    }, []);

    const stopTimer = () => {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}