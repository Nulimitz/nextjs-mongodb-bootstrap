import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { getUserByEmail } from "../utils/db";

export default function Profile({
  user: { name, email, image, role, accounts },
}) {
  const { data: session } = useSession();

  // redirect if not authenticated
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  //console.log(user)

  return (
    <Layout title="Profile">
      <div className="container mt-3 pt-3">
        <h1>Profile</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <Image
                    src={image}
                    alt={name}
                    className="img-fluid"
                    width="150"
                    height="150"
                  />
                  <div className="mt-3">
                    <h4>{name}</h4>
                    {/* <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    <button className="btn btn-primary">Follow</button>
  <button className="btn btn-outline-primary">Message</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">{name}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">{email}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Role</h6>
                </div>
                <div className="col-sm-9 text-secondary">{role}</div>
              </div>
              <hr />
              {accounts.map((accounts, i) => (
                <>
                  <hr key={accounts.id} />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">User ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {accounts.userId}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Provider</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {accounts.provider}
                    </div>
                  </div>
                </>
              ))}

              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a className="btn btn-danger">Delete Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const user = await getUserByEmail(session.user.email);

  return {
    props: {
      session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
