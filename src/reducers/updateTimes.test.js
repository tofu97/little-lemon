import updateTimes, {initializeTimes} from "./updateTimes";

test('initializeTimes returns the correct value', async () => {
    const expected = ["12:15", "13:00", "14:00", "15:00", "16:00"]
    const actual = await initializeTimes(new Date("2023-09-08"))
    
    expect(actual).toEqual(expected)
})

test('updateTimes returns the same value provided in the state', () => {
    const state = ["12:01"]
    expect(updateTimes(state, {
        type: 'update_times',
        times: state,
    })).toEqual(state)
})