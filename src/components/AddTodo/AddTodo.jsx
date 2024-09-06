import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

const AddTodo = ({ newTodo, setNewTodo }) => {
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');  
        }
    };

    return (
        <div className="top-todo">
            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="What I need"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default AddTodo;
