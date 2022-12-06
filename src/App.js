import logo from './logo.svg';
import './App.css';
import Nav from './View/Nav/Nav';
import { useReducer, useState } from 'react';

const App = () => {
    // template + logic
    // JSX
    // babel
    // SPA : single page aplication

    const [action, setAction] = useState('');
    const [todos, setTodos] = useState([
        {
            id: 'todo1',
            title: 'Watching Hỏi Dân IT channel',
        },
        {
            id: 'todo2',
            title: 'Doing homeworks',
        },
        {
            id: 'todo3',
            title: 'Playing game',
        },
    ]);

    const handleClick = (event) => {
        if (!action) {
            alert('Missing');
            return;
        } else {
            setTodos([...todos, { id: Math.round(Math.random() * 100), title: action }]);
        }
        setAction('')
    };
    const handleOnChange = (e) => {
        setAction(e.target.value);
    };
    // re-render
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>Todos list of Việt</span>
                <input placeholder="tìm kiếm" value={action} onChange={(e) => handleOnChange(e)} />
                <button onClick={() => handleClick()}>Click me!</button>
                <div className="todo-container">
                    {todos.map((todo, index) => {
                        return <li key={todo.id}>{todo.title}</li>;
                    })}
                </div>
            </header>
        </div>
    );
};

export default App;
