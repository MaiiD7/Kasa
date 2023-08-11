import Banner from '../../components/Banner';
import styled from 'styled-components';
import HomeStays from '../../components/HomeStays';
import Footer from '../../components/Footer';
import bannerBackground from '../../assets/Banner-background-home.png'
import Header from '../../components/Header';

const Home = styled.div`
  text-align: center;
`

const HomePage = () => {
  return (
    <Home>
      <Header/>
      <Banner bannerBackground={bannerBackground} home={true}/>
      <HomeStays/>
      <Footer/>
    </Home>
  );
}

export default HomePage;
