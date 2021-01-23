import Layout from '../Layout/Layout'
import { useState, useEffect } from 'react'
import { filter } from 'lodash';

const Index =  () => {
  const [filteredData, setFilteredData] = useState(null);
  const [jobsData, setJobsData] = useState(null);
  const [filters, setFilters] = useState(null);

  let jobsLoaded = false;
  let filtersLoaded = false;
  // let filters = {};

  useEffect(() => {
    getData()
  }, [])

  const fetcher = (url) =>
        fetch(url).then((res) => {
      return res.json();
  });

  

  const getData = async () => {

    fetcher("/api/jobs").then((data) => {
      return setJobsData(data)
    }).then(status => {
      console.log('JOBS DATA: ', filteredData)
      jobsLoaded = true
    })

    fetcher("/api/filters").then((data) => {
      // console.log('Filters DATA: ', data)
      return setFilters(data)
    }).then(status => {
      console.log('Filters DATA: ', filters)
      filtersLoaded = true
    })

  }

  return (
    filters && jobsData ? (<Layout 
        jobs={filteredData && filteredData.jobs != undefined ? filteredData.jobs : jobsData.jobs}
        filters={filters}
        setFilteredData={setFilteredData}
      >
        <h1>Hello</h1>
      </Layout>) : (<h1>Loading...</h1>)
    
  )
}

export default Index
