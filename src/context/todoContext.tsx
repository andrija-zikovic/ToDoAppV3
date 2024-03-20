import { createContext, useEffect, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    toDoList: TTodo[]
    setToDoList: React.Dispatch<React.SetStateAction<TTodo[]>>
    setRefetchStorage: React.Dispatch<React.SetStateAction<boolean>>
}

const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [toDoList, setToDoList] = useState([] as TTodo[])
    const [refetchStorage, setRefetchStorage] = useState(false)

    useEffect(() => {
        const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
        setToDoList(localTable)
    }, [refetchStorage])

    const contextValues = {
        toDoList,
        setToDoList,
        setRefetchStorage,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
