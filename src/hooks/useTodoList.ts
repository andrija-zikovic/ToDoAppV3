import { useContext, useState } from 'react'
import TodoContext from '../context/todoContext'
import { Stage, SortStage, TSortStage } from '../enums/stage'

export const useTodoList = () => {
    const { currentTable, setCurrentTable, localTable } =
        useContext(TodoContext)!

    const sortByStage = (stage: string) => {
        if (stage === Stage.ALL) {
            setCurrentTable(localTable)
            return
        }

        setCurrentTable(localTable.filter((todo) => todo.stage === stage))
    }

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

    const [sort, setSort] = useState<TSortStage>(SortStage.OLDEST)

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

    return { currentTable, sortByStage, handleSearch, handleSort, sort }
}
