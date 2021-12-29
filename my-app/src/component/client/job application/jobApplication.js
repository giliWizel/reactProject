import React from 'react';
import TemporaryWork from './temporary work/temporaryWork'
import PermamentJob from './Permanent job/PermanentJob'
import Home from '../home'

export default function JobApplication(props) {
    return (
        <>
                <Home></Home>

            <div className="container">
                <h1>בקשת עבודה</h1>
                <div className="row">
                    <div className="col-6">
                        <PermamentJob></PermamentJob>

                    </div>
                    <div className="col-6">
                        <TemporaryWork></TemporaryWork>
                    </div>
                </div>
            </div>
        </>

    )
}