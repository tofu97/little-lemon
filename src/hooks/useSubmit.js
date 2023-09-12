import { useState } from "react"
import { submitAPI } from "../api/api"
import { saveReservation, storageKey } from "../storage/localStorage"

const useSubmit = () => {
    const [submitSucceeded, setSubmitSucceeded] = useState(false)

    const submitForm = async (formData) => {
        const result = await submitAPI(formData)
        // save to local storage if result is success (true)
        if (result) {
            saveReservation(formData)
        } else {
            console.error("Error saving reservation")
        }
        setSubmitSucceeded(result)
    }

    const resetForm = () => {
        setSubmitSucceeded(false)
    }

    return {submitSucceeded, resetForm, submitForm}
}

export default useSubmit