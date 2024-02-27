import React, {useState} from 'react';
import NumberItem from './NumberItem';

const genId = () => {
    return Math.random() * 100000000;
}

const NumberList = () => {
    const [numbers, setNumbers] = useState([2,5,7,11,12,18,11,11]);
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num));
        console.log("Removing:", num);
    }

    return (
        <ul>
            {numbers.map(n => (
                <NumberItem number={n} remove={remove} key={genId()}/>
            ))}
        </ul>
    )
}

export default NumberList;
