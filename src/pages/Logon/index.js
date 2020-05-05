import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Logon() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handlePress(e) {
        e.preventDefault();
        console.log(`${email} | ${password}`);
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col">
                    <form onSubmit={handlePress}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={email} onChange={ value => setEmail(value.target.value) } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={password} onChange={ value => setPassword(value.target.value) } type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>

        </div>
    )
}