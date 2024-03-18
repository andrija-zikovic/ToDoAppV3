import React from 'react'

type SortRadioButtonProps = {
    title: string
    stage: string
    sortStageBy: (stage: string) => void
}

export const SortRadioButton: React.FC<SortRadioButtonProps> = ({
    title,
    stage,
    sortStageBy,
}) => {
    return (
        <div className="flex flex-row justify-start items-center whitespace-nowrap gap-2 px-6 py-1 h-auto md:px-2">
            <label
                htmlFor={title}
                className="flex justify-start items-center gap-3 p-1 w-full h-full rounded-xl hover:bg-slate-700 hover:text-orange-200"
            >
                <input
                    type="radio"
                    id={title}
                    name="sortByStage"
                    value={stage}
                    className="w-6 h-6"
                    onClick={() => {
                        sortStageBy(stage)
                    }}
                />

                {title}
            </label>
        </div>
    )
}

export default SortRadioButton
