import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero page-header gradient">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/images/world_map.png"
              className="d-block mx-lg-auto img-fluid"
              alt="NextJS Auth"
              loading="lazy"
              width="700"
              height="500"
            />
          </div>
          <div className="col-lg-6">
            <h1>
              Welcome to <span className="text-white"> NextJS Auth </span>
            </h1>
            <p className="lead my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
              velit maximus, feugiat turpis a, facilisis nisl. Nunc dignissim,
              libero.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/contact" passHref>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4 gap-3"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
