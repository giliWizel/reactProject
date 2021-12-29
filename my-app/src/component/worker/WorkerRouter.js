import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Details from './details/details';
import Feedback from './feedback/feedback';
import ProposalsForApproval from './proposalsForApproval/proposalsForApproval';
import RegisterWorker from './register/register';
import CalendarWorker from './schedule/schedule';
export default function WorkerRouter() {
    return (
        <div>
            <Menu />
          
        </div>
    )
}

function Menu() {
    // className="navbar navbar-expand-lg navbar-light bg-light"
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto navbar-right">
                            <li className="nav-item">
                                <Link className="nav-link" to="/details">פרטים אישיים</Link>
                            </li>
                            <li className="nav-item navbar-right">
                                <Link className="nav-link" to="/proposalsForApproval">הצעות לאישור</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/schedule">לוח זמנים</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/feedbackWorker">משוב למערכת</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}