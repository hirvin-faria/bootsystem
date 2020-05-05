import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="mb-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/Home">
                            <a class="nav-link">Home</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/">
                            <a class="nav-link">Contato</a>
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}