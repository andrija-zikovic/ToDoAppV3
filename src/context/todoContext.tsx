import { createContext, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    currentTable: TTodo[]
    setCurrentTable: React.Dispatch<React.SetStateAction<TTodo[]>>
    localTable: TTodo[]
}

const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
    const [currentTable, setCurrentTable] = useState(localTable)

    const contextValues = {
        currentTable,
        setCurrentTable,
        localTable,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
