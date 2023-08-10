import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import StaysCard from './StaysCard';
import data from '../../assets/data.json';

const MainSection = styled.section`
    width: 80%;
    height: fit-content;
    border-radius: 20px;
    background-color: rgba(246, 246, 246, 1);
    margin: 40px auto;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    ${breakpoint('lg')`
        width: 90%;
    `}
    ${breakpoint('xl')`
        width: 90%;
    `}
`

const HomeStays = () => {
    const stays = data;

    return (
        <MainSection>
            {stays.map((stay) => (<StaysCard key={stay.id} stay={stay}/>))}
        </MainSection>
        
    )
}

export default HomeStays