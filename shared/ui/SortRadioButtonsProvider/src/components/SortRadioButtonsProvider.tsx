import { useContext } from 'react'
import Context from '../../../../../src/context/context'
import { SortRadioButton } from '../../../Buttons/SortRadioButton'
import { Stage } from '../../../../enums/stage'

export const SortRadioButtonsProvider = () => {
    const contextValue = useContext(Context) || {
        setCurrentTable: () => {},
        localTable: [],
    }

    const { setCurrentTable, localTable } = contextValue

    const sortByStage = (stage: string) => {
        if (stage === Stage.ALL) {
            setCurrentTable(localTable)
        } else {
            setCurrentTable(localTable.filter((todo) => todo.stage === stage))
        }
    }

    return (
        <fieldset className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:justify-between items-center w-full p-3 font-bold text-gray-700 md:w-auto">
            <SortRadioButton
                title="All"
                stage={Stage.ALL}
                sortStageBy={sortByStage}
            />
            <SortRadioButton
                title="Pending"
                stage={Stage.PENDING}
                sortStageBy={sortByStage}
            />
            <SortRadioButton
                title="In Progress"
                stage={Stage.IN_PROGRESS}
                sortStageBy={sortByStage}
            />
            <SortRadioButton
                title="Done"
                stage={Stage.DONE}
                sortStageBy={sortByStage}
            />
        </fieldset>
    )
}

export default SortRadioButtonsProvider
