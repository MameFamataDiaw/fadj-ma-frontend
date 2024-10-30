'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

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
const ImageUpload = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
    //img{
    //    width: 80%;
    //    height: 80px;
    //    border-radius: 50%;
    //    margin-right: 10px;
    //    object-fit: cover;
    //}
`;

const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #888;
  margin-bottom: 10px;
`;

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

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    margin-bottom: 20px;
`;

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

const AddForm = () => {
    const [medicationName, setMedicationName] = useState('');
    const [description, setDescription] = useState('');
    const [dosage, setDosage] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<string | null>(null); // Mise à jour du type] = useState(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique pour envoyer les données du formulaire
    };

    return (
        <Container>
            {/*<ImageUpload>*/}
            {/*    {image ? (*/}
            {/*        <ImagePreview src={image} alt="Aperçu du médicament" />*/}
            {/*    ) : (*/}
            {/*        <Placeholder>+</Placeholder>*/}
            {/*    )}*/}
            {/*    <label htmlFor="image-upload">Ajouter une image</label>*/}
            {/*    <input type="file" id="image-upload" style={{ display: 'none' }} onChange={handleImageUpload}/>*/}
            {/*</ImageUpload>*/}

            <TextDetails>
                <Title>Obligatoire</Title>
                <Subtitle>Donnez plus de détails possible</Subtitle>
            </TextDetails>

            <InputRow>
                <InputGroup>
                    <Label>Nom du médicament</Label>
                    <Input
                        type="text"
                        placeholder="Nom du médicament"
                        value={medicationName}
                        onChange={(e) => setMedicationName(e.target.value)}
                    />
                </InputGroup>
                <InputGroup>
                    <Label>Description</Label>
                    <Input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </InputGroup>
            </InputRow>

            <InputRow>
               <InputGroup>
                   <Label>Dosage</Label>
                   <Input
                       type="text"
                       placeholder="Dosage"
                       value={dosage}
                       onChange={(e) => setDosage(e.target.value)}
                   />
               </InputGroup>
                <InputGroup>
                    <Label>Prix</Label>
                    <Input
                        type="text"
                        placeholder="Prix"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </InputGroup>
            </InputRow>

            <ButtonContainer>
                <Button onClick={() => {}}>Annuler</Button>
                <Button onClick={handleSubmit}>Enregistrer</Button>
            </ButtonContainer>
        </Container>
    );
};
export default AddForm;