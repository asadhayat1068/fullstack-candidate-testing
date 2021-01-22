import JobLocation from './JobLocation'

const MainContainer = (props) => {
    console.log('Main Containerrrrrrr Props', props)
    
    const getTotalJobs = (jobs) => {
        let total = 0
        jobs.forEach(job => {
            total += job.total_jobs_in_hospital
        });
        return total
    }
    return (
        <div className="card pl-2">
            


            <div class="flex justify-between mb-8">
                <div class="text-sm">
                    <span>
                        <span class="font-semibold text-sm pr-2">{ getTotalJobs(props.locations)}</span>
                        job postings
                    </span>
                </div>
                <div class="text-sm hidden lg:inline-block">
                    <span class="text-gray-400">Sort by</span>
                    <span class="pl-2 cursor-pointer">Location</span>
                    <span class="pl-2 cursor-pointer">Role</span>
                    <span class="pl-2 cursor-pointer">Department</span>
                    <span class="pl-2 cursor-pointer">Education</span>
                    <span class="pl-2 cursor-pointer">Experience</span>
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
  