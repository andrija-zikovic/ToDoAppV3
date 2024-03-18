type InputType = {
    label: string
    placeholder: string
    name: string
    on_change: (description: string) => void
    message: string
    required?: boolean
}

const TextInput = ({
    label,
    placeholder,
    name,
    on_change,
    message,
    required,
}: InputType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-xl">
            <label>{label}</label>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={(e) => on_change(e.target.value)}
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
                className={`w-auto h-12 p-2 border-2 ${message.length > 2 ? 'bg-red-300 border-red-600' : 'bg-orange-200 border-gray-700'} rounded-md transition-all duration-300 ease-in-out text-gray-950`}
                required={required}
            />
        </div>
    )
}

export default TextInput
