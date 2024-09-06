import { createSlice } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: loadTodosFromLocalStorage(),
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload });
            saveTodosToLocalStorage(state.todos);
        }, 
    }
})

export const { addTodo } = todoSlice.actions;
export const selectTodos = state => state.todo.todos;
export const selectTodoCount = state => state.todo.todos.length;
export default todoSlice.reducer;
