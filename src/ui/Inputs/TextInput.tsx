type IProps = {
    label: string
    placeholder: string
    name: string
    value?: string
    message: string
    required?: boolean
}

const TextInput = ({
    label,
    placeholder,
    name,
    value,
    message,
    required,
}: IProps) => {
    const bg_color =
        message?.length > 2
            ? 'bg-red-300 border-red-600'
            : 'bg-orange-200 border-gray-700'

    return (
        <label className="flex flex-col justify-center items-center gap-2">
            {label}
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
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
                className={`
                w-auto h-12 p-2 text-gray-950 
                border-2 rounded-md 
                transition-all duration-300 ease-in-out 
                ${bg_color}`}
                required={required}
            />
        </label>
    )
}

export default TextInput
