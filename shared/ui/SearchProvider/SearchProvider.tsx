import { useContext } from 'react'
import TodoContext from '../../../src/context/todoContext'
import SearchBox from '../SearchBox/SearchBox'
import SortDateButtonProvider from '../SortDate/SortDateButtonProvider'

export const SearchProvider = () => {
    const { localTable, setCurrentTable } = useContext(TodoContext)!

    const handleSearch = (value: string) => {
        if (value === '') {
            setCurrentTable(localTable)
        } else {
            setCurrentTable(
                localTable.filter((todo) =>
                    todo.description.toLowerCase().includes(value.toLowerCase())
                )
            )
        }
    }

    return (
        <div className="relative w-full flex flex-row justify-center items-center md:w-auto">
            <SortDateButtonProvider />
            <SearchBox handleSearch={handleSearch} />
        </div>
    )
}

export default SearchProvider
