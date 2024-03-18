import { DownArrow, UpArrow } from '../../../../icons/src/index'
import { SortStage } from '../../../../enums/stage'

type TableButtonProps = {
    sortValue: string
    handleSort: () => void
}

export const TableButton: React.FC<TableButtonProps> = ({
    sortValue,
    handleSort,
}) => {
    return (
        <button
            id="sortDateTable"
            className="sortDate h-full w-8 p-2 border-0"
            onClick={() => {
                handleSort()
            }}
        >
            {sortValue === SortStage.NEWEST ? <DownArrow /> : <UpArrow />}
        </button>
    )
}

export default TableButton
