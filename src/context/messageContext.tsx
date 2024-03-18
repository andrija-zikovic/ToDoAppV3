import { createContext, useState, useEffect } from 'react'
import { TInfoMessage } from '../../shared/types/types'

type ContextProviderProps = {
    children: React.ReactNode
}

interface ContextValues {
    infoMessages: TInfoMessage[]
    setInfoMessages: React.Dispatch<React.SetStateAction<TInfoMessage[]>>
}

const MessageContext = createContext<null | ContextValues>(null)

export const MessageContextProvider = ({ children }: ContextProviderProps) => {
    const [infoMessages, setInfoMessages] = useState([] as TInfoMessage[])

    useEffect(() => {
        if (infoMessages.length > 0) {
            setTimeout(() => {
                setInfoMessages((prev) => prev.slice(1))
            }, 4000)
        }
    }, [infoMessages])

    const contextValues = {
        infoMessages,
        setInfoMessages,
    } as ContextValues

    return (
        <MessageContext.Provider value={contextValues}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext
