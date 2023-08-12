import { useParams } from "react-router";
import data from '../../assets/data.json';
import Header from "../../components/Header";

function StayPage() {
  const { stayId } = useParams();
  const stay = data.find((el) => el.id === stayId)
  console.log(stay);

  return (
    <>
      <Header/>
      {stayId}
    </>
  );
}

export default StayPage;