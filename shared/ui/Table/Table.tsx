import { useContext } from 'react'
import Context from '../../../src/context/context'
import ToDoCard from '../ToDoCard/src/components/ToDoCard'
import { Link } from 'react-router-dom'

const Table = () => {
    const { currentTable } = useContext(Context)!
    return (
        <div
            id="ToDosTable"
            className="w-full flex flex-col justify-start items-center gap-2 p-2 min-h-96 overflow-scroll"
        >
            {currentTable.length <= 0 ? (
                <div className="w-full text-2xl flex flex-col justify-center items-center min-h-80 gap-8 text-center p-3">
                    <p>No Items To Show</p>
                    <button>
                        <Link to="/todo/create">Create ToDo</Link>
                    </button>
                </div>
            ) : (
                currentTable.map((item, index) => (
                    <ToDoCard key={index} index={index} item={item} />
                ))
            )}
        </div>
    )
}

export default Table
