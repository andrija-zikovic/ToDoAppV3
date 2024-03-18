type InfoMessageProps = {
    message: string
    type: 'error' | 'success'
}

const InfoMessage = ({ message, type }: InfoMessageProps) => {
    return (
        <div
            className={`w-full p-2 flex flex-row justify-center items-center text-center
             gap-2 border-2 border-gray-800 rounded-md ${
                 type === 'error'
                     ? 'bg-red-200 border-red-600'
                     : type === 'success'
                       ? 'bg-green-200'
                       : 'bg-gray-200'
             }`}
        >
            <p>{message}</p>
        </div>
    )
}

export default InfoMessage
