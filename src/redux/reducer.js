export const Reducer = (state = {
    zipForm: ''
}, action) => {
    return {...state, zipForm: action.payload}
}

