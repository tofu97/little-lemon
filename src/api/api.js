export const fetchAPI = async (date) => {
    const getTimes = () => {
        switch (date.getDay()) {
            case 0:
                return []
            case 1:
                return ["12:12", "13:00"]
            case 2:
                return ["12:13", "13:00", "14:00"]
            case 3:
                return ["12:14", "13:00", "14:00", "15:00"]
            case 4:
                return ["12:15", "13:00", "14:00", "15:00", "16:00"]
            case 5:
                return ["12:16", "13:00", "14:00", "15:00", "16:00", "17:00"]
            case 6:
                return ["12:17", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
            default:
                return []
        }
    }

    return new Promise((res, _) => {
        res(getTimes())
    })
}

export const submitAPI = async (formData) => {
    const data = JSON.stringify(formData);
    return new Promise((res, _) => {
        console.log("submitted:", data)
        res(true)
    })
}
