import { useState } from 'react'

type IProps = {
    label: string
    value: string
    name: string
}

const SelectInput = ({ label, value, name }: IProps) => {
    const [stage, setStage] = useState<string>(value)
    return (
        <label className="flex flex-col justify-center items-center gap-2">
            {label}
            <select
                value={stage}
                name={name}
                className={`w-auto h-12 p-2 border-2 border-gray-700 rounded-md text-gray-950 bg-orange-200 transition-all duration-300 ease-in-out`}
                onChange={(e) => {
                    setStage(e.target.value)
                }}
                required
            >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </label>
    )
}

export default SelectInput
