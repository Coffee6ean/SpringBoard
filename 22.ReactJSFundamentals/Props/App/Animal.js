const Animal = (props) => {
    console.log(props);
    return (
        <ul>
        <li>Emoji: {props.emoji}</li>
        <li>Name: {props.name}</li>
        <li>Species: {props.species}</li>
        <li>Color: {props.color}</li>
        <li>Age: {props.age}</li>
        <li>Cute: {props.isCute ? '✔️' : '❌'}</li>
    </ul>
    )  
};