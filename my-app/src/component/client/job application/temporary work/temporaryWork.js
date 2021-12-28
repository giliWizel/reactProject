import React, { createRef, useState } from "react";
import { connect } from 'react-redux';
import Http from '../../../../config/axios'
import { useNavigate } from 'react-router-dom'
// import { actionsStore } from '../../../redux/actions/actions'
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({


})
export default connect(mapStateToProps, mapDispatchToProps)(function Temporary(props) {
    let choose = ["נקבה", "זכר"]
    let streets = ["בני ברק", "ירושלים", "תל אביב"]
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()
    const reftoHours = createRef();
    const refTobeginingTime = createRef();
    const refToendTime = createRef();
    const refDuringTime = createRef();
    const refToChoose = createRef();
    const refToDataBegining = createRef();

    function getResult() {
        const job = {
            beginingTime: refTobeginingTime.current.value,
            duringTime: refDuringTime.current.value,
            choose: refToChoose.current.value,
            EndTime: refToendTime.current.value,
            dateBegining: refToDataBegining.current.value,
            color: '#009788'
        };

        console.log("job" + job);


        // Http.post('Customer/GetResult', user,job)
        //     .than(res => {
        //         שליחת נתונים בProps 
        //             navigate("/searchResult", { replace: true });
        //       
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

    }



    function handleValidation() {
        debugger
        let formfields = fields;
        let error = {};
        let formIsValid = true;




        if (formfields["choose"] === undefined || formfields["choose"] === 'nochoose') {
            formIsValid = false;
            error["choose"] = "חובה לבחור מין";
        }
        if (!formfields["dateBegining"]) {
            formIsValid = false;
            error["dateBegining"] = "חובה להכניס תאריך  ";
        }
        if (!formfields["duringTime"]) {
            formIsValid = false;
            error["duringTime"] = "חובה להכניס משך זמן";
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
            getResult();

        }


    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>עבודה זמנית</h1>



                        <div className="mb-3 row">
                            <label htmlFor="beginingTime" className="col-sm-3 col-form-label" >שעת התחלה</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="beginingTime" ref={refTobeginingTime} placeholder="שעת התחלה" onChange={(e) => handleChange("beginingTime", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["beginingTime"]}</span>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="EndTime" className="col-sm-3 col-form-label" >שעת סיום</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="EndTime" ref={refToendTime} placeholder="שעת סיום" onChange={(e) => handleChange("endTime", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["endTime"]}</span>
                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label" >בחר מין </label>
                            <div className="col-sm-9">
                                <select className="form-select" ref={refToChoose} onChange={(e) => handleChange("choose", e)} aria-label="Default select example">
                                    <option defaultValue value="nochoose">לא משנה</option>
                                    {choose.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <span style={{ color: "red", fontSize: "small" }}>{errors["choose"]}</span>
                            </div>
                        </div>


                        <div className="mb-3 row">
                            <label htmlFor="duringTime" className="col-sm-3 col-form-label" >משך זמן</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="duringTime" ref={refDuringTime} placeholder="משך זמן" onChange={(e) => handleChange("duringTime", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["duringTime"]}</span>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="dateBegining" className="col-sm-3 col-form-label" >תאריך </label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="dateBegining" ref={refToDataBegining} placeholder="תאריך" onChange={(e) => handleChange("dateBegining", e)} />
                                <span style={{ color: "red", fontSize: "small" }}>{errors["dateBegining"]}</span>
                            </div>
                        </div>



                    </form>
                    <button className="btn btn-primary" onClick={contactSubmit}>שליחת בקשה</button>



                </div>

            </div >

        </div >



    )
})