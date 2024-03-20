import { useContext } from 'react'
import TodoContext from '../context/todoContext'
import { Stage, TSortStage } from '../enums/stage'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

export const useTodoList = () => {
    const { toDoList, setToDoList } = useContext(TodoContext)!

    const sortByStage = (stage: string) => {
        const localTable = localStorageWrapper.getItem('toDos')

        if (stage === Stage.ALL) {
            setToDoList(localTable)
            return
        }

        const filteredTable = localTable.filter(
            (todo: TTodo) => todo.stage === stage
        )

        setToDoList(filteredTable)
    }

    const handleSearch = (value: string) => {
        const localTable = localStorageWrapper.getItem('toDos')
        if (value === '') {
            setToDoList(localTable)
            return
        }

        const filteredTable = localTable.filter((todo: TTodo) =>
            todo.description.toLowerCase().includes(value.toLowerCase())
        )

        setToDoList(filteredTable)
    }

    const handleSort = (sort: TSortStage) => {
        if (sort === 'newest') {
            const newTable = [...toDoList].sort(
                (a, b) => b.created_at - a.created_at
            )
            setToDoList(newTable)
        } else {
            const newTable = [...toDoList].sort(
                (a, b) => a.created_at - b.created_at
            )
            setToDoList(newTable)
        }
    }

    return { sortByStage, handleSearch, handleSort }
}
