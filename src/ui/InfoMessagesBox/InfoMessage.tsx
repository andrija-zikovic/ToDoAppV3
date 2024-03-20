type IProps = {
    message: string
    type: 'error' | 'success'
}

const InfoMessage = ({ message, type }: IProps) => {
    const status = {
        error: 'bg-red-200 border-red-600',
        success: 'bg-green-200',
        default: 'bg-gray-200',
    }

    return (
        <div
            className={`w-80 p-2 flex justify-center items-center text-center
             border-2 border-gray-800 rounded-md ${
                 status[type] || status.default
             } dark:text-gray-700`}
        >
            <p>{message}</p>
        </div>
    )
}

export default InfoMessage
