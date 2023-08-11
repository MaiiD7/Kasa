import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner"
import Tab from "../../components/Tab";
import bannerBackground from '../../assets/Banner-background-about.png'
import tabsSettings from './tabsSettings.json'
import styled from "styled-components";
import Header from "../../components/Header";

const About = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AboutPage = () => {

  const tabsData = tabsSettings.tabsData

  return (
    <About>
      <div>
        <Header/>
        <Banner bannerBackground={bannerBackground} home={false}/>
        {tabsData.map((data,index) => (<Tab key={index} title={data.title} description={data.description}></Tab>))}
      </div>
      <Footer/>
    </About>
  );
}

export default AboutPage;