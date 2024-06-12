import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { server } from "../../constants";
import { httpClient } from "../../utils/httpClient";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
        e.preventDefault()
        let login = await httpClient.post(server.LOGIN_URL, input)
        console.log(login)
        Swal.fire({
            icon: "warning",
            title: "test login",
            text: "good or bad"
        })
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>AdminLTE</h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  value={input.username}
                  onChange={handleChange}
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  value={input.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p className="mb-0">
              <Link to='/register' className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
}

export default Login;
