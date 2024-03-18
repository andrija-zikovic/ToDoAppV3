import { useContext } from 'react'
import Context from '../../../src/context/todoContext'
import InfoMessage from './InfoMessage'

const InfoMessagesBox = () => {
    const { infoMessages } = useContext(Context)!
    return (
        <div className="flex flex-col items-center justify-center w-3/4 p-2 fixed bottom-0 gap-2 md:max-w-2xl lg:top-2 lg:right-2 lg:absolute lg:bottom-auto lg:justify-start lg:max-w-sm">
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
