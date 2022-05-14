import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Index() {
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

  return (
    <Layout title="Dashboard" sidebar>
      <div className="container-fluid mt-3 pt-3">
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
