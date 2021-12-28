import React from 'react'
import RegisterOne from './client/register/register'
import RegisterTwo from './worker/register/register'
export default function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <RegisterOne></RegisterOne>

                </div>
                <div className="col-6">
                    <RegisterTwo></RegisterTwo>
                </div>
            </div>
        </div>
    )
}