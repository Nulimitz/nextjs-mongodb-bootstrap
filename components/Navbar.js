import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container-fluid">
          {session && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="offcanvasExample"
            >
              <span
                className="navbar-toggler-icon"
                data-bs-target="#sidebar"
              ></span>
            </button>
          )}

          <Link href="/" passHref>
            <a className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold">
              NextJS <span className="text-primary">Auth</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            {!session ? (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link href="/" passHref>
                      <a
                        className={`nav-link ${
                          router.pathname == "/" ? `active` : ""
                        }`}
                      >
                        <i className="bi bi-house me-2"></i>
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" passHref>
                      <a
                        className={`nav-link ${
                          router.pathname == "#" ? `active` : ""
                        }`}
                      >
                        <i className="bi bi-info-circle me-2"></i>
                        <span>Help</span>
                      </a>
                    </Link>
                  </li>
                </ul>
                <button
                  className="btn btn-primary ms-lg-3"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  role="button"
                >
                  Get Started
                </button>
              </>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" passHref>
                    <a
                      className={`nav-link ${
                        router.pathname == "/" ? `active` : ""
                      }`}
                    >
                      <i className="bi bi-house me-2"></i>
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" passHref>
                    <a
                      className={`nav-link ${
                        router.pathname == "#" ? `active` : ""
                      }`}
                    >
                      <i className="bi bi-info-circle me-2"></i>
                      <span>Help</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle m-0"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {session.user.name}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <span className="text-center dropdown-header">
                        <Image
                          className="img-fluid rounded-circle"
                          src={session.user.image}
                          width="50px"
                          height="50px"
                          alt={session.user.name}
                        />
                        <h6>{session.user.name}</h6>
                        <p>{session.user.email}</p>
                      </span>
                    </li>
                    {session.user.role === "admin" && (
                      <li>
                        <Link href="/admin" passhref>
                          <a className="dropdown-item">
                            <i className="bi bi-person me-2"></i>
                            <span>Admin Dashboard</span>
                          </a>
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link href="/profile" passhref>
                        <a className="dropdown-item">
                          <i className="bi bi-person me-2"></i>
                          <span>Profile</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passhref>
                        <a className="dropdown-item">
                          <i className="bi bi-gear me-2"></i>
                          <span>Settings</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={signOut}>
                        <i className="bi bi-box-arrow-right me-2" />
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
