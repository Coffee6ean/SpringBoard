import React, {useState, useEffect} from "react";

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1);
    };

    useEffect(() => {
        console.log('Running Callback!');
        document.title = `Hello${'!'.repeat(num)}`;
    });

    return (
        <div>
            {/* console.log('Rendering') */}
            Let's get excited.
            <button onClick={increment}>Get more excited.</button>
            <p>Counter: {num}</p>
        </div>
    )
}

export default Counter;
