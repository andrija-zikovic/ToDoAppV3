type IProps = {
    onConfirm: () => void
    onCancel: () => void
    message: string
    message2?: string
    message3?: string
}

const ConfirmationWindow = (props: IProps) => {
    return (
        <div className="fixed w-96">
            <div className="bg-white rounded-md p-4">
                <p>{props.message}</p>
                <p>{props.message2}</p>
                <p>{props.message3}</p>
                <div className="flex justify-between gap-4">
                    <button
                        onClick={props.onConfirm}
                        className="bg-green-400 p-2 rounded-md"
                    >
                        Yes
                    </button>
                    <button
                        onClick={props.onCancel}
                        className="bg-red-400 p-2 rounded-md"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationWindow
