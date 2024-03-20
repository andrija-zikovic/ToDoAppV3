type IProps = {
    isSubmitting: boolean
}

const SubmitButton = ({ isSubmitting }: IProps) => {
    const loadingStyle = isSubmitting ? 'pointer-events-none' : ''

    return (
        <button
            type="submit"
            className={`bg-gray-700 text-orange-200 bottom-2 border-orange-200 px-5 h-10 rounded-xl hover:bg-orange-200 hover:text-gray-700 transition-all duration-300 ease-in-out md:text-xl md:h-auto md:py-2 ${loadingStyle}`}
        >
            Submit
        </button>
    )
}

export default SubmitButton
