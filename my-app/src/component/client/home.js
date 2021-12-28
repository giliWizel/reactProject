import React from 'react'
import {
    Link

} from 'react-router-dom'


export default function Home(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto navbar-right">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/ScheduleClient"> לוח זמנים  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/About"> אודות  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/feedback"> משוב למערכת</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}