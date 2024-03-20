import { TTodo, IForm } from '../../types/types'
import { TForm, Form } from '../../enums/form'
import TextInput from '../Inputs/TextInput'
import SubmitButton from '../Buttons/SubmitButton'
import SelectInput from '../Inputs/SelectInput'
import DeleteConfirmationWindow from '../DeleteConfirmationWindow/DeleteConfirmationWindow'
import Overlay from '../Overlay/Overlay'
import { useState } from 'react'

type IProps = {
    onSubmit: (form: IForm) => void
    onDelete?: () => void
    isSubmitting: boolean
    initData?: TTodo
    submitType: TForm
    errorMessage: string
}

const TodoForm = (props: IProps) => {
    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <form
            onSubmit={(e) => props.onSubmit({ event: e })}
            className="inset-0 flex flex-col justify-center items-center p-2 gap-8"
        >
            <div className="relative flex flex-row justify-center items-center gap-6">
                <TextInput
                    label="Description"
                    placeholder="Type here..."
                    name="description"
                    value={props.initData?.description}
                    message={props.errorMessage}
                    required={true}
                />
                <div className="text-red-600 absolute top-full text-center">
                    <p>{props.errorMessage}</p>
                </div>
                {props.submitType === Form.UPDATE && (
                    <SelectInput
                        label="Stage Change"
                        name="stage"
                        value={props.initData!.stage}
                    />
                )}
            </div>
            <SubmitButton isSubmitting={props.isSubmitting} />
            {props.submitType === Form.UPDATE && (
                <button
                    type="button"
                    onClick={() => setIsDeleting(true)}
                    className=" border-gray-700 rounded-md bg-red-300 transition-all duration-300 ease-in-out fixed top-20 right-2 md:top-32"
                >
                    Delete
                </button>
            )}
            {isDeleting && (
                <Overlay>
                    <DeleteConfirmationWindow
                        onDelete={props.onDelete!}
                        onCancel={() => setIsDeleting(false)}
                        message="Are you sure you want to delete this ToDo?"
                    />
                </Overlay>
            )}
        </form>
    )
}

export default TodoForm
