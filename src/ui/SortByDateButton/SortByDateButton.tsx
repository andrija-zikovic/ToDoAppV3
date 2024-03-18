import { useState, useContext } from 'react'
import { DateDown, DateUp } from '../Icons/index'
import { SortStage } from '../../enums/stage'
import TodoContext from '../../../src/context/todoContext'

export const SortByDateButton = () => {
    const { currentTable, setCurrentTable } = useContext(TodoContext)!

    const [sort, setSort] = useState(SortStage.OLDEST)

    const handleSort = () => {
        if (sort === 'newest') {
            const newTable = [...currentTable].sort(
                (a, b) => b.created_at - a.created_at
            )
            setCurrentTable(newTable)
            setSort(SortStage.OLDEST)
        } else {
            setCurrentTable(
                [...currentTable].sort((a, b) => a.created_at - b.created_at)
            )
            setSort(SortStage.NEWEST)
        }
    }

    return (
        <button
            id="sortDateMobile"
            className="h-9 w-10 bg-gray-700 p-0 flex justify-center items-center rounded-md cursor-pointer transition-all duration-300 ease-in-out fill-orange-200 hover:fill-slate-950 focus:fill-slate-950 active:fill-slate-950 md:static"
            onClick={() => {
                handleSort()
            }}
        >
            {sort === SortStage.NEWEST ? <DateDown /> : <DateUp />}
        </button>
    )
}

export default SortByDateButton
