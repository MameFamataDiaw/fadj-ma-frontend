'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Topbar from '../component/Bar/Topbar'
import Sidebar from '../component/Bar/Sidebar'
import DashboardMetricCard from "@/app/component/Dashboard/DashboardMetricCard";
import DashboardStats from "../component/Dashboard/DashboardStats";


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
`
const MainContent = styled.div`
    flex: 1;
    background-color: #EDF1F5;
    display: flex;
    flex-direction: column;
`;
const ContentWrapper = styled.div`
    padding: 2rem;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 200px;
    height: 30px;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 1px;
    gap: 10px;
    background: #FFFFFF;
    border: 0.4px solid #000000;
    border-radius: 4px;
    
    span{

        font-family: 'Poppins',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
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
                            <span>Telecharger le rapport</span>
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