import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import WorkerRouter from './worker/WorkerRouter';
import { RouteClient } from './client/RouteClient';
import Login from './login';
import Register from './register';
import About from './client/about/about';
import Feedback from './client/Feedback to the system/Feedback'
import ScheduleClient from './client/schedule/schedule'
import SearchResults from './client/searchResults/searchResults'
import JobApplication from './client/job application/jobApplication';
import Details from './worker/details/details'
import ProposalsForApproval from './worker/proposalsForApproval/proposalsForApproval'
import CalendarWorker from './worker/schedule/schedule'
import FeedbackWorker from './worker/feedback/feedback'

import Home from './client/home'
export default function HomeRouter() {
    return (
        <div>
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/ScheduleClient" element={<ScheduleClient />} />
                <Route path="/JobApplication" element={<JobApplication />} />
                <Route path="/searchResults" element={<SearchResults client={{ "name": "fbf" }} job={{ "id": "fd" }} suggestions={[{ "name": "1", "city": "aaa", "street": "fnjk" }, { "name": "2", "city": "rrr", "street": "fnjk" }, { "name": "3", "city": "aaa", "street": "fnjk" }]}></SearchResults>} />
                <Route path="/About" element={<About />} />
                <Route path="/worker" element={<WorkerRouter />}></Route>
                <Route path="/client" element={<Home />}></Route>
                <Route path="/details" element={<Details />}></Route>
                <Route path="/proposalsForApproval" element={<ProposalsForApproval />}></Route>
                <Route path="/schedule" element={<CalendarWorker />}></Route>
                <Route path="/feedbackWorker" element={<FeedbackWorker />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </div>
    )
}
