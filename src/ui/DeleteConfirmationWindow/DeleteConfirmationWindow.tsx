type IProps = {
    onDelete: () => void
    onCancel: () => void
    message: string
    message2?: string
    message3?: string
}

const DeleteConfirmationWindow = (props: IProps) => {
    return (
        <div className="bg-white border-2 border-gray-700 rounded-md p-6">
            <p>{props.message}</p>
            <p>{props.message2}</p>
            <p>{props.message3}</p>
            <div className="flex justify-around gap-4 p-4">
                <button
                    type="button"
                    onClick={props.onDelete}
                    className="bg-green-400 rounded-md"
                >
                    Yes
                </button>
                <button
                    type="button"
                    onClick={props.onCancel}
                    className="bg-red-400 rounded-md"
                >
                    No
                </button>
            </div>
        </div>
    )
}

export default DeleteConfirmationWindow
