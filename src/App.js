import './App.css'; 
import {  useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';
import Title from './components/Title/Title';
import TodoCounter from './components/TodoCounter/TodoCounter';
import { Provider } from 'react-redux'; 
import { store } from './store';

function App() {
    const [newTodo, setNewTodo] = useState('');

    return (
        <Provider store={store}>
            <div className="App">
                <Title type="primary">Add Todo</Title>
                <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} />
                <Todos />
                <footer>
                    <TodoCounter />
                </footer>
            </div>
        </Provider>
    );
}

export default App;
