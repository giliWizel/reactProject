import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import WorkerRouter from './worker/WorkerRouter';
import { RouteClient } from './client/RouteClient';
import Register from './register';
export default function HomeRouter() {
    return (
        <div>
            <Routes>
                <Route path="/worker" element={<WorkerRouter />}></Route>
                <Route path="/client" element={<RouteClient />}></Route>
                <Route path="/Register" element={<Register />}></Route>

            </Routes>
        </div>
    )
}
