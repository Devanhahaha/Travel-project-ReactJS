import React from "react"
export default function Destinations() {
    return (
        <div className="container-fluid pt-5 pb-5 mt-5">
            <div className="container text-center">
                <h1 className="display-3 fs-1 text-warning" id="destination">Destination</h1>
                <h1 className="display-3 fs-1">Popular <span className="text-warning" style={{ fontStyle: 'italic' }}>Destination</span> DevanTravel</h1>
                <div className="row pt-4 gx-4 gy-4">
                    <div className="col-md-4">
                        <div class="card">
                            <img src="/assets/img/4.jpg" className="card-img-top" style={{ objectFit: "cover" }} alt="Travel" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="/assets/img/4.jpg" className="card-img-top" style={{ objectFit: "cover" }} alt="Travel" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="/assets/img/4.jpg" className="card-img-top" style={{ objectFit: "cover" }} alt="Travel" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}