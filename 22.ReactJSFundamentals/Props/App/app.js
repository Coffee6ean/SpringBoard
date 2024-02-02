const App = () => (
    <div>
        <Alert>
            <Animal name="Steve" species='Chicken' emoji='🐔' color='White' age={3} isCute/>
            <Animal name='Julian' species='Monkey' emoji='🐒' isFriendly={true} obj={{age:4}}/>
        </Alert>
        <RandomChoice choices={['red', 'green', 'yellow']}/>
        <Bouncer age={19}/>
        <Bouncer age={14}/>
        <Bouncer age={22}/>
        <TodoList todos={['Walk Puggas', 'Feed Puggas', 'Eat']}/>
        <RandomNumRange min={10} max={20}/>
        <RandomNumRange/>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));
