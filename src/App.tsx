import { MainRouter } from './router/MainRouter'
import { ContextProvider } from './context/context'

function App() {
    return (
        <div className="h-full w-full min-h-dvh overflow-hidden flex flex-col justify-start items-center dark:bg-gray-700 dark:text-orange-200 lg:relative">
            <ContextProvider>
                <MainRouter />
            </ContextProvider>
        </div>
    )
}

export default App
