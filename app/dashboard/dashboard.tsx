'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import DashboardMetricCard from "@/app/component/Dashboard/DashboardMetricCard";
import DashboardStats from "../component/Dashboard/DashboardStats";


const Container = styled.div`
    display: flex;
    width: 80%;
    margin-left: 20%;
    height: 100%;
    margin-top: 100px;

    @media (max-width: 480px){
        width: 100%;
        margin-left: 0;
    }
`
const MainContent = styled.div`
    flex: 1;
    background-color: #EDF1F5;
    display: flex;
    flex-direction: column;
    align-items: center;
    // @media (max-width: 768px){
    //     padding-left: 30px;
    //     padding-right: 30px;
    // }
`;
const ContentWrapper = styled.div`
    padding: 1rem 2rem;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 20px;
    }
`

const Title = styled.h2`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    margin-bottom: 0.5rem;

`
const RapportLink = styled.div`
    
    width: 150px;
    height: 20px;
    margin-right: 9px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    text-align: center;
    padding: 10px;
    background: #FFFFFF;
    border: 0.4px solid #000000;
    border-radius: 2px;
`
const SectionTitle = styled.div`
    p{
        font-family: 'Poppins',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #1D242E;
        margin-top: 0;

    }
`;

const Dashboard: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
        <Container>
            {/*<Sidebar />*/}
            <MainContent>
                {/*<Topbar />*/}
                <ContentWrapper>
                    <Header>
                        <SectionTitle>
                            <Title >Tableau de bord</Title>
                            <p>Un aperçu rapide des données de votre pharmacie</p>
                        </SectionTitle>
                        <RapportLink>
                            Telecharger le rapport
                        </RapportLink>
                    </Header>

                    <DashboardMetricCard />

                    <DashboardStats />
                </ContentWrapper>
            </MainContent>
        </Container>
    );
};

export default Dashboard;