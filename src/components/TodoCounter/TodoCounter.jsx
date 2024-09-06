import { useSelector } from "react-redux";
import { selectTodoCount} from '../../features/todo/todoSlice'

const TodoCounter = () => {

    const count = useSelector(selectTodoCount)
    return( 
        <p className="counter">Всього: <span>{count}</span></p> 
    )
}

export default TodoCounter