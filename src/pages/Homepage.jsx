import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListing from '../components/Joblisting'
import ViewAlljob from '../components/ViewAlljob'

const Homepage = () => {
  return (
    <section className='container'>
    < Hero />
    < Homecards />
    < JobListing slice={3} heading={"Recent Jobs"}/>
    < ViewAlljob />
    </section>
    
  );
}

export default Homepage
