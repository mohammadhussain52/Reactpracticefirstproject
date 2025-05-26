import React from "react";
import { useState, useEffect } from "react";
// import jobs from "../jobs.json";
import JobListings from "./JobListings";
import Spinner from "./Spinner";


const Joblisting = ({ slice , heading}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect (() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data);
      }
      catch (error) {
        console.log('Error fetching data', error)   
      }
      finally {
        setLoading(false)
      }
      
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {heading}
          </h2>
          
            { loading? <Spinner/> : 
            (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slice
              ? jobs
                  ?.slice(0, slice)
                  .map((item) => <JobListings key={item.id} job={item} />)
              : jobs
                  .map((item) => <JobListings key={item.id} job={item} />)
                  }
            </div>
            )
            }
            
          
        </div>
      </section>
    </div>
  );
};

export default Joblisting;
