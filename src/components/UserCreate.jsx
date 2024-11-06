import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

const UserCreate = () => {
    const [login, createlogin] = useState({
        username: "",
        password: ""
    });

    const addlogindetails = (e) => {
        createlogin({ ...login, [e.target.name]: e.target.value });
    };

    const history = useNavigate();

    const validateInputs = () => {
        const { username, password } = login;
        if (!username.trim() || !password.trim()) {
            alert('Username and password cannot be empty or contain only spaces.');
            return false;
        }
        return true;
    };

    const create = (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        axios.post("http://127.0.0.1:5000/create_user", login).then(
            (response) => {
                console.log(response.status);
                if (response.status === 200) {
                    console.log(response.data);
                    alert("User created successfully");
                    history('/view');
                } else {
                    alert('User creation failed. Please try again.');
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                alert('An error occurred while creating the user.');
            }
        );
    };

    return (
        <div>
            <div className="login-container">
                <div className="card" id='login-card'>
                    <div className="card-body" id='card-body-login'>
                        <h5 className="card-title">Register User</h5>
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
                            <button type="submit" className="btn btn-primary" onClick={create}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCreate;