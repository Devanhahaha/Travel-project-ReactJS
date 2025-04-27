import React from "react"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg fixed-top mb-5">
        <div className="container-fluid">
            <div className="nav-content ms-5">
                <a className="navbar-brand" href="#">Devan <span className="text-warning">Travel</span></a>
                <p className="display-6 fs-6">Traveling Now Enjoy Your Hooliday</p>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#beranda">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#packages">Packages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#destination">Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-warning shadow-lg" aria-current="page" href="#" style={{ color: "white" }}>Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}