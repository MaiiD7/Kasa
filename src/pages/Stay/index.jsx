import { useParams } from "react-router";
import data from '../../assets/data.json';
import Header from "../../components/Header";
import styled from "styled-components";
import Gallery from "../../components/Gallery";
import StayInfos from "../../components/StayInfos";

const Stay = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
`

function StayPage() {
  const { stayId } = useParams();
  const stay = data.find((el) => el.id === stayId)

  return (
    <Stay>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Gallery pictures={stay.pictures}/>
        <StayInfos stay={stay}/>
      </div>
    </Stay>
  );
}

export default StayPage;