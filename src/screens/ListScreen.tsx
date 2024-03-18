import SortRadioButtonsProvider from '../../shared/ui/SortRadioButtonsProvider/src/components/SortRadioButtonsProvider'
import SearchProvider from '../../shared/ui/SearchProvider/src/components/SearchProvider'
import Table from '../../shared/ui/Table/src/components/Table'

export default function ListScreen() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full bg-orange-200 border-b-2 border-gray-700 text-gray-700 md:flex-row-reverse md:py-2 md:justify-between">
                <SearchProvider />
                <SortRadioButtonsProvider />
            </div>
            <Table />
        </div>
    )
}
