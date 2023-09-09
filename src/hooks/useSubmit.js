import { useState } from "react"
import { submitAPI } from "../api/api"

const useSubmit = () => {
    const [submitSucceeded, setSubmitSucceeded] = useState(false)

    const submitForm = async (formData) => {
        console.log("submitting form", formData)
        const result = await submitAPI(formData)
        console.log(result)
        setSubmitSucceeded(result)
    }

    const resetForm = () => {
        setSubmitSucceeded(false)
    }

    return {submitSucceeded, resetForm, submitForm}
}

export default useSubmit