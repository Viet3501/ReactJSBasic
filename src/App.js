import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './Nav/Nav';
import Todos from './Todos/Todos';
const App = () => {
    // template + logic
    // JSX
    // babel
    // SPA : single page aplication
    // re-render
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

    const handleClick = () => {
        if (!action) {
            alert('Missing');
            return;
        } else {
            setTodos([...todos, { id: Math.round(Math.random() * 100), title: action }]);
        }
        setAction('');
    };
    const handleOnChange = (e) => {
        setAction(e.target.value);
    };
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>Todos list of Việt</span>
                <input 
                    placeholder="tìm kiếm" 
                    value={action} 
                    onChange={(e) => handleOnChange(e)}  
                />
                <button onClick={() => handleClick()}>Click me!</button>
                <Todos title='All todos' myData={todos} />
            </header>
        </div>
    );
};

export default App;
