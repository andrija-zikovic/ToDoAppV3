import { useContext } from 'react'
import TodoContext from '../../../src/context/todoContext'

export const SearchBox = () => {
    const { localTable, setCurrentTable } = useContext(TodoContext)!

    const handleSearch = (value: string) => {
        if (value === '') {
            setCurrentTable(localTable)
            return
        }

        const filteredTable = localTable.filter((todo) =>
            todo.description.toLowerCase().includes(value.toLowerCase())
        )

        setCurrentTable(filteredTable)
    }

    return (
        <div className="w-full max-w-80 p-3 flex flex-row justify-center items-center md:p-2">
            <label htmlFor="search" className="sr-only ">
                Search
            </label>
            <input
                type="text"
                name="search"
                id="search"
                className="p-1 border-2 border-gray-700 rounded-md text-xl w-full"
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox
