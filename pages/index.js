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
        <link rel="icon" href="/D.png" />
      </Head>
      <Navbar />
      <Portfolio />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
