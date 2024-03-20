import SortByStageBox from '../ui/SortByStageBox/SortByStageBox'
import SearchBox from '../ui/SearchBox/SearchBox'
import SortByDateButton from '../ui/Buttons/SortByDateButton'
import ToDoList from '../ui/ToDoList/ToDoList'

export default function ListScreen() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-orange-200 border-b-2 border-gray-700 text-gray-700 md:flex-row-reverse md:py-2 md:justify-between">
                <div className="flex flex-row items-center gap-2 px-3 md:justify-end">
                    <SortByDateButton />
                    <SearchBox />
                </div>
                <SortByStageBox />
            </div>
            <ToDoList />
        </div>
    )
}
