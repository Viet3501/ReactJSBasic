import logo from './logo.svg';
import './App.css';

const App = () => {
    // template + logic
    // JSX
    // babel
    // SPA : single page aplication

    let name = 'Việt';
    let number = 2022;
    let boolean = true;
    let obj = { name: 'Việt', age: 21 };
    return (
        <div className="App">
            {console.log(obj)}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>
                    My name is {name} in {number}
                </span>
                <p>{JSON.stringify(obj)}</p>
                <a href="" target = '_blank'>Visit my channel</a>
            </header>
        </div>
    );
};

export default App;
