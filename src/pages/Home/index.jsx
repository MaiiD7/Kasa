import Banner from '../../components/Banner';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
`

function HomePage() {
  return (
    <Home>
      <Banner/>
    </Home>
  );
}

export default HomePage;
