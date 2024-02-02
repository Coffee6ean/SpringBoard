//For Loop Method
/*
const TodoList = (props) => {
    const todos = [];
    for(let t of props.todos) {
        console.log(t);
        todos.push(<li>{t}</li>);
    }
    return (
        <div>
            <hr/>
            <h4>Todo List</h4>
            <ul>{todos}</ul>
        </div>
    )
}
*/

//Array Method - .map()
const TodoList = (props) => {
    return (
        <div>
            <hr/>
            <h4>Todo List</h4>
            <ul>{props.todos.map(t => (
                <li>
                    <input type='checkbox'/>
                    {t}
                </li>
            ))}</ul>
        </div>
    )
}
