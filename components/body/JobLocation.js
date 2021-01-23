import { useState } from 'react'
import JobItem from './JobItem'

const JobLocation = (props) => {
    const [showJobs, toggleShowJobs] = useState(false)
    const showJobsHandler = () => { toggleShowJobs(showJobs => !showJobs) }
    return (
        <div>
            <div className="flex my-2 cursor-pointer" onClick={showJobsHandler}>
                <div className="h-10 w-10 rounded-lg inline-block bg-gray-300  cursor-pointer">
                    <p className=" text-white uppercase text-center font-semibold text-xl mt-1">
                    { props.location.name[0] + props.location.name[1] }
                    </p>
                </div>

                <div className="ml-4">{props.location.total_jobs_in_hospital} for {props.location.name}</div>
            </div>
            {showJobs && (<div>
                {props.location.items.map(item => ( <JobItem job={item} key={item.job_id}/>))}
            </div>)}
        </div>
    )
}

export default JobLocation
  