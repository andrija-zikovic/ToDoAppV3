import SortByStageRadioInput from '../Inputs/SortByStageRadioInput'
import { Stage } from '../../enums/stage'
import { useTodoList } from '../../hooks/useTodoList'

export const SortRadioInputProvider = () => {
    const sort = useTodoList()

    return (
        <fieldset className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:justify-between items-center w-full p-3 font-bold text-gray-700 md:w-auto">
            <SortByStageRadioInput
                title="All"
                stage={Stage.ALL}
                sortStageBy={sort.sortByStage}
            />
            <SortByStageRadioInput
                title="Pending"
                stage={Stage.PENDING}
                sortStageBy={sort.sortByStage}
            />
            <SortByStageRadioInput
                title="In Progress"
                stage={Stage.IN_PROGRESS}
                sortStageBy={sort.sortByStage}
            />
            <SortByStageRadioInput
                title="Done"
                stage={Stage.DONE}
                sortStageBy={sort.sortByStage}
            />
        </fieldset>
    )
}

export default SortRadioInputProvider
