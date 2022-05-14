import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const notFound = () => {
  return (
    <>
      <Layout title="Not Found">
        <div className="container mt-3 pt-3">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <Link href="/" passHref>
                <a className="btn btn-link">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default notFound;
