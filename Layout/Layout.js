import { GetServerSideProps } from 'next'
import Header from '../components/header/header'
import Body from '../components/body/body'
import SearchBar from '../components/body/searchBar'
import { useState } from 'react'
import Footer from '../components/footer/footer'

const Layout = (props) => { 
    console.log('Layout Props: ', props)

    const fetcher = (url) =>
    fetch(url).then((res) => {
      return res.json();
    });

    const handleSearch = async (query) => {
        console.log('Calling Handle Search')
        if(query === "")
        {
            props.setFilteredData(null)
            return
        }

        fetcher("/api/jobs?search=").then((data) => {
            // console.log(`Fetcher Data + ${query}`, data)
            data.jobs = data.jobs.filter( job => {
            let include = job.job_title.includes(query) || job.name.includes(query);
                if(!include) {
                    for (let item of job.items) {
                        include = include || item.department.join('').includes(query)
                        include = include || item.required_credentials.join('').includes(query)
                        include = include || item.required_skills.join('').includes(query)
                        include = include || item.type.includes(query)
                        include = include || item.work_schedule.includes(query)
                        include = include || item.name.includes(query)
                        include = include || item.job_type.includes(query)
                        include = include || item.job_title.includes(query)
                        include = include || item.experience.includes(query)
                        
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
                <Body children={props.children} jobs={props.jobs.jobs} filters={props.filters}/>
            </div>
            <Footer/>
        </div>
        )
}
export default Layout
