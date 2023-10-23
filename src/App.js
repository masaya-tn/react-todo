import logo from './logo.svg';
import './App.css';
import { Todo } from './components/InputTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <div>
          <Todo />
        </div>
      </header>
    </div>
  );
}

export default App;
