import { useNavigate } from 'react-router'
import TodoForm from '../ui/Forms/TodoForm'
import { Form } from '../enums/form'

const CreateScreen = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-96 flex flex-col justify-start items-center gap-2">
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="dark:border-orange-200"
            >
                Back
            </button>

            <h1 className="text-4xl p-2 mt-28">Create ToDo</h1>
            <TodoForm onSubmit={Form.CREATE} />
        </div>
    )
}

export default CreateScreen
