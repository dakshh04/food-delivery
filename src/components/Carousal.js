import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit : "contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:"10"}} >
            <form className=" d-flex justify-content-center">
              {" "}
              {/* justify-content-center, copy this <form> from navbar for search box */}
              <input
                className="form-control me-2 w-75 bg-white text-dark"
                type="search"
                placeholder="Type in..."
                aria-label="Search"
              />
              <button className="btn text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              alt=""
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              src="https://source.unsplash.com/random/900x700/?burger"
            />
          </div>
          <div className="carousel-item">
            <img
              alt=""
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              src="https://source.unsplash.com/random/900x700/?pastry"
            />
          </div>
          <div className="carousel-item">
            <img
              alt=""
              className="d-block w-100"
              style={{filter:"brightness(30%)"}}
              src="https://source.unsplash.com/random/900x700/?pizza"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
