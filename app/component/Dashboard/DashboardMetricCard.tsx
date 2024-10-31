'use client'
import React from 'react';
import styled from "styled-components";

// interface CardProps {
//     $bgColor?: string;
//     color?: string;
// }

const MetricCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom:1rem;
`;

const MetricCard = styled.div<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
  background: #FFFFFF;
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
    box-shadow: ${props => (props.variant === 'success' ? '0px 3px 10px 2px rgba(29, 36, 46, 0.06)' : 'none')};
    border-radius: 4px;
    width: 190px;
    height: 130px;
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   text-align: center;
`;

const CardItems = styled.div<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
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
    box-sizing: border-box;
    width: 212px;
    height: 130px;
    background: #FFFFFF;
    border-radius: 4px 4px 0px 0px;
`
const CardAction = styled.a<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
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
`
// const CardContainer = styled.div`
//     display: flex;
//     gap: 20px;
//     margin-bottom: 20px;
// `
const MetricCardTitle = styled.h3`

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height, or 110% */
    text-align: center;

    color: #1D242E;
`;
const MetricCardValue = styled.div`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #1D242E;
`;
const MetricCardAction = styled.button`
  background-color: transparent;
  border: none;
  color: #4D7CFE;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

// const Card = styled.div<CardProps>`
//     background-color: ${(props) => props.$bgColor || "#fff"};
//     color: ${(props) => props.color || "#000"};
//     padding: 20px;
//     border-radius: 10px;
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//
//     h3 {
//         margin: 0;
//     }
// `

const DashboardMetricCard: React.FC = () => {
    return (
        <MetricCardGrid>
            <MetricCard variant="success">
                    <MetricCardTitle>Bien</MetricCardTitle>
                    <MetricCardValue>Statut inventaire</MetricCardValue>

                    <CardAction>
                        <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    </CardAction>
            </MetricCard>

            <MetricCard variant="warning">

                   <MetricCardTitle>4,800,432 FCFA</MetricCardTitle>
                   <MetricCardValue>Revenu : janvier 2022</MetricCardValue>

                    <CardAction>
                        <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
                    </CardAction>

            </MetricCard>

            <MetricCard variant="info">

                    <MetricCardTitle>298</MetricCardTitle>
                    <MetricCardValue>Médicaments disponibles</MetricCardValue>


                   <CardAction>
                       <MetricCardAction>Visiter inventaire</MetricCardAction>
                   </CardAction>

            </MetricCard>

            <MetricCard variant="error">

                    <MetricCardTitle>1</MetricCardTitle>
                    <MetricCardValue>Pénurie de médicaments</MetricCardValue>

                    <CardAction>
                        <MetricCardAction>Resoudre maintenant</MetricCardAction>
                    </CardAction>

            </MetricCard>
        </MetricCardGrid>
    );
};<CardAction>

</CardAction>

export default DashboardMetricCard;