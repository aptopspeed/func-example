import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
    const [inputData, setInputData] = useState({
        fullname : '',
        employeeNo : '',
        password : '',
        confirmPassword: '',
        userRole: 'guest'
    })

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => { 
        e.preventDefault()
        if(inputData.password !== inputData.confirmPassword) {
            Swal.fire({
                icon: "warning",
                title: "Failed",
                text: "Comfirm Password Mismatch"
            })
            return;
        }
        
        const message = `
        <strong>Full Name:</strong> ${inputData.fullname}<br>
        <strong>Username:</strong> ${inputData.employeeNo}<br>
        <strong>Password:</strong> ${inputData.password}`;

        Swal.fire({
            icon: "success",
            title: "User Information",
            html: message
        })


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
                  required
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
                  required
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
                  required
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
                  required
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={inputData.confirmPassword}
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
