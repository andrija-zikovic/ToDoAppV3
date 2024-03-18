import { useState, useContext } from 'react'
import { MobileButton } from './MobileButton'
import { SortStage } from '../../enums/stage'
import Context from '../../../src/context/todoContext'

export const SortDateButtonProvider = () => {
    const { currentTable, setCurrentTable } = useContext(Context)!

    const [sort, setSort] = useState(SortStage.OLDEST)

    const handleSort = () => {
        if (sort === 'newest') {
            const newTable = [...currentTable].sort(
                (a, b) => b.created_at - a.created_at
            )
            setCurrentTable(newTable)
            setSort(SortStage.OLDEST)
        } else {
            setCurrentTable(
                [...currentTable].sort((a, b) => a.created_at - b.created_at)
            )
            setSort(SortStage.NEWEST)
        }
    }

    return <MobileButton sortValue={sort} handleSort={handleSort} />
}

export default SortDateButtonProvider
