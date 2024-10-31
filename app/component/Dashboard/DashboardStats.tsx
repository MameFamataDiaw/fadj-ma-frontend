import React from 'react';
import styled from 'styled-components';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1rem;
    width: 900px;
    height: 30px;
`;

const StatsSection = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatsSectionTitle = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
      font-weight: 500;
      margin-top: 0rem;
`;
const Title = styled.h3` 
    
`
const StatsInfos = styled.span` 
    
`
const CardElements = styled.div` 
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: unset;
`

const StatItem = styled.div`
  display: flex;
    flex-direction: column;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const StatsCard = styled.div` 
    display: flex;
    flex-direction: column;
`


const DashboardStats: React.FC = () => {
    return (
        <StatsGrid>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Inventaire</Title>
                        <StatsInfos>Allez dans configuration </StatsInfos>
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <span>298</span>
                            <span>Nombre total de médicaments:</span>

                        </StatItem>
                        <StatItem>
                            <span>24</span>
                            <span>Groupes de médecine:</span>

                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Rapport rapide</Title>
                        <StatsInfos>Janvier 2022</StatsInfos>
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <span>Quantité de médicaments vendus:</span>
                            <span>70,856</span>
                        </StatItem>
                        <StatItem>
                            <span>Factures générées:</span>
                            <span>5,288</span>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>

            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Ma pharmacie</Title>
                        <StatsInfos>Allez a la gestion des utilisaeurs </StatsInfos>
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <span>Nombre total de fournisseurs:</span>
                            <span>4</span>
                        </StatItem>
                        <StatItem>
                            <span>Nombre total utilisateurs:</span>
                            <span>5</span>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Clents</Title>
                        <StatsInfos>Allez a la page client </StatsInfos>
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <span>Nombre total de clients:</span>
                            <span>845</span>
                        </StatItem>
                        <StatItem>
                            <span>Article fréquemment acheté:</span>
                            <span>Adalimumab</span>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
        </StatsGrid>
    );
};

export default DashboardStats;