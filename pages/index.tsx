import Head from "next/head";
import { Header } from "../components/Header/Header";
import { NameSection } from "../components/NameSection/NameSection";
import styled from "styled-components";
import { ProfileImage } from "../components/ProfileImage";
import { SectionHeader } from "../components/CommonComponents/SectionHeader";
import { SkillSection } from "../components/Skills/SkillSection";
import { Experience } from "../components/Experience/Experience";
import { GitHub } from "../components/Github/GitHub";


function Home() {
  return (
    <PortFolio>
      <Head>
        <title>Nishith</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <NameSection />
      <ProfileImage />
      <SkillSection />
      <Experience />
      <GitHub/>
    </PortFolio>
  );
}

export default Home;

const PortFolio = styled.div``;