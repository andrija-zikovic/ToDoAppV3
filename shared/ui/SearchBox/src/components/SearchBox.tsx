import React from 'react'

type SearchBoxProps = {
    handleSearch: (value: string) => void
}

export const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value)
    }
    return (
        <div className="w-auto p-3 flex flex-row justify-center items-center md:p-2">
            <label htmlFor="search" className="sr-only ">
                Search
            </label>
            <input
                type="text"
                name="search"
                id="search"
                className="p-1 border-2 border-gray-700 rounded-md text-xl"
                onChange={(e) => {
                    handleInputChange(e)
                }}
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox
