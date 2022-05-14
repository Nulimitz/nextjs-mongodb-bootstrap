import React from "react";
import Image from "next/image";

const Learn = () => {
  return (
    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <Image
              className="d-block mx-auto mb-4 img-fluid"
              src="/images/world_map.png"
              width="500px"
              height="313px"
              alt="NextJS Auth"
            />
          </div>
          <div className="col-md p-5">
            <h2>Learn The Fundamentals</h2>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" className="btn btn-outline-primary mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
