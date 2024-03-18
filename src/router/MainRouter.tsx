import { Routes, Route } from 'react-router-dom'
import HeaderComponent from '../../shared/ui/header/src/components/HeaderComponent'
import ListScreen from '../screens/ListScreen'
import CreateScreen from '../screens/CreateScreen'
import EditScreen from '../screens/EditScreen'
import InfoMessageBox from '../../shared/ui/InfoMessagesBox/InfoMessagesBox'

export const MainRouter = () => {
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path="/*" element={<ListScreen />} />
                <Route path="/todo/create" element={<CreateScreen />} />
                <Route path="/todo/edit/:id" element={<EditScreen />} />
            </Routes>
            <InfoMessageBox />
        </>
    )
}
