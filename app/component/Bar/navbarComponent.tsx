'use client'

import styled from "styled-components";

const Header = styled.header`
    /* side_nav_bg */
    max-width: 880px;
    max-height: 70px ;
    margin: 0 auto;
    margin-top: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: #1D242E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Divider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
const Title = styled.h3`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    //margin: 2px auto;
    //margin-bottom: 0;
    //margin-top: 5px;
    //padding-bottom: 2px;
    //padding-top: 10px;
`;

const Logo = styled.div`
    display: flex;
    //justify-content: center;
    align-items: center;
`;

const LogoText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
`;

const LogoImg = styled.img`
    //background: url("logo.jpg");
`;


const navbarComponent = () => (
    <Header>
      <Divider>
          <Title>
              Bienvenue chez votre pharmacie
          </Title>
          <Logo>
              <LogoImg src="image.jpg" alt="logo" />
              <LogoText>Fadj-ma</LogoText>
          </Logo>
      </Divider>
    </Header>
)

export default navbarComponent;