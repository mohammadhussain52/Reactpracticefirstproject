import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from "react";
import './App.css'
import Homepage from './pages/Homepage';
import Mainlayout from './layout/Mainlayout';
import Jobspage from './pages/Jobspage';
import NotFoundpage from './pages/NotFoundpage';
import SinglejobPage, {jobLoader} from './pages/SinglejobPage';
import Addjobpage from './pages/Addjobpage';



const router = createBrowserRouter(
  createRoutesFromElements (
  <Route path='/' element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<Jobspage />} />
      <Route path='/add-job' element={<Addjobpage />} />
      <Route path='/job/:id' element={<SinglejobPage />} loader={jobLoader} />
      <Route path='/*' element={<NotFoundpage />} />
      </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
    // "wsdasd"
  );
};
export default App;
