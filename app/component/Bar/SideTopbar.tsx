import React, { useState } from 'react';
import styled from 'styled-components'
import { FaLanguage } from 'react-icons/fa'

const Container = styled.div`
    height: 60px;
    max-width: 220px;
    padding: 5px 20px;
    background: #1D242E;
    display: flex;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
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
export default function Topbar() {
    return(
        <Container>
            <LogoContainer>
                <LogoIcon>🛒</LogoIcon>
                Fadj-ma
            </LogoContainer>
        </Container>
    );
            }