import React from 'react';
import styled from 'styled-components';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const StatsSection = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatsSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const DashboardStats: React.FC = () => {
    return (
        <StatsGrid>
            <StatsSection>
                <StatsSectionTitle>Inventaire</StatsSectionTitle>
                <StatItem>
                    <span>Nombre total de médicaments:</span>
                    <span>298</span>
                </StatItem>
                <StatItem>
                    <span>Groupes de médecine:</span>
                    <span>24</span>
                </StatItem>
                <StatItem>
                    <span>Nombre total de fournisseurs:</span>
                    <span>4</span>
                </StatItem>
                <StatItem>
                    <span>Nombre total d'utilisateurs:</span>
                    <span>5</span>
                </StatItem>
            </StatsSection>

            <StatsSection>
                <StatsSectionTitle>Rapport rapide</StatsSectionTitle>
                <StatItem>
                    <span>Quantité de médicaments vendus:</span>
                    <span>70,856</span>
                </StatItem>
                <StatItem>
                    <span>Factures générées:</span>
                    <span>5,288</span>
                </StatItem>
                <StatItem>
                    <span>Nombre total de clients:</span>
                    <span>845</span>
                </StatItem>
                <StatItem>
                    <span>Article fréquemment acheté:</span>
                    <span>Adalimumab</span>
                </StatItem>
            </StatsSection>
        </StatsGrid>
    );
};

export default DashboardStats;