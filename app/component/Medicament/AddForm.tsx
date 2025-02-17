'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from "next/navigation";
import { FaPlus } from 'react-icons/fa';

interface Medicament {
    nom: string;
    description: string;
    dosage: string;
    prix: number;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e0e0e0;
    background-color: #FFFFFF;
    width: 600px;
    height: 500px;
    margin: 50px auto;

    @media (max-width: 768px){
        width: 450px;
        height: 450px;
    }
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #EDF1F5;
    width: 600px;
    height: 30%;
    span{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 600;
    }

    @media (max-width: 768px){
        width: 450px;
        height: 25%;
    }
`;

const DetailsContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    @media (max-width: 768px){
        height: 75%px;

    }
`

const InputRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
`;

const InputGroup = styled.div`
    // flex: 1 1 45%;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    position: relative;
    padding-bottom: 10px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
`

const Input = styled.input`
    // flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #969696;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    color: #808489;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 420px;
    margin-top: 10px;
`;

const Button = styled.button`
    width: 48%;
    padding: 10px;
    cursor: pointer;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;

    &:first-child {
        background: none;
        border: 1px solid #969696;
        border-radius: 12px;
    }

    &:last-child {
        background: #A7DBF5;
        border: 1px solid #A7DBF5;
        border-radius: 12px;
    }
`;

const TextDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    text-align:  left;
`
const Title = styled.h3`
    position: relative;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 1px;
`;

const Subtitle = styled.p`
    //font-size: 12px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #808489;
    margin-top: 1px;
    margin-bottom: 10px;
`;
const PromptContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const PromptMessage = styled.div`
    text-align: center;
    padding: 20px;

    h3 {
        margin-bottom: 10px;
        color: #1D242E;
    }

    p {
        color: #808489;
        margin-bottom: 20px;
    }
`;

const AddForm: React.FC = () => {
    const [medicament, setMedicament] = useState<Medicament>({
        nom: '',
        description: '',
        dosage: '',
        prix: 0,
    });

    const router = useRouter();
    const [showPrompt, setShowPrompt] = useState(false);
    const [newMedicamentId, setNewMedicamentId] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login"); // Redirige si l'utilisateur n'est pas authentifié
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMedicament({ ...medicament, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/medicaments`, medicament);
            // alert('Médicament ajouté avec succès !');
            // setMedicament({
            //     nom: '',
            //     description: '',
            //     dosage: '',
            //     prix: 0,
            // });
            setNewMedicamentId(response.data._id);
            setShowPrompt(true);
        } catch (error) {
            console.error("Erreur lors de l'ajout du médicament :", error);
            alert('Erreur lors de l’ajout du médicament.');
        }
    };

    return (
        <Container>
            {!showPrompt ? (
                <form onSubmit={handleSubmit}>

                    <ImageContainer>
                        <FaPlus style={{ borderRadius: "50%", backgroundColor: "#D9D9D9", padding:"10px", marginBottom: "10px"}} />
                        <span>Ajouter une image</span>
                    </ImageContainer>

                    <DetailsContainer>
                        <TextDetails>
                            <Title>Obligatoire</Title>
                            <Subtitle onClick={() => newMedicamentId && router.push(`/medicament/details/${newMedicamentId}`)}>
                                Donnez plus de détails possible
                            </Subtitle>
                        </TextDetails>

                        <InputRow>
                            <InputGroup>
                                <Label>Nom du médicament</Label>
                                <Input type="text" name="nom" value={medicament.nom} onChange={handleChange} placeholder='Nom du médicament' required />
                            </InputGroup>
                            <InputGroup>
                                <Label>Description</Label>
                                <Input type="text" name="description" value={medicament.description} onChange={handleChange} placeholder='Description' required />
                            </InputGroup>
                        </InputRow>

                        <InputRow>
                            <InputGroup>
                                <Label>Dosage</Label>
                                <Input type="text" name="dosage" value={medicament.dosage} onChange={handleChange} placeholder='Dosage' required />
                            </InputGroup>
                            <InputGroup>
                                <Label>Prix</Label>
                                <Input type="text" name="prix" value={medicament.prix} onChange={handleChange} placeholder='Prix' required />
                            </InputGroup>
                        </InputRow>

                        <ButtonContainer>
                            {/* <Button type="reset" onClick={() => setMedicament({ nom: '', description: '', dosage: '', prix: 0 })}>
                                Annuler
                            </Button> */}
                            <Button 
                                type="button" 
                                onClick={() => {
                                    // if (window.confirm("Êtes-vous sûr de vouloir annuler ?")) {
                                        router.push('/medicament/list');
                                    // }
                                }}
                            >
                                Annuler
                            </Button>
                            <Button type="submit">Ajouter</Button>
                        </ButtonContainer>
                    </DetailsContainer>

                </form>
            ) : (
                <PromptContainer>
                    <PromptMessage>
                        <h3>Médicament ajouté avec succès !</h3>
                        <p>Voulez-vous ajouter plus de détails maintenant ?</p>
                        <ButtonContainer>
                            <Button onClick={() => router.push(`/medicament/details/add/${newMedicamentId}`)}>
                                Ajouter plus de détails
                            </Button>
                            <Button onClick={() => router.push('/medicaments')}>
                                Plus tard
                            </Button>
                        </ButtonContainer>
                    </PromptMessage>
                </PromptContainer>
            )}
        </Container>
    );
};
export default AddForm;