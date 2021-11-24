import Head from "next/head";
import Navbar from "./components/SideComponents/Navbar";
import Portfolio from "./components/Portfolio";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lekan Dar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ld4.svg" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      <Navbar />
      <Portfolio />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
