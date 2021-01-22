import {
    LOAD_JOBS, LOAD_FILTERS
} from '../actions'

const initialState = {
    filters: {},
    jobs: {}
}

function jobs(state = initialState, action) {
    console.log('ACTIONNN: ', action)
    console.log('INITIAL STATE: ', state)
    const {filters,  jobs } = action

    switch (action.type) {
        case LOAD_JOBS:
            return {
                ...state,
                jobs: jobs
            }
        case LOAD_FILTERS:
            return {
                ...state,
                filters
            }
        default:
            return state
    }
}

export default jobs