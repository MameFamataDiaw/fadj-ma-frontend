'use client'
import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import { FaLanguage, FaCaretDown, FaBars } from 'react-icons/fa'

const Container = styled.header`
    display: flex;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

     @media (max-width: 480px){
        // width: auto;
    }
`
const SideContainer = styled.div`
    height: 50px;
    width: 18%;
    padding: 5px 20px;
    background: #1D242E;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;

    @media (max-width: 480px){
        width: 30%;
    }
`

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
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;

const LogoImg = styled.img`
    width: 30px;
    height: 30px;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f7fa;
    padding: 5px 20px;
    //height: 50px;
    width: 80%;

    @media (max-width: 480px){
        max-width: 70%;
        justify-content: center;
    }
`
const SearchContainer = styled.div`
    margin: 0 10px;

    @media (max-width: 480px){
        display: none;
    }
`
const SearchInput = styled.input`
    padding: 8px 15px;
    border-radius: 4PX;
    border: none;
    width: 350px;
    background-color: #E3EBF3;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(29, 36, 46, 0.5);

     @media (max-width: 768px){
        width: 100px;
        margin: 0;
    }
`
const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 200px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D242E;

    @media (max-width: 768px){
        margin-left: auto;
    }

     @media (max-width: 480px){
        display: none;
    }
`;
const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #1D242E;
    align-items: flex-end;

    @media (max-width: 480px){
        display: none;
        alingn-items: left;
        margin-left: auto; 
    }

`;
const Welcome = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const WelcomeIcon = styled.div`
    width: 18px;
    height: 18px;
    background-color: #FED600;
    border-radius: 50%;
`;
const Greeting = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
`;

const DateTimeContainer = styled.div`
    margin-left: 10px;
    color: #8a8a8a;
    font-size: 12px;
`
const DateTime = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    // @media (max-width: 768px){
    //     flex-direction: column;
    // }
`;
const Today = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D242E;
`;
const Separator = styled.div`
    width: 2px;
    height: 2px;
    background-color: #FED600;
`;

const Time = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D242E;
`;

const MenuIcon = styled(FaBars)`
    cursor: pointer;
    align-items: left;
    margin-left: auto;

  @media (min-width: 481px) {
    display: none;
  }
`;

export default function Topbar() {
    const [currentDateTime, setCurrentDateTime] = useState<{ date: string; time: string }>({
        date: '14 janvier 2022',
        time: '22:45:04'
    });

    const updateDateTime = useCallback(() => {
        const now = new Date();
        setCurrentDateTime({
            date: now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
            time: now.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric', second: 'numeric' })
        });
    }, []);

    setInterval(updateDateTime, 1000);

    return(
        <Container>
            <SideContainer>
                <Logo>
                    <LogoImg src="/logo-fadj-ma.png" alt="logo" />
                    <LogoText>Fadj-ma</LogoText>
                </Logo>
            </SideContainer>

            <TopContainer>
                <SearchContainer>
                    <SearchInput type="text" placeholder="Recherchez n'importe quoi ici." />
                </SearchContainer>

                <LanguageContainer>
                    <FaLanguage style={{ marginRight: '5px' }} />
                        <span>Français (France)</span>
                    <FaCaretDown style={{ marginRight: '5px' }} />
                </LanguageContainer>

                <WelcomeContainer>
                    <Welcome>
                        <WelcomeIcon />
                        <Greeting>Bonjour</Greeting>
                    </Welcome>
                    <DateTimeContainer>
                        <DateTime>
                            {/* Date et heure, en production cela peut être géré par une fonction pour afficher la date actuelle */}
                            <Today>{currentDateTime.date}</Today>
                            <Separator />
                            <Time>{currentDateTime.time}</Time>
                        </DateTime>
                    </DateTimeContainer>
                </WelcomeContainer>
                <MenuIcon />
            </TopContainer>
        </Container>
    );
}