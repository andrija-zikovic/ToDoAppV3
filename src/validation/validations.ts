export const descriptionInputValidation = (input: string) => {
    if (input.length < 10 && input) {
        return 'Description is too short'
    }
    if (input.length > 256) {
        return 'Description is too long'
    }
}
