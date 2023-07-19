import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo_white.jpg"
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`

function Footer() {
    return (
        <StyledFooter>
            <NavLink>
                <img src={logo} alt="logo-kasa-white" />
            </NavLink>   
            <p style={{color: 'white'}}>© 2020 Kasa. All rights reserved</p>
        </StyledFooter>
    )
}

export default Footer