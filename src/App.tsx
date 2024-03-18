import { MainRouter } from './router/MainRouter'
import { TodoContextProvider } from './context/todoContext'
import { MessageContextProvider } from './context/messageContext'

function App() {
    return (
        <MessageContextProvider>
            <TodoContextProvider>
                <MainRouter />
            </TodoContextProvider>
        </MessageContextProvider>
    )
}

export default App
