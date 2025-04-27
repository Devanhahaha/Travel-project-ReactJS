import React from "react"
export default function Packages() {
    return (
        <div className="container-fluid pt-5 pb-5 mt-5 mb-5">
        <div className="container text-center">
            <h2 className="display-3 fs-1 text-warning" id="packages">Packages</h2>
            <div className="row pt-4 gx-4 gy-4">
                <div className="col-md-4">
                    <div className="image-stack align-items-center justify-content-center">
                        <img src="/assets/img/5.jpg" height="300" style={{ width: "300px" }} className="img img-4" />
                        <img src="/assets/img/6.jpg" height="250" style={{ width: "300px" }} className="img img-5" />
                        <img src="/assets/img/7.jpg" height="250" style={{ width: "300px" }} className="img img-6" />
                    </div>
                </div>
                <div className="col-md-4 ms-auto text-start">
                    <h1 className="fs-2">Thing You Need To <br/>
                        Prepare <span className="text-warning">Before Traveling</span>
                    </h1>
                    <h2 className="fs-6">01. Best Food</h2>
                    <p className="ms-4">We Provide The Best Quality <br />
                        Food To Your Customers.
                    </p>
                    <h2 className="fs-6">02. Best Travel Plan</h2>
                    <p className="ms-4">We Provide The Best Travel <br />
                        Packages For You.
                    </p>
                    <h2 className="fs-6">03. Best Flights</h2>
                    <p className="ms-4">We Provide The Best Flying <br />
                        Experience From Our Trusted Airline.
                    </p>
                </div>                
            </div>
        </div>
     </div>
    )
}