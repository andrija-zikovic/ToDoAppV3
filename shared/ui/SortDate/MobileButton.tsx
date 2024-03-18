import { DateDown, DateUp } from '../Icons/index'
import { SortStage } from '../../enums/stage'

type MobileButtonProps = {
    sortValue: string
    handleSort: () => void
}

export const MobileButton: React.FC<MobileButtonProps> = ({
    sortValue,
    handleSort,
}) => {
    return (
        <button
            id="sortDateMobile"
            className="absolute left-4 top-4 w-8 h-8 bg-gray-700 p-0 flex justify-center items-center rounded-md cursor-pointer transition-all duration-300 ease-in-out fill-orange-200 hover:fill-slate-950 focus:fill-slate-950 active:fill-slate-950 md:static"
            onClick={() => {
                handleSort()
            }}
        >
            {sortValue === SortStage.NEWEST ? <DateDown /> : <DateUp />}
        </button>
    )
}

export default MobileButton
