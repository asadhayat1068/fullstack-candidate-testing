import { GetServerSideProps } from 'next'
import Header from '../components/header/header'
import Body from '../components/body/body'
import SearchBar from '../components/body/searchBar'
import { useState } from 'react'
import Footer from '../components/footer/footer'

const Layout = (props) => { 
    // console.log('Layout Props: ', props)

    const fetcher = (url) =>
    fetch(url).then((res) => {
      return res.json();
    });

    const handleSearch = async (query) => {
        if(query === "")
        {
            props.setFilteredData(null)
            return
        }
        query = query.toLowerCase()
        fetcher("/api/jobs?search=").then((data) => {
            // console.log(`Fetcher Data + ${query}`, data)
            data.jobs = data.jobs.filter( job => {
            let include = job.job_title.toLowerCase().includes(query) || job.name.includes(query);
                if(!include) {
                    for (let item of job.items) {
                        include = include || item.department.join('').toLowerCase().includes(query)
                        include = include || item.required_credentials.join('').toLowerCase().includes(query)
                        include = include || item.required_skills.join('').toLowerCase().includes(query)
                        include = include || item.type.toLowerCase().includes(query)
                        include = include || item.work_schedule.toLowerCase().includes(query)
                        include = include || item.name.toLowerCase().includes(query)
                        include = include || item.job_type.toLowerCase().includes(query)
                        include = include || item.job_title.toLowerCase().includes(query)
                        include = include || item.experience.toLowerCase().includes(query)
                    }
                }
                return include
            })
            props.setFilteredData(data)
        })
    }
    return (
        <div className="bg-gray-100">
            <Header/>
            <div className="container mx-auto">
                <SearchBar handleSearch={handleSearch}/>
                <Body children={props.children}
                    jobs={props.jobs}
                    filters={props.filters}
                    setFilteredData={props.setFilteredData}
                />
            </div>
            <Footer/>
        </div>
        )
}
export default Layout
