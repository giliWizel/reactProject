import React from 'react'
import Login from '../login'
import Register from './register/register'
import Home from './home'
import About from './about/about'
import Feedback from './Feedback to the system/Feedback'
import JobApplication from './job application/jobApplication'
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from 'react-router-dom'
import ScheduleClient from './schedule/schedule'
import SearchResults from './searchResults/searchResults'
export function RouteClient(props) {
  return (
    <div>
      <Home />
      <Routes >
        <Route path="/About" element={<About />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/ScheduleClient" element={<ScheduleClient />} />
        <Route path="/JobApplication" element={<JobApplication />} />
        <Route path="/searchResults" element={<SearchResults client={{ "name": "fbf" }} job={{ "id": "fd" }} suggestions={[{ "name": "1", "city": "aaa", "street": "fnjk" }, { "name": "2", "city": "rrr", "street": "fnjk" }, { "name": "3", "city": "aaa", "street": "fnjk" }]}></SearchResults>} />

      </Routes >
    </div>

  )
}