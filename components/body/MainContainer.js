import JobLocation from './JobLocation'
import { useState } from 'react'
const _ = require('lodash')

const MainContainer = (props) => {
    console.log('Main Containerrrrrrr Props', props)
    let sortingOptions = [
        {key: 'location', sort: false, field: 'name'},
        {key: 'role', sort: false, field: 'job_title'},
        {key: 'department', sort: false, field: (item) => {
            let departments = []
            item.items.map(it => {
                if (it.departments) {
                    departments = [...departments, ...it.departments]
                }
            })
            return departments
        }},
        {key: 'education', sort: false, field: (item) => {
            let education = []
            item.items.map(it => {
                if (it.required_credentials) {
                    education = education.concat([it.required_credentials])
                }
            })
            return education
        }},
        {key: 'experience', sort: false, field: (item) => {
            let experience = []
            item.items.map(it => {
                if (it.experience) {
                    experience = experience.concat([it.experience])
                }
            })
            return experience
        }}
    ]

    const [sortOptions, setSortOptions] = useState(sortingOptions)
    
    const getTotalJobs = (jobs) => {
        let total = 0
        jobs.forEach(job => {
            total += job.total_jobs_in_hospital
        });
        return total
    }
    

    const updateSorting = (key) => {
        const sortFields = [];
        const sortOrder = [];
        sortOptions.map((sort, i) => {
            if (sort.key == key) {
                console.log('Now: ', sort.sort, key, i)
                if (sort.sort == false) { 
                    sort.sort = 'asc'          
                } else if (sort.sort == 'asc') {
                    sort.sort = 'desc'
                } else {
                    sort.sort = false
                }
            }
            sortingOptions[i] = sort

            if(sort.sort !== false) {
                sortFields.push(sort.field)
                sortOrder.push(sort.sort)
            }
            setSortOptions(sortingOptions)

        })
        console.log('Sorting Options: ', sortingOptions)
        let sorted = _.orderBy(props.locations, sortFields, sortOrder)
        props.setFilteredData(sorted)
    }


    return (
        <div className="card pl-2">


            <div className="flex justify-between mb-8">
                <div className="text-sm">
                    <span>
                        <span className="font-semibold text-sm pr-2">{ getTotalJobs(props.locations)}</span>
                        job postings
                    </span>
                </div>
                <div className="text-sm hidden lg:inline-block">
                    <span className="text-gray-400">Sort by</span>
                    {sortOptions.map(sortOptions => (
                        <a className="pl-2 cursor-pointer"
                            key={sortOptions.key}
                            onClick={() => { updateSorting(sortOptions.key) }}
                        >
                            { sortOptions.key.charAt(0).toUpperCase() + sortOptions.key.slice(1) } |
                        </a>
                    ))}
                </div>
            </div>




            <div>
                {props.locations.map((location) => (
                    <JobLocation location={location} key={location.name}/>
                ))}
            </div>
        </div>
    )
}
export default MainContainer
  