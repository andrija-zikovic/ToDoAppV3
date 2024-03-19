import { useContext } from 'react'
import TodoContext from '../context/todoContext'
import { Stage, TSortStage } from '../enums/stage'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

export const useTodoList = () => {
    const { currentTable, setCurrentTable } = useContext(TodoContext)!

    const sortByStage = (stage: string) => {
        const localTable = localStorageWrapper.getItem('toDos')

        if (stage === Stage.ALL) {
            setCurrentTable(localTable)
            return
        }

        const filteredTable = localTable.filter(
            (todo: TTodo) => todo.stage === stage
        )

        setCurrentTable(filteredTable)
    }

    const handleSearch = (value: string) => {
        const localTable = localStorageWrapper.getItem('toDos')
        if (value === '') {
            setCurrentTable(localTable)
            return
        }

        const filteredTable = localTable.filter((todo: TTodo) =>
            todo.description.toLowerCase().includes(value.toLowerCase())
        )

        setCurrentTable(filteredTable)
    }

    const handleSort = (sort: TSortStage) => {
        if (sort === 'newest') {
            const newTable = [...currentTable].sort(
                (a, b) => b.created_at - a.created_at
            )
            setCurrentTable(newTable)
        } else {
            const newTable = [...currentTable].sort(
                (a, b) => a.created_at - b.created_at
            )
            setCurrentTable(newTable)
        }
    }

    return { sortByStage, handleSearch, handleSort }
}
