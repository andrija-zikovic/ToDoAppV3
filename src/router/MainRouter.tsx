import { Routes, Route } from 'react-router-dom'
import HeaderComponent from '../ui/Header/HeaderComponent'
import ListScreen from '../screens/ListScreen'
import CreateScreen from '../screens/CreateScreen'
import EditScreen from '../screens/EditScreen'
import InfoMessageBox from '../ui/InfoMessagesBox/InfoMessagesBox'

export const MainRouter = () => {
    return (
        <div className="min-h-dvh overflow-hidden">
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
