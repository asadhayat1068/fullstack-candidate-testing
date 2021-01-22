import Layout from '../Layout/Layout'
import Fetch from 'isomorphic-unfetch'
import { useState } from 'react'

const Index =  (props) => {
  // console.log('Index Propsss', props)
  const [filteredData, setFilteredData] = useState(null);
  return (
    <Layout jobs={filteredData == null ? props.jobs : filteredData}
      filters={props.filters}
      setFilteredData={setFilteredData}
    >
      <h1>Hello</h1>
    </Layout>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await Fetch('http://localhost:3000/api/filters')
  const filters = await res.json();

  const JobsRes = await Fetch('http://localhost:3000/api/jobs')
  const jobsData = await JobsRes.json();
  
  return { filters: filters, jobs: jobsData }
}

export default Index
