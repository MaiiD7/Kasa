import styled from 'styled-components';
import './index.css';
import breakpoint from 'styled-components-breakpoint';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';

const Error = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
`

const MainSection = styled.div`
  ${(props) => {
    return `
    width: 80%;
    display flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: ${props.theme.mainColor};
    `
  }}`

const CustomNavLink = styled(NavLink)`
  ${(props) => {
    return `
    text-decoration: underline;
    font-size: 3vw;
    color: ${props.theme.mainColor};
    margin-top: 75px;
    `
  }};
  ${breakpoint('md')`
      font-size: 2vw;
      text-decoration: underline;
    `}
  ${breakpoint('lg')`
      font-size: 1.2vw;
      text-decoration: underline;
    `}`

const ErrorPage = () => {
  return (
    <Error>
      <Header/>
      <MainSection>
        <h2 id="erreur" className='errorPageText'>404</h2>
        <p id="erreur-info" className='errorPageText'>Oups! La page que vous demandez n'existe pas.</p>
        <CustomNavLink to="/">Retourner sur la page d’accueil</CustomNavLink>
      </MainSection>
      
    </Error>
  );
}

export default ErrorPage;