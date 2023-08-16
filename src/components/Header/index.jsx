import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo_kasa.jpg"
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const StyledHeader = styled.header`
    display: flex;
    margin: 20px 5vw;
    justify-content: space-between;
    align-items: center;
`

const NavbarLink = styled(NavLink)`
    ${(props) => {
        return `
        text-decoration: none;
        font-size: 14px;
        color: ${props.theme.mainColor};
        text-transform: uppercase;
        &.active {
            text-decoration: underline;
        }
        `
    }}
    ${breakpoint('md')`
        font-size: 20px;
        text-transform: none;
    `}`
 
const Header = () => {
    return (
        <StyledHeader>
            <NavbarLink to="/">
                <img src={logo} alt="logo-kasa" style={{width: '12vw', minWidth: '100px', height: 'auto'}}/>
            </NavbarLink>
            <nav style={{minWidth: '15vw', width: 'fit-content',display: 'flex', justifyContent: 'space-around', gap: '15px'}}>
                <NavbarLink to="/" className={({ isActive }) => {
                    return isActive ? 'active': ''
                }}>Accueil</NavbarLink>
                <NavbarLink to="/about" className={({ isActive }) => {
                    return isActive ? 'active': ''
                }}>A Propos</NavbarLink>
            </nav>
        </StyledHeader>
        
    )
}

export default Header