import Banner from '../../components/Banner';
import styled from 'styled-components';
import HomeStays from '../../components/HomeStays';
import Footer from '../../components/Footer';

const Home = styled.div`
  text-align: center;
`

const HomePage = () => {
  return (
    <Home>
      <Banner/>
      <HomeStays/>
      <Footer/>
    </Home>
  );
}

export default HomePage;
