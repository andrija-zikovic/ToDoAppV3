import { createContext, useState, useEffect } from 'react'
import { TInfoMessage } from '../types/types'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    infoMessages: TInfoMessage
    setInfoMessages: React.Dispatch<React.SetStateAction<TInfoMessage>>
}

const MessageContext = createContext<null | ContextValues>(null)

export const MessageContextProvider = ({ children }: IProps) => {
    const [infoMessages, setInfoMessages] = useState<TInfoMessage>(
        {} as TInfoMessage
    )

    useEffect(() => {
        if (infoMessages.message) {
            const timer = setTimeout(() => {
                setInfoMessages({} as TInfoMessage)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [infoMessages])

    const contextValues = {
        infoMessages,
        setInfoMessages,
    }

    return (
        <MessageContext.Provider value={contextValues}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext
