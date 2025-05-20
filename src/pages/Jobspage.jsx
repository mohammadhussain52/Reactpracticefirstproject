import JobListings from '../components/JobListings'
import React from 'react'
import jobs from '../jobs.json'
import Joblisting from '../components/Joblisting'

const Jobspage = () => {
  return (
    
    <section className='bg-blue-50 px-4 py-6 container'>
        <Joblisting  heading={"Browse  Jobs"}/>
     </section>
        
    
  )
}

export default Jobspage
