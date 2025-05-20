import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import React from 'react'

const SinglejobPage = () => {
    const {id} = useParams()
    const [job, setjob] = useState(null)
    const [loading, setLoading] = useState(true)

  useEffect (() =>{
    const fetchjob = async () =>{
        try {
            const res = await fetch(`http://localhost:8000/jobs/${id}`);
            const data = await res.json();
            console.log(data)
            setjob(data);
          }
          catch (error) {
            console.log('Error fetching data, error')   
          }
          finally {
            setLoading(false)
          }
    }
    fetchjob();

  }, [])
    return (
    loading ? <Spinner /> : (
    <h1>{job.title}</h1>)
  );
}

// const jobloader = async ({})

export default SinglejobPage
