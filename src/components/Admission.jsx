import React, { useState } from "react";
import './AdmissionStyle.css';
import { NavLink } from "react-router-dom";

const Admission = () => {

    const [user, setUser] = useState({
        name: '',
        fname: '',
        mname: '',
        dob: '',
        mobile: '',
        email: '',
        gender: '',
        rel: '',
        image: '',
        street: '',
        post: '',
        police: '',
        dist: '',
        state: '',
        pin: '',
        course: '',
        department: '',
        roll: '',
        adate: ''
    })

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    return (
        <>
            <div className="container-fluid mb-5">
                <form>
                    <h4 className="text-center pt-3">Student Registration Form</h4><hr></hr>

                    <div className="container form pb-4">
                        <h5 className="pt-3">Personal Details</h5><hr></hr>
                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Father's Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="fname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Father's Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mother's Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="mname" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mother's Name" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Date Of Birth <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="dob" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="mobile" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Mobile" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email Id <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Gender <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="gender" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Gender--</option>
                                        <option value={'male'}>Male</option>
                                        <option value={'female'}>Female</option>
                                        <option value={'other'}>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Religion <span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="rel" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Religion--</option>
                                        <option value={'hinduism'}>Hinduism</option>
                                        <option value={'islam'}>Islam</option>
                                        <option value={'sikh'}>Sikh</option>
                                        <option value={'christianity'}>Christianity</option>
                                        <option value={'buddhism'}>Buddhism</option>
                                        <option value={'sikhism'}>Sikhism</option>
                                        <option value={'jainism'}>Jainism</option>
                                        <option value={'other'}>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Image <span style={{ color: 'red' }}>*</span></label>
                                    <input type="file" name="image" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: demo@gmail.com" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Address Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Street<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="street" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Village" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Post Office <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="post" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Post Office" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Police Station <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="police" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Police Station" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Distrcit <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="dist" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your District" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">State <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="state" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your State" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Pin Code <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="pin" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your 6 Digit Pin" />
                                </div>
                            </div>
                        </div>

                        <div className="container m-0 p-0">
                            <h5 className="pt-3">Admission Details</h5><hr></hr>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Course<span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="course" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Select--</option>
                                        <option value={'B.Tech'}>B.Tech</option>
                                        <option value={'M.Tech'}>M.Tech</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Department<span style={{ color: 'red' }}>*</span></label>
                                    <select class="form-control" name="department" onChange={onValueChange} id="exampleFormControlSelect1">
                                        <option selected value={''}>--Select Select--</option>
                                        <option value={'cse'}>Computer Science & Engineering (CSE)</option>
                                        <option value={'cse-aiml'}>Computer Science & Engineering (Artificial Intelligence
                                            and Machine Learning) (CSE - AI & ML)</option>
                                        <option value={'cse-iotcs'}>Computer Science & Engineering (IoT & Cyber Security
                                            including Block Chain Technology) (CSE - IoT & CS)</option>
                                        <option value={'cse-desc'}>Computer Science & Engineering (Data Science)
                                            (CSE - D.Sc.)</option>
                                        <option value={'csbs'}>Computer Science and Business Systems (CSBS)</option>
                                        <option value={'ece'}>Electronics & Communication Engineering (ECE)</option>
                                        <option value={'it'}>Information Technology (IT)</option>
                                        <option value={'ee'}>Electrical Engineering (EE)</option>
                                        <option value={'aeie'}>Applied Electronics & Instrumentation Engineering (AEIE)</option>
                                        <option value={'me'}>Mechanical Engineering (ME)</option>
                                        <option value={'ce'}>Civil Engineering (CE)</option>
                                        <option value={'che'}>Chemical Engineering (ChE)</option>
                                        <option value={'bt'}>Biotechnology (BT)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Roll Number <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="roll" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Roll Number" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 form-filed">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Admission Date <span style={{ color: 'red' }}>*</span></label>
                                    <input type="date" name="adate" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Roll Number" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="submit-btn">
                                    <input type="reset" value={'Reset'} className="mr-2"></input>
                                    <NavLink to={''} className={'btn-submit'}>Submit</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admission;




