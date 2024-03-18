import { useContext } from 'react'
import TodoContext from '../../context/todoContext'
import SortByStageRadioInput from '../Inputs/SortByStageRadioInput'
import { Stage } from '../../enums/stage'

export const SortRadioInputProvider = () => {
    const { setCurrentTable, localTable } = useContext(TodoContext)!

    const sortByStage = (stage: string) => {
        if (stage === Stage.ALL) {
            setCurrentTable(localTable)
            return
        }

        setCurrentTable(localTable.filter((todo) => todo.stage === stage))
    }

    return (
        <fieldset className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:justify-between items-center w-full p-3 font-bold text-gray-700 md:w-auto">
            <SortByStageRadioInput
                title="All"
                stage={Stage.ALL}
                sortStageBy={sortByStage}
            />
            <SortByStageRadioInput
                title="Pending"
                stage={Stage.PENDING}
                sortStageBy={sortByStage}
            />
            <SortByStageRadioInput
                title="In Progress"
                stage={Stage.IN_PROGRESS}
                sortStageBy={sortByStage}
            />
            <SortByStageRadioInput
                title="Done"
                stage={Stage.DONE}
                sortStageBy={sortByStage}
            />
        </fieldset>
    )
}

export default SortRadioInputProvider
