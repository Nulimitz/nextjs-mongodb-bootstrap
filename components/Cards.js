import React from "react";

const Cards = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-primary bg-gradient text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-filetype-js"></i>
                </div>
                <h3 className="card-title mb-3">NextJS</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-outline-light">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light bg-gradient text-dark">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-lock"></i>
                </div>
                <h3 className="card-title mb-3">NextAuth</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-primary bg-gradient text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-bootstrap"></i>
                </div>
                <h3 className="card-title mb-3">Bootstrap 5</h3>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, quas quidem possimus dolorum esse eligendi?
                </p>
                <a href="#" className="btn btn-outline-light">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
