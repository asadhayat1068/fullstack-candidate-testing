export const LOAD_FILTERS = 'LOAD_FILTERS'
export const LOAD_JOBS = 'LOAD_JOBS'

export function loadFilters(filters) {
    return {
        type: LOAD_FILTERS,
        filters
    }
}


export function loadJobs(data) {
    return {
        type: LOAD_JOBS,
        data
    }
}