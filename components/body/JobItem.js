import JobDetails from './jobDetails'
import { useState } from 'react';
const JobItem = (props) => {
    const [showDetails, toggleJobDetails] = useState(false)
    const toggleShowDetails = () => { toggleJobDetails(showDetails => !showDetails) }
    return (
        <div>
            <div 
                className="my-4 sm:flex sm:justify-between border-t pt-4 pb-2 cursor-pointer"
                onClick={ toggleShowDetails }
            >
                <div>
                    <p className="font-semibold">{ props.job.job_title }</p>
                    <span className="text-sm">{ props.job.job_type } | </span>
                    <span className="text-sm">${props.job?.salary_range[0]} - ${props.job?.salary_range[1]} an
                        hour |{" "} </span>
                    <span className="text-sm">{ props.job.city }</span>
                </div>
                <h6 className="sm:mt-2 mr-4">3 months ago</h6>
            </div>
            {showDetails && (<div>
                <JobDetails job={props.job}/>
            </div>)}
        </div>
    )
}
export default JobItem
  