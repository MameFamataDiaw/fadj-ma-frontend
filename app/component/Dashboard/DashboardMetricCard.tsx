'use client'
import React from 'react';
import styled from "styled-components";
import { FaChevronDown, FaAngleDoubleRight } from "react-icons/fa";
import Image from 'next/image';

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

// const Image = styled.image`
//     padding: 5px;
// `

const DashboardMetricCard: React.FC = () => {
    return (
        <MetricCardGrid>
            <MetricCard >
                <CardInfo variant="success">
                    {/* <FaShieldAlt style={{ color: "#01A768", backgroundColor: "white", padding: "5px", top: "7px" }} /> */}
                    <Image src="/image.png"
                        alt="Profile"
                        width={24}  
                        height={30} 
                        style={{ objectFit: 'cover', padding: '5px' }}
                        priority
                    />
                    <MetricCardTitle>Bien</MetricCardTitle>
                    <MetricCardValue>Statut inventaire</MetricCardValue>
                </CardInfo>

                <CardAction variant="success">
                    <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />
                </CardAction>
            </MetricCard>

            <MetricCard >
                <CardInfo variant="warning">
                    {/* <FaMoneyBillWave style={{ color: "#FED600", backgroundColor: "white", padding: "5px" }} /> */}
                    <Image src="/Vector.png"
                        alt="Profile"
                        width={33}
                        height={24}
                        style={{ objectFit: 'cover', padding: '5px' }}
                        priority
                    />
                    <MetricCardTitle>4,800,432 FCFA</MetricCardTitle>
                    <MetricCardValue>Revenu : janvier 2022 <FaChevronDown style={{ fontSize: "10px", color: "#1D242E" }} /> </MetricCardValue>
                </CardInfo>

                <CardAction variant="warning">
                    <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} />
                </CardAction>
            </MetricCard>

            <MetricCard >
                <CardInfo variant="info">
                    {/* <FaBriefcaseMedical style={{ color: "#03A9F5", backgroundColor: "white", padding: "5px" }} /> */}
                    <Image src="/Group.png"
                        alt="Profile"
                        width={30}  // Valeur entière
                        height={30} // Valeur entière
                        style={{ objectFit: 'cover', padding: '5px' }}
                        priority
                    />
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
                    {/* <FaExclamationTriangle style={{ color: "#F0483E", backgroundColor: "white", padding: "5px", }} /> */}
                    <Image src="/Vector (1).png"
                        alt="Profile"
                        width={33}  // Valeur entière
                        height={29} // Valeur entière
                        style={{ objectFit: 'cover', padding: '5px' }}
                        priority
                    />
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