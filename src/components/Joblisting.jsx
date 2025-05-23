import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // make sure this is the correct path
import { collection, getDocs } from "firebase/firestore";
import JobListings from "./JobListings";
import Spinner from "./Spinner";

const Joblisting = ({ slice, heading }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobsData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {heading}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(slice ? jobs.slice(0, slice) : jobs).map((job) => (
              <JobListings key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblisting;
