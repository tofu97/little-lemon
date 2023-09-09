import { fetchAPI } from "../api/api"

export const initializeTimes = async (date = new Date()) => {
    return await fetchAPI(date)
}

const updateTimes = (state, action) => {
    if (action.type === "update_times") {
        return action.times
    }
    return state
}

export default updateTimes