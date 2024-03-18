import { createContext, useState, useContext, useEffect } from 'react'
import { localStorageWrapper } from '../storage/storage'
import { TTodo, TInfoMessage } from '../../shared/types/types'

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextValues {
    currentTable: TTodo[]
    setCurrentTable: React.Dispatch<React.SetStateAction<TTodo[]>>
    infoMessages: TInfoMessage[]
    setInfoMessages: React.Dispatch<React.SetStateAction<TInfoMessage[]>>
    localTable: TTodo[]
}

const Context = createContext<null | ContextValues>(null)

export const useContextValue = () => {
    const contextValue = useContext(Context)
    if (!contextValue) {
        throw new Error('useContextValue must be used within a ContextProvider')
    }
    return contextValue
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
    const [currentTable, setCurrentTable] = useState(localTable)
    const [infoMessages, setInfoMessages] = useState([] as TInfoMessage[])

    useEffect(() => {
        if (infoMessages.length > 0) {
            setTimeout(() => {
                setInfoMessages((prev) => prev.slice(1))
            }, 4000)
        }
    }, [infoMessages])

    return (
        <Context.Provider
            value={
                {
                    currentTable,
                    setCurrentTable,
                    infoMessages,
                    setInfoMessages,
                    localTable,
                } as ContextValues
            }
        >
            {children}
        </Context.Provider>
    )
}

export default Context
