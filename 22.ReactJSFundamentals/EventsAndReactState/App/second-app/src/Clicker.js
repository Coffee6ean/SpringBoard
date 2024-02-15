import React from 'react';


const Clicker = () => {
    const fireLasers = (e) => {
        console.log(e.currentTarget);
        console.log(e.nativeEvent);
        console.log(e);
        /*
        console.log(e);
        console.log('The Lasers have been fired!!');
        console.log('Pew Pew Pew');
        */
    };
    return (
        <>
            <button onClick={fireLasers}>Click Me!</button>
            <textarea onScroll={fireLasers} rows='2'>
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v  
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
                qnijv qi v qnijv qi v qnijv qi v qnijv qi v
            </textarea>
        </>
    )
}

export default Clicker;
