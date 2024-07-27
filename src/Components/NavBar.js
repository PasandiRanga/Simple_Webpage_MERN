import React, { useContext } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.title = "NavBar";
        console.log("NavBar component mounted or updated");
    }, []);


    return (
        <AppBar position="static" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <NavLinks>
                    <StyledNavLink to="/" exact>Home</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                    <StyledNavLink to="/contact">Contact Us</StyledNavLink>
                </NavLinks>
                <CenteredNavLink to="/home">Ranga  Dancing  Academy</CenteredNavLink>
                <NavLinks>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {theme === 'dark' ? <WbSunny /> : <NightsStay />}
                    </IconButton>                </NavLinks>
            </Toolbar>
        </AppBar>
    );
};

const NavLinks = styled.div`
    display: flex;
    gap: 6rem; 
`;

const StyledNavLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;

    &.active {
        text-decoration: underline;
    }
`;

const CenteredNavLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    font-family: 'Lucida Handwriting', cursive; /* Apply the font family */
    font-weight: bold; 
    font-size: 25px;
    flex-grow: 1; /* Allow it to take up space */
    text-align: center; /* Center the text within the flex item */

    &.active {
        text-decoration: underline;
    }
`;

export default NavBar;
