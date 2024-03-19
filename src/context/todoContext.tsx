import { createContext, useEffect, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    currentTable: TTodo[]
    setCurrentTable: React.Dispatch<React.SetStateAction<TTodo[]>>
    setRefetchStorage: React.Dispatch<React.SetStateAction<boolean>>
}

const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [currentTable, setCurrentTable] = useState([] as TTodo[])
    const [refetchStorage, setRefetchStorage] = useState(false)

    useEffect(() => {
        const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
        setCurrentTable(localTable)
    }, [refetchStorage])

    const contextValues = {
        currentTable,
        setCurrentTable,
        setRefetchStorage,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
