import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from "react";
import './App.css'
import Homepage from './pages/Homepage';
import Mainlayout from './layout/Mainlayout';
import Jobspage from './pages/Jobspage';
import NotFoundpage from './pages/NotFoundpage';
import SinglejobPage, {jobLoader} from './pages/SinglejobPage';
import Addjobpage from './pages/Addjobpage';
import Editjobpage from './pages/Editjobpage';




const App = () => {
// Add New Job
  const addjob =  async(newjob) => {
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newjob)
    });
  }

  //Delete Job
  const deletejob = async(id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  //Update Job
  const updatejob = async(job) => {
    const res = await fetch( `http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    });
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements (
    <Route path='/' element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<Jobspage />} />
        <Route path='/add-job' element={<Addjobpage addjobsubmit={addjob} />} />
        <Route path='/edit-job/:id' element={<Editjobpage updatejobsubmit={updatejob}/>} loader={jobLoader} />
        <Route path='/job/:id' element={<SinglejobPage deletejob={deletejob} />} loader={jobLoader} />
        <Route path='/*' element={<NotFoundpage />} />
        </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};
export default App;
