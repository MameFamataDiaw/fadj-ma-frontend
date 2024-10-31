'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useRouter} from "next/navigation";
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
    //padding: 40px;
    border: 1px solid #e0e0e0;
    background-color: #FFFFFF;
    width: 623px;
    height: 554px;
    margin: 100px auto;
`
// const ImageUpload = styled.img`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 20px;
    
    //img{
    //    width: 80%;
    //    height: 80px;
    //    border-radius: 50%;
    //    margin-right: 10px;
    //    object-fit: cover;
    //}
// `;

// const ImagePreview = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   margin-bottom: 10px;
//   object-fit: cover;
// `;

// const Placeholder = styled.div`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   background: #e0e0e0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 24px;
//   color: #888;
//   margin-bottom: 10px;
// `;

const InputRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    margin-bottom: 10px;
`;
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
const InputGroup = styled.div`
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    box-sizing: border-box;
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #969696;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    //font-size: 14px;
    line-height: 21px;
    color: #808489;
`;

// const TextArea = styled.textarea`
//     width: 100%;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     resize: none;
//     margin-bottom: 20px;
// `;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 420px;
`;

const Button = styled.button`
    box-sizing: border-box;
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

    // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files && e.target.files[0];
    //     if (file) {
    //         setImage(URL.createObjectURL(file));
    //     }
    // };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMedicament({ ...medicament, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Données envoyées :", medicament);
        try {
            const response = await axios.post('http://localhost:3000/api/medicaments', medicament);
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

                    <TextDetails>
                        <Title>Informations de base</Title>
                        <Subtitle onClick={() => newMedicamentId && router.push(`/medicament/details/${newMedicamentId}`)}>
                            Donnez plus de détails possible
                        </Subtitle>
                    </TextDetails>

                <InputRow>
                    <InputGroup>
                        <Label>Nom du médicament</Label>
                        <Input type="text" name="nom" value={medicament.nom} onChange={handleChange} required />
                    </InputGroup>
                    <InputGroup>
                        <Label>Description</Label>
                        <Input type="text" name="description" value={medicament.description} onChange={handleChange} required />
                    </InputGroup>
                </InputRow>

                <InputRow>
                    <InputGroup>
                        <Label>Dosage</Label>
                        <Input type="text" name="dosage" value={medicament.dosage} onChange={handleChange} required />
                    </InputGroup>
                    <InputGroup>
                        <Label>Prix</Label>
                        <Input type="text" name="prix" value={medicament.prix} onChange={handleChange} required />
                    </InputGroup>
                </InputRow>

                <ButtonContainer>
                    <Button type="button" onClick={() => setMedicament({ nom: '', description: '', dosage: '', prix: 0 })}>
                        Annuler
                    </Button>
                    <Button type="submit">Ajouter</Button>
                </ButtonContainer>
            </form>
            ) : (
                <PromptContainer>
                    <PromptMessage>
                        <h3>Médicament ajouté avec succès !</h3>
                        <p>Voulez-vous ajouter plus de détails maintenant ?</p>
                        <ButtonContainer>
                            <Button onClick={() => router.push(`/medicament/details/${newMedicamentId}`)}>
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