import { useContext } from 'react'
import TodoContext from '../context/todoContext'
import { Stage, TSortStage } from '../enums/stage'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

export const useTodoList = () => {
    const sortByStage = (stage: string) => {
        const localTable = localStorageWrapper.getItem('toDos')
        if (stage === Stage.ALL) {
            return localTable
        }

        return localTable.filter((todo: TTodo) => todo.stage === stage)
    }

    const handleSearch = (value: string) => {
        const localTable = localStorageWrapper.getItem('toDos')
        if (value === '') {
            return localTable
        }

        const filteredTable = localTable.filter((todo: TTodo) =>
            todo.description.toLowerCase().includes(value.toLowerCase())
        )

        return filteredTable
    }

    const { currentTable } = useContext(TodoContext)!

    const handleSort = (sort: TSortStage) => {
        if (sort === 'newest') {
            const newTable = [...currentTable].sort(
                (a, b) => b.created_at - a.created_at
            )
            return newTable
        } else {
            const newTable = [...currentTable].sort(
                (a, b) => a.created_at - b.created_at
            )
            return newTable
        }
    }

    return { sortByStage, handleSearch, handleSort }
}
