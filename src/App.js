import "./App.css";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className='app'>
            <h2>What's the plan for today</h2>
            <TodoList />
        </div>
    );
}

export default App;
