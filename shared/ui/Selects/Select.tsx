type SelectType = {
    LABEL: string
    NAME: string
    VALUE: string
    ON_CHANGE: (description: string) => void
    MESSAGE: string
}

const SelectInput = ({
    LABEL,
    NAME,
    VALUE,
    ON_CHANGE,
    MESSAGE,
}: SelectType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-xl">
            <label>{LABEL}</label>
            <select
                name={NAME}
                onChange={(e) => ON_CHANGE(e.target.value)}
                value={VALUE}
                className={`w-auto h-12 p-2 border-2 ${MESSAGE.length > 2 ? 'bg-red-300 border-red-600' : 'bg-orange-200 border-gray-700'} rounded-md transition-all duration-300 ease-in-out text-gray-950`}
                required
            >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>
    )
}

export default SelectInput
