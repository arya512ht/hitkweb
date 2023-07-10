import React, { useState } from "react";
import './StudentLogin.css';
import { NavLink } from "react-router-dom";

const StudentLogin = () => {

    const [user, setUser] = useState({
        username: '',
        userpassword: '',

    })

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    return (
        <>
            <div className="loginClass">
                <div className="container  mb-5">
                    <form>


                        <div className="container form pb-4">
                            <h5 className="text-center pt-3">Student Login</h5><hr></hr>
                            <div className="row">
                                <div className="col-12 col-md-12 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">User Name</label>
                                        <input type="text" name="username" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12 form-filed">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">PassWord </label>
                                        <input type="password" name="userpassword" onChange={onValueChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Password" />
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
                            <hr></hr>
                            <div className="row">
                                <div className="col-12 col-md-12 form-filed">
                                    <h6>If You Don't Have Any Account Register First</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="submit-btn">
                                        <NavLink to={'/Admission'} className={'btn-submit'}>Register Here</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudentLogin;