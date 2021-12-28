import React, { createRef, useState } from "react";
import { connect } from 'react-redux'
import { actionsStore } from '../redux/actions/actions'
import { routerClient } from './client/RouteClient';
import Http from '../config/axios'
import register from './client/register/register';
import { useNavigate } from 'react-router-dom';
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({

    addNewUser: (token) => dispatch(actionsStore.addNewUser(token)),

})
export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const { user, addNewUser, history } = props;
    const reftoEmail = createRef();
    const reftoPassword = createRef();
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    function login() {

        const user = {
            "email": reftoEmail.current.value,
            "password": reftoPassword.current.value

        }

        // Http.post('UserLogin/Login', user)
        //     .than(res => {
        //         if (res.message === "משתמש לא קיים") {
        //             console.log("משתמש לא קיים")
        //             navigate("/Register", { replace: true });
        //         }
        //         else {
        //             addNewUser(res.data);
        // if (res.data.is_female === undefined) {
        //     navigate("/client", { replace: true });
        // }
        // else{
        //     navigate("/worker", { replace: true });
        // }

        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }
    function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    function handleValidation() {
        debugger
        let formfields = fields;
        let error = {};
        let formIsValid = true;


        if (!formfields["password"]) {
            formIsValid = false;
            error["password"] = "חובה להכניס סיסמא";
        }
        if (!formfields["email"]) {
            formIsValid = false;
            error["email"] = "חובה להכניס מייל";
        }
        if (typeof formfields["email"] !== "undefined") {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formfields["email"]) === false) {
                formIsValid = false;
                error["email"] = "כתובת מייל לא חוקית";
            }
        }
        setErrors(error)
        return formIsValid
    }
    function handleChange(field, e) {
        let formfields = fields;
        formfields[field] = e.target.value;
        setFields(formfields)
    }
    function contactSubmit(e) {
        e.preventDefault();

        if (handleValidation()) {
            login()
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>כניסה</h1>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">מייל</label>
                            <input type="text" className="form-control" id="email" ref={reftoEmail} placeholder="מייל" onChange={(e) => handleChange("email", e)} />
                            <span style={{ color: "red", fontSize: "small" }}>{errors["email"]}</span>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">סיסמא</label>
                            <input type="password" className="form-control" id="password" placeholder="סיסמא" onChange={(e) => handleChange("password", e)} ref={reftoPassword} />
                            <span style={{ color: "red", fontSize: "small" }}>{errors["password"]}</span>
                            <br></br>
                            <input type="checkbox" onClick={myFunction} />  הצג סיסמא
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={contactSubmit}>כניסה</button>

                </div>

            </div >

        </div >



    )
})