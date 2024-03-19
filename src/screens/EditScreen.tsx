import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import TodoForm from '../ui/Forms/TodoForm'
import { Form } from '../enums/form'

const EditScreen = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const initData = {
        id: searchParams.get('id')!,
        description: searchParams.get('description')!,
        stage: searchParams.get('stage')!,
        created_at: Number(searchParams.get('created_at')!),
    }

    return (
        <div className="flex flex-col justify-evenly items-center p-2 w-full h-full min-h-96 relative">
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className="dark:border-orange-200"
            >
                Back
            </button>
            <TodoForm
                initData={initData}
                onDelete={true}
                onSubmit={Form.UPDATE}
            />
        </div>
    )
}

export default EditScreen
