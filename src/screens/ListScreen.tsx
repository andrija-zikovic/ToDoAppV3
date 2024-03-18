import SortRadioButtonsProvider from '../../shared/ui/SortRadioButtonsProvider/SortRadioButtonsProvider'
import SearchBox from '../../shared/ui/SearchBox/SearchBox'
import SortByDateButton from '../../shared/ui/SortByDateButton/SortByDateButton'
import Table from '../../shared/ui/Table/Table'

export default function ListScreen() {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center items-center w-full bg-orange-200 border-b-2 border-gray-700 text-gray-700 md:flex-row-reverse md:py-2 md:justify-between">
                <div className="flex flex-row items-center gap-2 w-full px-3 md:justify-end">
                    <SortByDateButton />
                    <SearchBox />
                </div>
                <SortRadioButtonsProvider />
            </div>
            <Table />
        </div>
    )
}
