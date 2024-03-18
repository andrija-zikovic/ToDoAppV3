import { useContext } from 'react'
import MessageContext from '../../../src/context/messageContext'
import InfoMessage from './InfoMessage'

const InfoMessagesBox = () => {
    const { infoMessages } = useContext(MessageContext)!
    return (
        <div className="fixed flex justify-end w-full p-2 bottom-0 gap-2">
            {infoMessages.map((item, index) => (
                <InfoMessage
                    key={index}
                    message={item.message}
                    type={item.type.includes('error') ? 'error' : 'success'}
                />
            ))}
        </div>
    )
}

export default InfoMessagesBox
