import { useSelector } from "react-redux";
import { selectTodos } from "../../features/todo/todoSlice";

const Todos = () => {
    const todos = useSelector(selectTodos);

    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index}>
                    <span>{todo.text}</span>
                </li>
            ))}
        </ul>
    );
};

export default Todos;
