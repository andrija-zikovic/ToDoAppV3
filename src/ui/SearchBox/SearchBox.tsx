import { useTodoList } from '../../hooks/useTodoList'

export const SearchBox = () => {
    const search = useTodoList()
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
                    search.handleSearch(e.target.value)
                }}
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox
