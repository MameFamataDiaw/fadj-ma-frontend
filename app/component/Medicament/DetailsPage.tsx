'use client'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter, useParams } from 'next/navigation';
import {router} from "next/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Container = styled.main`
    padding: 20px 50px;
    max-width: 100%;
    margin: 0;
    margin-top: 50px;
    background: #EDF1F5;
`
const Header = styled.h2`
   display: flex;
`
const Medic = styled.span`

    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const Alldetails = styled.span`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    flex: none;
    order: 2;
    flex-grow: 0;
`
const SectionTitle = styled.h3`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1D242E;
    margin-top: 20px;
`
const MedicationTitle = styled.h1`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
    /* or 75% */
    display: flex;
    align-items: center;

    color: #1D242E;
    margin-top: 10px;
`
const ImageContainer = styled.div`
display: flex;
        width: 274px;
        height: 308px;
        padding-top: 20px;
//     float: left;
//     margin-right: 20px;
`
const MedicationImage = styled.img`
    display: block;
    width: 200px;
    height: 240px;
    margin-right: 100px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`
const InfoImage = styled.div` 
    display: flex;
`
const InfoTexts = styled.div` 
    // display: flex;
    // flex-direction: column;
`
const MedicationInfo = styled.div` 
    // margin: auto;
    display: flex;
    align-items: center;
    justify-content: left;
`
const InfoText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #1D242E;
    margin: 8px 0;
`;

const DescriptionText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #1D242E;
  margin-top: 10px;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  color: #888;
  padding: 20px;
  border-top: 1px solid #ddd;
  margin-top: 20px;
`;

interface MedicationDetails {
    nom: string;
    composition: string;
    fabricant: string;
    typeCons: string;
    dateExp: string;
    description: string;
    dosage: string;
    ingredients: string;
    effets: string;
    formePharma: string;
}

const DetailsPage: React.FC = () => {
    const [medicament, setMedicament] = useState<MedicationDetails | null>(null);
    const router = useRouter();
    const params = useParams();
    const medicamentId = params?.id as string;

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login"); // Redirige si l'utilisateur n'est pas authentifié
        }
    }, []);

    useEffect(() => {
        const fetchMedicamentDetails = async () => {
            if (medicamentId) {
                try {
                    const response = await axios.get(`http://localhost:3001/api/medicaments/${medicamentId}`);
                    setMedicament(response.data);
                } catch (error) {
                    console.error("Erreur lors de la récupération des détails du médicament :", error);
                }
            }
        };
        fetchMedicamentDetails();
    }, [medicamentId]);

    if (!medicament) return <p>Chargement des détails...</p>;

    return (
        <Container>
            <Header><Medic>Medicaments <FaChevronRight style={{ fontSize: "10px", color: "#1D242E", paddingTop: "9px", left: "10px"}} /></Medic>  <Alldetails>Tous les details</Alldetails></Header>
            <MedicationInfo>
                {/* <InfoImage> */}
                <FaChevronLeft style={{ fontSize: "10px", color: "#1D242E", paddingRight: "100px"}} />
                {/* <ImageContainer> */}
                    <MedicationImage src="/medicament.png" alt="Image du medicament" />
                {/* </ImageContainer> */}
                <FaChevronRight style={{ fontSize: "10px", color: "#1D242E", paddingRight: "100px"}} />
                {/* </InfoImage> */}
                <InfoTexts>
                    <MedicationTitle>{medicament.nom}</MedicationTitle>
                    <SectionTitle>Composition</SectionTitle>
                    <InfoText>{medicament.composition}</InfoText>

                    <SectionTitle>Fabricant/Commercant</SectionTitle>
                    <InfoText>{medicament.fabricant}</InfoText>

                    <SectionTitle>Type de consommation</SectionTitle>
                    <InfoText>{medicament.typeCons}</InfoText>

                    <SectionTitle>Date expiration</SectionTitle>
                    <InfoText>{new Date(medicament.dateExp).toLocaleDateString()}</InfoText>
                </InfoTexts>
            </MedicationInfo>

            <SectionTitle>Description :</SectionTitle>
            <DescriptionText>{medicament.description}</DescriptionText>

            <SectionTitle>Dosage et posologie</SectionTitle>
            <DescriptionText>{medicament.dosage}</DescriptionText>

            <SectionTitle>Ingrédients actifs</SectionTitle>
            <DescriptionText>{medicament.ingredients}</DescriptionText>

            <SectionTitle>Effets secondaires</SectionTitle>
            <DescriptionText>{medicament.effets}</DescriptionText>

            <SectionTitle>Forme pharmaceutique</SectionTitle>
            <InfoText>{medicament.formePharma}</InfoText>

            <Footer>
               <p>Propulsé par Fadj-Ma © 2024 • Version 1.0</p>
            </Footer>
        </Container>
    );
};
export default DetailsPage;