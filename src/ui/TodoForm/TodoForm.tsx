import TextInput from '../Inputs/TextInput'
import SubmitButton from '../Buttons/SubmitButton'
import SelectInput from '../Inputs/SelectInput'
import { TTodo } from '../../types/types'

type IProps = {
    initData?: TTodo
    onDelete?: (state: boolean) => void
    onSubmit: (id: string | undefined) => void
    isSubmitting: boolean
    onChangeDsc: (dsc: string) => void
    onChangeStg?: (stg: string) => void
    errorMessage: string
}

const TodoForm = ({
    initData,
    onSubmit,
    isSubmitting,
    onChangeDsc,
    onChangeStg,
    errorMessage,
}: IProps) => {
    return (
        <form
            onSubmit={() => onSubmit(initData ? initData.id : undefined)}
            className="w-full h-full flex flex-col justify-center items-center p-2 gap-8"
        >
            <div className="relative flex flex-row justify-center items-center gap-6">
                <TextInput
                    label="Description"
                    placeholder="Type here..."
                    name="description"
                    value={initData?.description}
                    on_change={onChangeDsc}
                    message={errorMessage}
                    required={true}
                />
                <div className="text-red-600 absolute top-full text-center w-full">
                    <p>{errorMessage}</p>
                </div>
                {onChangeStg && (
                    <SelectInput
                        label="Stage Change"
                        value={initData ? initData.stage : 'default'}
                        on_change={onChangeStg}
                    />
                )}
            </div>
            <SubmitButton isLoading={isSubmitting} />
        </form>
    )
}

export default TodoForm
