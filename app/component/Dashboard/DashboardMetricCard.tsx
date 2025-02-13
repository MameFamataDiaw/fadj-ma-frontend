'use client'
import React from 'react';
import styled from "styled-components";
import {  FaShieldAlt,FaBriefcaseMedical,FaMoneyBillWave,FaExclamationTriangle,FaChevronDown, FaAngleDoubleRight } from "react-icons/fa";

// interface CardProps {
//     $bgColor?: string;
//     color?: string;
// }

const MetricCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    @media (max-width: 480px){
        // grid-template-columns: 1fr;
        align-items: center;
    }

`;

const MetricCard = styled.div`
    background: #FFFFFF;
    border-radius: 4px;
    width: 200px;
    height: 130px;
    box-sizing: border-box;
    // padding: 1.5rem;
    // display: flex;
    // flex-direction: column;
    // ;
    // 
   text-align: center;

    @media (max-width: 768px){
        align-items: center;
        justify-content: center;
        width: 170px;
        height: 120px;
    }

    @media (max-width: 480px){
        align-items: center;
        justify-content: center;
        width: 160px;
    }
`;

const CardInfo = styled.div<{ variant?: 'success' | 'warning' | 'info' | 'error' }>` 
     border: ${props => {
        switch (props.variant) {
            case 'success':
                return '1px solid #01A768';
            case 'warning':
                return '1px solid #FED600';
            case 'info':
                return '1px solid #03A9F5';
            case 'error':
                return '1px solid #F0483E';
            default:
                return 'none';
        }
    }};
    height: 80%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    @media (max-width: 768px){
        width: 170px;
    }

    @media (max-width: 480px){
        width: 160px;
    }
`
const CardAction = styled.div<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
     border: ${props => {
        switch (props.variant) {
            case 'success':
                return '1px solid #01A768';
            case 'warning':
                return '1px solid #FED600';
            case 'info':
                return '1px solid #03A9F5';
            case 'error':
                return '1px solid #F0483E';
            default:
        }
    }};     
    background: ${props => {
        switch (props.variant) {
            case 'success':
                return 'rgba(1, 167, 104, 0.3)';
            case 'warning':
                return 'rgba(254, 214, 0, 0.3)';
            case 'info':
                return 'rgba(3, 169, 245, 0.3)';
            case 'error':
                return 'rgba(240, 72, 62, 0.3)';
            default:
                return 'white';
        }
    }};
    height: 20%;
    width: 200px;
    
    @media (max-width: 768px){
        width: 170px;
    }

    @media (max-width: 480px){
        width: 160px;
    }
`
// const CardContainer = styled.div`
//     display: flex;
//     gap: 20px;
//     margin-bottom: 20px;
// `

const CardIcon = styled.div`

`

const MetricCardTitle = styled.span`

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #1D242E;
`;
const MetricCardValue = styled.span`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #1D242E;
`;
const MetricCardAction = styled.button`
  background-color: transparent;
  border: none;
  color: #1D242E;
  text-align:center;
    padding-top: 7px;
//   padding-bottom: 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;



const DashboardMetricCard: React.FC = () => {
    return (
        <MetricCardGrid>
            <MetricCard >
                <CardInfo variant="success">
                    {/* <CardIcon> */}
                    {/* <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_27_47)">
                            <path d="M16.1875 20.0417H12.3334V15.4167H16.1875V11.5625H20.8125V15.4167H24.6667V20.0417H20.8125V23.8959H16.1875V20.0417ZM18.5 3.08337L6.16669 7.70837V17.0971C6.16669 24.8825 11.4238 32.1438 18.5 33.9167C25.5763 32.1438 30.8333 24.8825 30.8333 17.0971V7.70837L18.5 3.08337ZM27.75 17.0971C27.75 23.2638 23.8188 28.968 18.5 30.71C13.1813 28.968 9.25002 23.2792 9.25002 17.0971V9.85129L18.5 6.38254L27.75 9.85129V17.0971Z" fill="#01A768" />
                        </g>
                        <defs>
                            <clipPath id="clip0_27_47">
                                <rect width="37" height="37" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> */}

                    {/* </CardIcon> */}
                    <FaShieldAlt style={{ color: "#01A768", backgroundColor: "white", padding: "5px", top: "7px" }} />

                    <MetricCardTitle>Bien</MetricCardTitle>
                    <MetricCardValue>Statut inventaire</MetricCardValue>
                </CardInfo>

                <CardAction variant="success">

                    <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    {/* <FaChevronRight style={{ fontSize: "10px", color: "#1D242E" }} /> */}
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />

                </CardAction>
            </MetricCard>

            <MetricCard >

                <CardInfo variant="warning">
                    {/* <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_27_26)">
                            <path d="M29.2916 21.5833V9.24996C29.2916 7.55413 27.9041 6.16663 26.2083 6.16663H4.62496C2.92913 6.16663 1.54163 7.55413 1.54163 9.24996V21.5833C1.54163 23.2791 2.92913 24.6666 4.62496 24.6666H26.2083C27.9041 24.6666 29.2916 23.2791 29.2916 21.5833ZM26.2083 21.5833H4.62496V9.24996H26.2083V21.5833ZM15.4166 10.7916C12.8575 10.7916 10.7916 12.8575 10.7916 15.4166C10.7916 17.9758 12.8575 20.0416 15.4166 20.0416C17.9758 20.0416 20.0416 17.9758 20.0416 15.4166C20.0416 12.8575 17.9758 10.7916 15.4166 10.7916ZM35.4583 10.7916V27.75C35.4583 29.4458 34.0708 30.8333 32.375 30.8333H6.16663C6.16663 29.2916 6.16663 29.4458 6.16663 27.75H32.375V10.7916C34.0708 10.7916 33.9166 10.7916 35.4583 10.7916Z" fill="#FED600" />
                        </g>
                        <defs>
                            <clipPath id="clip0_27_26">
                                <rect width="37" height="37" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> */}
                    <FaMoneyBillWave style={{ color: "#FED600", backgroundColor: "white", padding: "5px" }} />
                    <MetricCardTitle>4,800,432 FCFA</MetricCardTitle>
                    <MetricCardValue>Revenu : janvier 2022 <FaChevronDown style={{ fontSize: "10px", color: "#1D242E"}} /> </MetricCardValue>
                    
                </CardInfo>

                <CardAction variant="warning">
                    <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />
                </CardAction>

            </MetricCard>

            <MetricCard >

                <CardInfo variant="info">
                    {/* <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_27_65)">
                            <path d="M30.8334 9.25004H24.6667V6.16671C24.6667 4.47087 23.2792 3.08337 21.5834 3.08337H15.4167C13.7209 3.08337 12.3334 4.47087 12.3334 6.16671V9.25004H6.16671C4.47087 9.25004 3.08337 10.6375 3.08337 12.3334V30.8334C3.08337 32.5292 4.47087 33.9167 6.16671 33.9167H30.8334C32.5292 33.9167 33.9167 32.5292 33.9167 30.8334V12.3334C33.9167 10.6375 32.5292 9.25004 30.8334 9.25004ZM15.4167 6.16671H21.5834V9.25004H15.4167V6.16671ZM30.8334 30.8334H6.16671V12.3334H30.8334V30.8334Z" fill="#03A9F5" />
                            <path d="M20.0417 15.4167H16.9584V20.0417H12.3334V23.1251H16.9584V27.7501H20.0417V23.1251H24.6667V20.0417H20.0417V15.4167Z" fill="#03A9F5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_27_65">
                                <rect width="37" height="37" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> */}

                    <FaBriefcaseMedical style={{ color: "#03A9F5", backgroundColor: "white", padding: "5px" }} />
                    <MetricCardTitle>298</MetricCardTitle>
                    <MetricCardValue>Médicaments disponibles</MetricCardValue>

                </CardInfo>


                <CardAction variant="info">
                    <MetricCardAction>Visiter inventaire</MetricCardAction>
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />
                </CardAction>

            </MetricCard>

            <MetricCard >

                <CardInfo variant="error">
                    {/* <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 9.23462L30.1087 29.2917H6.89121L18.5 9.23462ZM18.5 3.08337L1.54163 32.375H35.4583L18.5 3.08337ZM20.0416 24.6667H16.9583V27.75H20.0416V24.6667ZM20.0416 15.4167H16.9583V21.5834H20.0416V15.4167Z" fill="#F0483E" />
                    </svg> */}
                    <FaExclamationTriangle style={{ color: "#F0483E", backgroundColor: "white", padding: "5px", }} />
                    <MetricCardTitle>1</MetricCardTitle>
                    <MetricCardValue>Pénurie de médicaments</MetricCardValue>
                </CardInfo>

                <CardAction variant="error">
                    <MetricCardAction>Resoudre maintenant</MetricCardAction>
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />
                </CardAction>

            </MetricCard>
        </MetricCardGrid>
    );
}; <CardAction>

</CardAction>

export default DashboardMetricCard;