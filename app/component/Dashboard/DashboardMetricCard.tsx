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
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const MetricCard = styled.div<{ variant?: 'success' | 'warning' | 'info' | 'error' }>`
  background-color: ${props => {
    switch (props.variant) {
        case 'success':
            return '#E6F6F4';
        case 'warning':
            return '#FFF7E6';
        case 'info':
            return '#E6F0FF';
        case 'error':
            return '#FEE2E2';
        default:
            return 'white';
    }
}};
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// const CardContainer = styled.div`
//     display: flex;
//     gap: 20px;
//     margin-bottom: 20px;
// `
const MetricCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;
const MetricCardValue = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
`;
const MetricCardAction = styled.button`
  background-color: transparent;
  border: none;
  color: #4D7CFE;
  font-size: 0.875rem;
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
                <MetricCardValue>Statut de l'inventaire</MetricCardValue>
                <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
            </MetricCard>

            <MetricCard variant="warning">
                <MetricCardTitle>4,800,432 FCFA</MetricCardTitle>
                <MetricCardValue>Revenu : janvier 2022</MetricCardValue>
                <MetricCardAction>Afficher le rapport détaillé</MetricCardAction>
            </MetricCard>

            <MetricCard variant="info">
                <MetricCardTitle>298</MetricCardTitle>
                <MetricCardValue>Médicaments disponibles</MetricCardValue>
                <MetricCardAction>Visiter l'inventaire</MetricCardAction>
            </MetricCard>

            <MetricCard variant="error">
                <MetricCardTitle>1</MetricCardTitle>
                <MetricCardValue>Pénurie de médicaments</MetricCardValue>
                <MetricCardAction>Résoudre maintenant</MetricCardAction>
            </MetricCard>
        </MetricCardGrid>
    );
};

export default DashboardMetricCard;