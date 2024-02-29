import React, {useState, useEffect} from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    console.log('Re-Rendering', seconds);
    // useEffect
    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
    }, []);

    // useState
    /*
    setInterval(() => {
        setSeconds(seconds => seconds + 1)
    }, 1000);
    */

    //axios.get('').then(setPokemon());
    return <h1>{seconds}</h1>
}

export default Timer;
