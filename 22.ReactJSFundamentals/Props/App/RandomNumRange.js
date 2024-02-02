const RandomNumRange = ({min=1, max=10}) => {
    const rand = Math.floor(Math.random() * (max - min)) + min;
    /*
    return (
        <div>
            <hr/>
            <h1>Rand is: {rand}</h1>
        </div>
    )
    */
    return React.createElement('div', null,
        React.createElement('hr', null),
        React.createElement('h1', null, 'Rand is: ', rand)
    );
}