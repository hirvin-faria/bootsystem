import React from 'react';
import Navbar from "../../Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

export default function Home() {

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/400px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src="https://queconceito.com.br/wp-content/uploads/2014/07/Montanha.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src="https://www.brasileirosemushuaia.com.br/media/catalog/product/cache/1/image/700x460/17f82f742ffe127f42dca9de82fb58b1/a/l/alta_montanha_2.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}