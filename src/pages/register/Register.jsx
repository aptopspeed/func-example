import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
    const [inputData, setInputData] = useState({
        fullname : '',
        employeeNo : '',
        password : '',
        repassword: ''
    })

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => { 
        e.preventDefault()

        if(inputData.password !== inputData.repassword) {
            Swal.fire({
                icon: "warning",
                title: "test login",
                text: "good or bad"
            })
            return;
        }
        alert('ok')

    }
  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <div>
            <b>Example</b>Training
          </div>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={inputData.fullname}
                  className="form-control"
                  placeholder="Fullname"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="employeeNo"
                  onChange={handleChange}
                  value={inputData.employeeNo}
                  className="form-control"
                  placeholder="Employee Number"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={inputData.password}
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="repassword"
                  onChange={handleChange}
                  value={inputData.repassword}
                  className="form-control"
                  placeholder="Retype password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>

            <Link to='/login' className="text-center">I already have a membership</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
