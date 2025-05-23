// src/App.jsx
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';

import Homepage from './pages/Homepage';
import Mainlayout from './layout/Mainlayout';
import Jobspage from './pages/Jobspage';
import NotFoundpage from './pages/NotFoundpage';
import SinglejobPage, { jobLoader } from './pages/SinglejobPage';
import Addjobpage from './pages/Addjobpage';
import Editjobpage from './pages/Editjobpage';

import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const jobsCollection = collection(db, 'jobs');

  // Fetch jobs from Firestore
  const getJobs = async () => {
    const snapshot = await getDocs(jobsCollection);
    setJobs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    getJobs();
  }, []);

  // Add new job
  const addJob = async (job) => {
    await addDoc(jobsCollection, job);
    getJobs();
  };

  // Delete job
  const deleteJob = async (id) => {
    await deleteDoc(doc(db, 'jobs', id));
    getJobs();
  };

  // Update job
  const updateJob = async (id, updatedJob) => {
    const jobRef = doc(db, 'jobs', id);
    await updateDoc(jobRef, updatedJob);
    getJobs();
  };

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<Jobspage jobs={jobs} />} />
        <Route path='/add-job' element={<Addjobpage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<Editjobpage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/job/:id'
          element={<SinglejobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='/*' element={<NotFoundpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
