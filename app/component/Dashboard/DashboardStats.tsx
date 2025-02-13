import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaAngleDoubleRight} from "react-icons/fa";

const StatsGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    // margin-bottom: 1rem;
    
    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const StatsSection = styled.div`
    height: 100%;
    background-color: white;
    border-radius: 3px;
//  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 450px;

    @media (max-width: 768px){
       width: 380px;
    }

    @media (max-width: 480px){
        width: 350px;
    }
`;

const StatsCard = styled.div` 
    // display: flex;
    // flex-direction: column;
    // width: 100%;
    // border: 1px solid #566272;
    // padding: 1.5rem;
`

const StatsSectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 10px;
    height: 10%;
    border: 1px solid #566272;
    padding: 0.5rem 1rem;
`;
const Title = styled.span` 
    font-size: 15px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`
const StatsInfos = styled.span` 
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
`
const CardElements = styled.div` 
    //display: grid;
    //grid-template-columns: repeat(2, 1fr);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    // text-align: unset;
    height: 90%;
    border: 1px solid #566272;
    padding: 1.5rem 1rem;
`

const StatItem = styled.div`
  display: flex;
    flex-direction: column;
//   justify-content: space-between;
//   font-size: 0.875rem;
//   margin-bottom: 0.5rem;
`;


const Nombre = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
`
const Elements = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
`

const DashboardStats: React.FC = () => {
    return (
        <StatsGrid>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Inventaire</Title>
                        <StatsInfos>Allez dans configuration <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} /> </StatsInfos>
                        
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <Nombre>298</Nombre>
                            <Elements>Nombre total de médicaments</Elements>

                        </StatItem>
                        <StatItem>
                            <Nombre>24</Nombre>
                            <Elements>Groupes de médecine</Elements>

                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Rapport rapide</Title>
                        <StatsInfos>Janvier 2022<FaChevronDown style={{ fontSize: "10px", color: "#1D242E", paddingLeft: "10px" }} /></StatsInfos>
                        
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <Nombre>70.856</Nombre>
                            <Elements>Quantité de médicaments vendus</Elements>
                        </StatItem>
                        <StatItem>
                            <Nombre>5.288</Nombre>
                            <Elements>Factures générées</Elements>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>

            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Ma pharmacie</Title>
                        <StatsInfos>Allez a la gestion des utilisaeurs <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} /> </StatsInfos>
                        
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                            <Nombre>4</Nombre>
                            <Elements>Nombre total de fournisseurs</Elements>
                        </StatItem>
                        <StatItem>
                            <Nombre>5</Nombre>
                            <Elements>Nombre total utilisateurs</Elements>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
            <StatsSection>
                <StatsCard>
                    <StatsSectionTitle>
                        <Title>Clents</Title>
                        <StatsInfos>Allez a la page client <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} /> </StatsInfos>
                        
                    </StatsSectionTitle>
                    <CardElements>
                        <StatItem>
                        <Nombre>845</Nombre>
                            <Elements>Nombre total de clients</Elements>
                        </StatItem>
                        <StatItem>
                        <Nombre>Adalimumab</Nombre>
                            <Elements>Article fréquemment acheté</Elements>
                        </StatItem>
                    </CardElements>
                </StatsCard>
            </StatsSection>
        </StatsGrid>
    );
};

export default DashboardStats;