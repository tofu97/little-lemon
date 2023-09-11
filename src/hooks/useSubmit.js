import { useState } from "react"
import { submitAPI } from "../api/api"
import { storageKey } from "../storage/localStorage"

const useSubmit = () => {
    const [submitSucceeded, setSubmitSucceeded] = useState(false)

    const submitForm = async (formData) => {
        console.log("submitting form", formData)
        const result = await submitAPI(formData)
        // save to local storage if result is success (true)
        if (result) {
            const storedBookings = localStorage.getItem(storageKey)
            let bookings
            if (storedBookings === null) {
                bookings = {}
            } else {
                bookings = JSON.parse(storedBookings)
            }
            const key = `${formData.date}@${formData.time}`
            bookings[key] = formData
            localStorage.setItem(storageKey, JSON.stringify(bookings))
        } else {
            console.error("Error making reservation to local storage")
        }
        console.log(result)
        setSubmitSucceeded(result)
    }

    const resetForm = () => {
        setSubmitSucceeded(false)
    }

    return {submitSucceeded, resetForm, submitForm}
}

export default useSubmit