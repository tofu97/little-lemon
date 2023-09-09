import updateTimes, {initializeTimes} from "./updateTimes";

test('initializeTimes returns the correct value', () => {
    const expected = [
        "17:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]
    const actual = initializeTimes()
    
    expect(actual).toEqual(expected)
})

test('updateTimes returns the same value provided in the state', () => {
    const state = ["12:01"]
    expect(updateTimes(state)).toEqual(state)
})