import Head from "next/head";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu - My Website</title>
      </Head>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Giới thiệu về chúng tôi</h1>
        <p>Đây là trang giới thiệu của website.</p>
      </main>
      <Footer />
    </>
  );
};

export default About;
