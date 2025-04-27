import React from "react"
export default function Header() {
    return (
        <div classNameName="container-fluid pt-5 pb-5 mt-5">
            <div className="container pt-5 pb-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="display-3 fs-6" id="beranda">Let's Go Around The World</p>
                        <h1 className="fs-1">Let's Travel Now <br />
                            And <span className="text-warning" style={{ fontStyle: 'italic' }}>Visit New</span>, Very <br />
                            Beautiful Places</h1>
                        <p className="display-3 fs-6">Don't Delay, It's Time For You To Travel Around <br />
                            The World And Discover Other New AndinTeresting Things</p>
                        <a href="#" className="btn btn-warning rounded shadow-lg" style={{ color: "white" }}>Explore Now</a>
                        <a href="#" className="btn btn-black rounded ms-3 shadow-lg"
                            style={{ backgroundColor: "black", color: "white" }}>Packages</a>
                    </div>
                    <div className="col-md-6 mt-5 pt-5 position-relative">
                        <div className="image-stack">
                            <img src="/assets/img/1.jpg" className="img img-1" />
                            <img src="/assets/img/2.jpg" className="img img-2" />
                            <img src="/assets/img/3.jpg" className="img img-3" />
                        </div>
                        <div className="badge d-flex flex-column align-items-start">
                            <p style={{ color: "black" }}><i className="fa-solid fa-clipboard align-items-start" style={{ color: "orange" }}></i> Best Place
                            </p>
                            <p style={{ color: "black" }}><i className="fa-solid fa-camera align-items-start" style={{ color: "orange" }}></i> Best Photo
                            </p>
                            <p style={{ color: "black" }}><i className="fa-solid fa-location-dot align-items-start" style={{ color: "orange" }}></i> Best
                                Location</p>
                        </div>
                        <div className="d-flex align-items-center p-3 rounded shadow bg-white badgeTwo mt-5" style={{ width: "fit-content", height: "fit-content" }}>
                            <img src="/assets/img/4.jpg" width="50" height="50" className="rounded me-3" alt="" />
                            <div>
                                <h2 className="fs-6 fw-bold text-dark mb-1">Travel Plan</h2>
                                <p className="text-dark mb-0">Plan First Before Traveling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}