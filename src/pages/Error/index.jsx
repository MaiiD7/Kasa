import styled from 'styled-components';
import './index.css';
import breakpoint from 'styled-components-breakpoint';
import { NavLink } from 'react-router-dom';

const MainSection = styled.div`
  ${(props) => {
    return `height: 80vh;
    width: 100vw;
    display flex;
    flex-direction: column;
    align-items: center;
    color: ${props.theme.mainColor};
    `
  }}`

const CustomNavLink = styled(NavLink)`
  ${(props) => {
    return `
    text-decoration: underline;
    font-size: 3vw;
    color: ${props.theme.mainColor};
    margin-top: 120px;
    `
  }};
  ${breakpoint('lg')`
      font-size: 1.5vw;
      text-decoration: underline;
    `}`

const ErrorPage = () => {
  return (
    <div className="Stay">
      <MainSection>
        <h2 id="erreur" className='errorPageText'>404</h2>
        <p id="erreur-info" className='errorPageText'>Oups! La page que vous demandez n'existe pas.</p>
        <CustomNavLink to="/">Retourner sur la page d’accueil</CustomNavLink>
      </MainSection>
      
    </div>
  );
}

export default ErrorPage;