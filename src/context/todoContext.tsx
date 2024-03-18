import { createContext, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../../shared/types/types'

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextValues {
    currentTable: TTodo[]
    setCurrentTable: React.Dispatch<React.SetStateAction<TTodo[]>>
    localTable: TTodo[]
}

const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: ContextProviderProps) => {
    const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
    const [currentTable, setCurrentTable] = useState(localTable)

    const contextValues = {
        currentTable,
        setCurrentTable,
        localTable,
    } as ContextValues

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext