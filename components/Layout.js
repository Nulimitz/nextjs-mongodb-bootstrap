import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ title, children, sidebar }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? `${title} - Nextjs Auth` : "Nextjs Auth"}</title>
      </Head>
      <Navbar />

      <main
        role="main"
        className={`min-vh-100 ${sidebar ? `withSidebar` : ``}`}
      >
        {sidebar && <Sidebar />}
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
