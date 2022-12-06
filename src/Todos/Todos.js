import './Todos.scss';

function Todos(props) {
    console.log(props.myData)
    const todos = props.myData

    return (
        <div>
            <div className="todo-container">
                {todos.map((todo, index) => {
                    return <li key={todo.id}>{todo.title}</li>;
                })}
            </div>
        </div>
    );
}

export default Todos;
