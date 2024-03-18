import { useContext } from 'react'
import Context from '../../../../../src/context/context'
import SearchBox from '../../../SearchBox/src/components/SearchBox'
import SortDateButtonProvider from '../../../SortDate/src/components/SortDateButtonProvider'

export const SearchProvider = () => {
    const { localTable, setCurrentTable } = useContext(Context)!

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
