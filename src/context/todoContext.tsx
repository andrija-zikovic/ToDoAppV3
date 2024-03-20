import { createContext, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo } from '../types/types'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    toDoList: TTodo[]
    setToDoList: React.Dispatch<React.SetStateAction<TTodo[]>>
    refetchToDoList: () => void
}

const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [toDoList, setToDoList] = useState(
        localStorageWrapper.getItem('toDos') as TTodo[]
    )

    const refetchToDoList = () => {
        const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
        setToDoList(localTable)
    }

    const contextValues = {
        toDoList,
        setToDoList,
        refetchToDoList,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
