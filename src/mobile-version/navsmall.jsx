import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeroSlider from './hero';

export default function NavSmall({ onContactClick }) {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer(false); // Close the drawer after navigating
    }
  };

  return (
    <>
      <CSSReset />
      <Styles.Wrapper id='Home'>
        <Navbar.Wrapper>
          <Navbar.Logo>JustDiet</Navbar.Logo>

          <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
            <HamburgerButton.Lines />
          </HamburgerButton.Wrapper>

          <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
            <CloseButton onClick={() => toggleDrawer(false)}>X</CloseButton>
            <Navbar.Item onClick={() => scrollToSection('Salads')}>Categories</Navbar.Item>
            <Navbar.Item onClick={() => scrollToSection('Plans')}>Pricing</Navbar.Item>
            <Navbar.Item>Menu</Navbar.Item>
            <Navbar.ContactButton onClick={onContactClick}>Contact Us</Navbar.ContactButton>
          </Navbar.Items>
        </Navbar.Wrapper>
      </Styles.Wrapper>
      <HeroSlider />
    </>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    background-color: #eeeeee;
    height: auto;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 0;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    background-color: #14463a; /* Changed background color to #14463a */
    position: fixed;
    width: 100%;
    justify-content: space-between;
    z-index: 5;

    @media only screen and (max-width: 40em) {
      padding: 1rem;
    }
  `,
  Logo: styled.h1`
    text-align: center;
    margin: 0;
    font-family: "Monument Extended Bold", sans-serif, Verdana;
    padding: 0.5rem;
    flex: 1;
    transition: color 0.3s ease;
    color: antiquewhite; /* Set logo color */
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    justify-content: center; /* Center the menu items */
    align-items: center; /* Center vertically */
    margin-left: auto;

    @media only screen and (max-width: 40em) {
      position: fixed;
      left: 0;
      top: 0;
      height: max-content;
      width: 100%;
      flex-direction: column;
      background-color: #14463a; /* Updated background color */
      color: antiquewhite; /* Updated text color */
      padding: 1rem 0;
      transition: transform 0.3s ease; /* Smooth transition for opening/closing */
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateY(0)` : `translateY(-100%)`};
    }
  `,
  Item: styled.li`
    padding: 0.5rem 1rem; /* Adjust padding for spacing */
    cursor: pointer;
    color: antiquewhite; /* Text color for menu items */

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
      text-align: center; /* Center text in mobile view */
    }
  `,
  ContactButton: styled.button`
    background-color: #14463a; /* Button background color */
    color: antiquewhite; /* Button text color */
    border: 1px solid antiquewhite; /* Optional border */
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-left: 1rem;
    background-color: white;
    color: #14463a;
    border-radius: 2rem;

    &:hover {
      background-color: #f0f0f0; /* Slight hover effect */
    }
  `,
};

const CloseButton = styled.button`
  align-self: flex-end; /* Position the close button at the top right */
  background: none;
  border: none;
  font-size: 2rem; /* Size for the close button */
  color: antiquewhite; /* Color for the close button */
  cursor: pointer;
  margin-bottom: 1rem; /* Space below the close button */
  margin-right: 1rem;

  &:hover {
    color: #f0f0f0; /* Change color on hover */
  }
`;

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    display: block; /* Always show the hamburger button */

    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: antiquewhite; /* Color for hamburger lines */
      position: absolute;
    }

    &:after {
      top: -0.8rem;
    }

    &:before {
      top: 0.8rem;
    }
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;
