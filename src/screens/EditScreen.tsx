import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import PopupWindow from '../ui/PopupWindow/PopupWindow'
import TodoForm from '../ui/TodoForm/TodoForm'
import { useTodo } from '../hooks/useTodo'

const EditScreen = () => {
    const navigate = useNavigate()
    const { id } = useParams() as { id: string }
    const todo = useTodo(id)
    const [deleteMessage, setDeleteMessage] = useState(false)

    return (
        <div className="flex flex-col justify-evenly items-center p-2 w-full h-full min-h-96 relative">
            <div className="w-full flex flex-row justify-between items-center">
                <button
                    onClick={() => {
                        navigate(-1)
                    }}
                    className="dark:border-orange-200"
                >
                    Back
                </button>
                <button
                    onClick={() => {
                        setDeleteMessage(true)
                    }}
                    className="bg-red-300 dark:text-gray-700"
                >
                    Delete
                </button>
            </div>
            <h1 className="text-3xl text-center p-3 border-b-2 mt-14 w-full md:mt-32 dark:border-orange-200">
                {todo.description.length > 0
                    ? todo.description
                    : todo.description}
            </h1>
            <TodoForm
                initData={{
                    id: id,
                    description: todo.description,
                    stage: todo.stage,
                    created_at: Number(id),
                }}
                onDelete={() => setDeleteMessage(true)}
                onSubmit={() => todo.updateTodo(id)}
                isSubmitting={false}
                onChangeDsc={todo.setDescription}
                onChangeStg={todo.setStage}
                errorMessage={todo.message}
            />
            {deleteMessage && (
                <PopupWindow
                    children={
                        <div className=" w-80 flex flex-col justify-center items-center p-4 rounded-md gap-3 border-2 border-gray-700 bg-orange-200 dark:text-gray-700">
                            <p className=" font-bold">Delete To do!</p>
                            <p>Are you sure?</p>
                            <div className="flex flex-row justify-evenly items-center gap-2 w-full">
                                <button
                                    onClick={() => todo.deleteTodo(id)}
                                    className=" bg-white hover:bg-red-300 "
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => {
                                        setDeleteMessage(false)
                                    }}
                                    className="bg-white"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    )
}

export default EditScreen
