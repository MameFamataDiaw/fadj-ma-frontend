'use client'

import styled from "styled-components";

const Header = styled.header`
    max-width: 800px;
    height: 30px ;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
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
    //padding: 5px;
    margin: 20px auto;
`;
const Title = styled.h3`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    //margin: 2px auto;
    margin-bottom: 0;
    //margin-top: 5px;
    //padding-bottom: 2px;
    //padding-top: 10px;

    @media (max-width: 480px){
        font-size: 12px;
        line-height: 20px;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: -10px;
`;

const LogoText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: semi-bold;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;

     @media (max-width: 480px){
        font-size: 12px;
        line-height: 26px;
    }
`;

const LogoImg = styled.img`
    width: 35px;
    height: 35px;

     @media (max-width: 480px){
        width: 25px;
        height: 25px;
    }

`;


const navbarComponent = () => (
    <Header>
      <Divider>
          <Title>
              Bienvenue chez votre pharmacie
          </Title>
          <Logo>
              <LogoImg src="logo-fadj-ma.png" alt="logo" />
              <LogoText>Fadj-ma</LogoText>
          </Logo>
      </Divider>
    </Header>
)

export default navbarComponent;