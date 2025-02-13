'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import styled from "styled-components";

interface DetailedMedicamentInfo {
    composition?: string;
    fabricant?: string;
    typeCons?: string;
    dateExp?: Date;
    ingredients?: string;
    effets?: string;
    formePharma?: string;
    groupe?: string;
    stock?: number;
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

const MedicamentDetailsForm: React.FC<{ medicamentId: string }> = ({ medicamentId }) => {
    const [details, setDetails] = useState<DetailedMedicamentInfo>({});
    const [groupes, setGroupes] = useState<{_id: string; nomGroupe: string }[]>([]);
    const [isNewGroupe, setIsNewGroupe] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const fetchGroupes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/groupes');
                setGroupes(response.data);
            } catch (error) {
                console.error("Erreur lors de la recuperation des groupes :", error);
            }
        };
        fetchGroupes();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDetailsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Mise à jour du médicament avec les détails additionnels
            await axios.patch(`http://localhost:3001/api/medicaments/${medicamentId}`, details);
            alert('Détails ajoutés avec succès !');
            router.push('/medicament/list'); // Redirection vers la liste des médicaments
        } catch (error) {
            console.error("Erreur lors de l'ajout des détails :", error);
            alert("Erreur lors de l'ajout des détails.");
        }
    };

    return (
        <Container>
            <form onSubmit={handleDetailsSubmit}>
                <TextDetails>
                    <Title>Informations détaillées</Title>
                    <Subtitle>Ces informations peuvent être ajoutées ultérieurement</Subtitle>
                </TextDetails>
                <InputRow>
                    <InputGroup>
                        <Label>Composition</Label>
                        <Input
                            type="text"
                            name="composition"
                            value={details.composition || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Fabricant</Label>
                        <Input
                            type="text"
                            name="fabricant"
                            value={details.fabricant || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <InputGroup>
                        <Label>Type de conservation</Label>
                        <Input
                            type="text"
                            name="typeCons"
                            value={details.typeCons || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Date d'expiration</Label>
                        <Input
                            type="date"
                            name="dateExp"
                            value={details.dateExp?.toString() || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <InputGroup>
                        <Label>Ingrédients</Label>
                        <Input
                            type="text"
                            name="ingredients"
                            value={details.ingredients || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Effets secondaires</Label>
                        <Input
                            type="text"
                            name="effets"
                            value={details.effets || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <InputGroup>
                        <Label>Forme pharmaceutique</Label>
                        <Input
                            type="text"
                            name="formePharma"
                            value={details.formePharma || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Stock</Label>
                        <Input
                            type="number"
                            name="stock"
                            value={details.stock || ''}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Groupe</Label>
                        <select
                            name="groupe"
                            value={isNewGroupe ? '' : details.groupe || ''}
                            onChange={(e) => {
                                if (e.target.value === 'new') {
                                    setIsNewGroupe(true);
                                    setDetails(prev => ({ ...prev, groupe: '' }));
                                } else {
                                    setIsNewGroupe(false);
                                    setDetails(prev => ({ ...prev, groupe: e.target.value }));
                                }
                            }}
                        >
                            <option value="">Sélectionnez un groupe</option>
                            {groupes.map((groupe) => (
                                <option key={groupe._id} value={groupe._id}>{groupe.nomGroupe}</option>
                            ))}
                            <option value="new">Créer un nouveau groupe</option>
                        </select>
                        {isNewGroupe && (
                            <Input
                                type="text"
                                name="newGroupe"
                                placeholder="Nom du nouveau groupe"
                                onChange={(e) => setDetails(prev => ({ ...prev, groupe: e.target.value }))}
                            />
                        )}
                    </InputGroup>
                </InputRow>
                <ButtonContainer>
                    <Button type="button" onClick={() => router.back()}>
                        Retour
                    </Button>
                    <Button type="submit">Sauvegarder les détails</Button>
                </ButtonContainer>
            </form>
        </Container>
    );
};
export default MedicamentDetailsForm;