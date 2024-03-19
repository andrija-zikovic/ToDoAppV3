type SelectType = {
    label: string
    value: string
    on_change: (description: string) => void
}

const SelectInput = ({ label, value, on_change }: SelectType) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-xl">
            <label className="flex flex-col justify-center items-center gap-2">
                {label}
                <select
                    onChange={(e) => on_change(e.target.value)}
                    value={value}
                    className={`w-auto h-12 p-2 border-2 border-gray-700 rounded-md text-gray-950 bg-orange-200 transition-all duration-300 ease-in-out`}
                    required
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </label>
        </div>
    )
}

export default SelectInput
