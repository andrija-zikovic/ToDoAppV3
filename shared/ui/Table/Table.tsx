import { useContext } from 'react'
import TodoContext from '../../../src/context/todoContext'
import ToDoCard from '../ToDoCard/ToDoCard'
import { Link } from 'react-router-dom'

const Table = () => {
    const { currentTable } = useContext(TodoContext)!
    return (
        <div
            id="ToDosTable"
            className="w-full flex flex-col justify-start items-center gap-2 p-2 min-h-96 overflow-scroll"
        >
            {currentTable.length <= 0 ? (
                <div className="w-full text-2xl min-h-80 text-center">
                    <p className="p-8">No Items To Show</p>
                    <Link
                        to="/todo/create"
                        className="border-2 border-gray-700 p-2 rounded-md hover:bg-orange-200"
                    >
                        Create ToDo
                    </Link>
                </div>
            ) : (
                currentTable.map((item) => <ToDoCard item={item} />)
            )}
        </div>
    )
}

export default Table
