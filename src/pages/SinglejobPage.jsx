import { useParams, useLoaderData } from 'react-router-dom'
import React from 'react'

const SinglejobPage = () => {
    const {id} = useParams();
    const job = useLoaderData();
 
    return (
    <h1>{job.title}</h1>
  );
}

const jobLoader = async({params}) => {
    const res = await fetch (`http://localhost:8000/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export  {SinglejobPage as default, jobLoader}
