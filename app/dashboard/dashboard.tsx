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
    height: 100vh;
`
const MainContent = styled.div`
    flex: 1;
    background-color: #f5f6fa;
    display: flex;
    flex-direction: column;
`;
const ContentWrapper = styled.div`
    padding: 2rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
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
            <Sidebar />
            <MainContent>
                <Topbar />
                <ContentWrapper>
                    <SectionTitle>Tableau de bord</SectionTitle>
                    <p>Un aperçu rapide des données de votre pharmacie</p>

                    <DashboardMetricCard />

                    <SectionTitle>Statistiques</SectionTitle>
                    <DashboardStats />
                </ContentWrapper>
            </MainContent>
        </Container>
    );
};

export default Dashboard;