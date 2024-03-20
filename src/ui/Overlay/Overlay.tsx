type IProps = {
    children: React.ReactNode
}

const ConfirmationWindow = ({ children }: IProps) => {
    return (
        <div className="fixed w-dvw h-full top-0 bg-gray-400 bg-opacity-30 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}
export default ConfirmationWindow
