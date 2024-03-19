import { useTodoList } from '../../hooks/useTodoList'
import ToDoCard from '../ToDoCard/ToDoCard'
import { Link } from 'react-router-dom'

const Table = () => {
    const todos = useTodoList()
    return (
        <div
            id="ToDosTable"
            className="w-full flex flex-col justify-start items-center gap-2 p-2 min-h-96 overflow-scroll"
        >
            {todos.currentTable.length <= 0 ? (
                <div className="w-full text-2xl min-h-80 text-center">
                    <p className="p-8">No Items To Show</p>
                    <Link
                        to="/todo/create"
                        className="border-2 border-gray-700 p-2 rounded-md hover:bg-orange-200 dark:border-orange-200 dark:hover:text-gray-700"
                    >
                        Create ToDo
                    </Link>
                </div>
            ) : (
                todos.currentTable.map((item) => <ToDoCard item={item} />)
            )}
        </div>
    )
}

export default Table
