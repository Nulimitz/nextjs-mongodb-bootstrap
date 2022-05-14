import Layout from "../components/Layout";

const contact = () => {
  return (
    <>
      <Layout title="Contact us">
        <div className="container mt-3 pt-3">
          <div className="row">
            <div className="card col-md-5 mx-auto justify-content-center">
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <form id="contactForm">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
