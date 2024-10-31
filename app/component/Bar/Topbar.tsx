'use client'
import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import { FaLanguage } from 'react-icons/fa'

// const Container = styled.div`
//     display: flex;
// `
// const SideContainer = styled.div`
//     height: 50px;
//     width: 229px;
//     padding: 5px 20px;
//     background: #1D242E;
//     display: flex;
//     align-items: center;
// `

// Styled Components
const TopbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f7fa;
  padding: 5px 20px;
  height: 50px;
  width: 98%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
    display: flex;
    font-family: 'Poppins',sans-serif;
    //font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
`
const LogoIcon = styled.div`
    font-size: 24px;
    color: #263343;
    margin-right: 10px;
`
const SearchContainer = styled.div`
  flex-grow: 1;
  margin: 0 10px;
`;

const SearchInput = styled.input`
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  background-color: #E3EBF3;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(29, 36, 46, 0.5);
`;

// const TopContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background: #f5f7fa;
//     padding: 5px 20px;
//     height: 50px;
//     width: 1000px;
//     margin-top: 0;
//     box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
// `
// const SearchContainer = styled.div`
//     flex-grow: 1;
//     margin: 0 10px;
// `
// const SearchInput = styled.input`
//     padding: 8px 15px;
//     border-radius: 4PX;
//     border: none;
//     background-color: #E3EBF3;
//     font-family: 'Poppins',sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 18px;
//     color: rgba(29, 36, 46, 0.5);
// `
const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #1D242E;
`;
const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #1D242E;
`;
const Welcome = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
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
        <TopbarContainer>
            <LogoContainer>
                <LogoIcon>🛒</LogoIcon>
                Fadj-ma
            </LogoContainer>

            <SearchContainer>
                <SearchInput type="text" placeholder="Recherchez n'importe quoi ici." />
            </SearchContainer>

            <LanguageContainer>
                <FaLanguage style={{ marginRight: '5px' }} />
                Français (France) ▼
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
        </TopbarContainer>
    );
}