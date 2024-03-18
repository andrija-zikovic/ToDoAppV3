type InputType = {
    LABEL: string
    PLACEHOLDER: string
    NAME: string
    ON_CHANGE: (description: string) => void
    MESSAGE: string
    REQUIRED: boolean
}

const TextInput = ({
    LABEL,
    PLACEHOLDER,
    NAME,
    ON_CHANGE,
    MESSAGE,
    REQUIRED,
}: InputType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-xl">
            <label>{LABEL}</label>
            <input
                type="text"
                name={NAME}
                placeholder={PLACEHOLDER}
                onChange={(e) => ON_CHANGE(e.target.value)}
                onFocus={(e) => {
                    setTimeout(
                        () =>
                            e.target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center',
                                inline: 'nearest',
                            }),
                        150
                    )
                }}
                className={`w-auto h-12 p-2 border-2 ${MESSAGE.length > 2 ? 'bg-red-300 border-red-600' : 'bg-orange-200 border-gray-700'} rounded-md transition-all duration-300 ease-in-out text-gray-950`}
                required={REQUIRED}
            />
        </div>
    )
}

export default TextInput
