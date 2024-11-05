import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [login, checklogin] = useState({
        username: "",
        password: ""
    });
    const addlogindetails = (e) => {

        checklogin({ ...login, [e.target.name]: e.target.value });
    }

    const history = useNavigate();

    const check = (e) => {
        e.preventDefault()
        

        axios.post("http://127.0.0.1:5000/login", login).then(
            (response) => {
                console.log(response.status)
                if (response.status === 200) {
                    console.log(response.data)
                    history('/view')

                } else {
                    alert('Login failed. Please try again.');
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )



    }



    return (
        <div className="login-container">
            <div className="card" id='login-card'>
                <div className="card-body" id='card-body-login'>
                    <h5 className="card-title">USER LOGIN </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Please enter your credentials</h6>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" onChange={addlogindetails} name='username' value={login.username} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={addlogindetails} name='password' value={login.password} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={check}>Login</button>
                        <div>
                            <a href="/create">Create User</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UserLogin;