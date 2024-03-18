import { Routes, Route } from 'react-router-dom'
import HeaderComponent from '../../shared/ui/header/HeaderComponent'
import ListScreen from '../screens/ListScreen'
import CreateScreen from '../screens/CreateScreen'
import EditScreen from '../screens/EditScreen'
import InfoMessageBox from '../../shared/ui/InfoMessagesBox/InfoMessagesBox'

export const MainRouter = () => {
    return (
        <div className="min-h-dvh overflow-hidden dark:bg-gray-700 dark:text-orange-200">
            <HeaderComponent />
            <Routes>
                <Route path="/*" element={<ListScreen />} />
                <Route path="/todo/create" element={<CreateScreen />} />
                <Route path="/todo/edit/:id" element={<EditScreen />} />
            </Routes>
            <InfoMessageBox />
        </div>
    )
}
