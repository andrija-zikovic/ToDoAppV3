import { useNavigate } from 'react-router'
import { useTodo } from '../hooks/useTodo'
import TodoForm from '../ui/TodoForm/TodoForm'

const CreateScreen = () => {
    const todo = useTodo()
    const navigate = useNavigate()

    return (
        <div
            className={`w-full min-h-96 flex flex-col justify-start items-center gap-2`}
        >
            <div className="w-full flex flex-row justify-start items-center p-2">
                <button
                    onClick={() => {
                        navigate('/')
                    }}
                    className="dark:border-orange-200"
                >
                    Back
                </button>
            </div>
            <h1 className="text-4xl p-2 mt-28">Create ToDo</h1>
            <TodoForm
                onSubmit={todo.createTodo}
                isSubmitting={todo.isLoading}
                onChangeDsc={todo.setDescription}
                errorMessage={todo.message}
            />
        </div>
    )
}

export default CreateScreen
