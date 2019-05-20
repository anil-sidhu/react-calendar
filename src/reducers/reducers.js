const reduce = (state = [], action) => {
    switch (action.type) {
        case 'Data':
            return {
                ...state,
                status: action.data
            }
            case 'Booking':
            return {
                ...state,
                Booking: action.data
            }

        default:
            return state
    }
}

export default reduce 