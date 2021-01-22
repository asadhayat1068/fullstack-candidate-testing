const JobDetails = ({job}) => {
    
    // console.log('Job Details Props', job)

    return (
        <div className="flex justify-between">
            <div className="mr-5 flow-root">
                <div className="mb-3 flex">
                    <p className="mr-7 font-semibold ">Department:</p>
                    <p className="ml-5">{job?.department.reduce((dept, value) => dept + ", " + value)}</p>
                </div>
                <div className="flex mb-3">
                    <p className="font-semibold mr-4">Hours / shifts:</p>
                    <p className="ml-5">{job?.hours[0]} hours / {job?.work_schedule}</p>
                </div>
                <div className="flex">
                    <p className="font-semibold mr-12">Summary:</p>
                    <p className="ml-5">{job?.description}</p>
                </div>
            </div>
            
            <div className="flex flex-col">
                <div className="w-32 border rounded-lg py-1 px-3 mr-4 border-blue-600  inline-block cursor-pointer bg-blue-600">
                <p className="text-white text-sm py-1 px-1 text-center">
                    Job details
                </p>
                </div>
                <div className="border rounded-lg py-1 px-3 mt-3 border-blue-600 inline-block mr-4 cursor-pointer ">
                <p className="text-blue-600 text-sm text-center py-1">Save job</p>
                </div>
            </div>
        </div>
    )
}
export default JobDetails
  