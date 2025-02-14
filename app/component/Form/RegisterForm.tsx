'use client'
import styled from 'styled-components';
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

interface ButtonProps {
    $primary?: boolean;
}

const FormContainer = styled.div`
    background-color: #EDF1F5;
    margin: 0 auto;
    height: 100%;
    max-width: 800px;
    // padding: 20px auto;
    @media (max-width: 480px){

    }

`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;

    @media (max-width: 480px){
        align-items: center;
    }
`;

const ButtonContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding-top: 30px;

    @media (max-width: 480px){
        margin: 10px auto;
    }
`;

const Coordonnees = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    justify-content: center;
`

const Button = styled.button<ButtonProps>`
    background: ${({ $primary }) => ($primary ? '#A7DBF5' : 'none')};
    color: #000000;
    border: 0.4px solid #000000;
    border-radius: 8px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    width: 190px;
    height: 30px;
    margin: auto 1%;

    @media (max-width: 480px){
        width: 110px;
        font-size: 12px;
    }
`;

const SectionTitle = styled.h3`
    margin-bottom: 5px;
    padding-left: 30px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #000000;

    @media (max-width: 480px){
        text-align: center;
        padding: 0;
    }
`;

const GenderSelection = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
    margin-bottom: 15px;
    gap: 30px;

    Input{
        text-decoration: none;
    }

    @media (max-width: 480px){
        justify-content: center;
        padding: 0;
    }
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-size: 14px;
    font-family: 'Poppins',sans-serif;
    color: #2d3748;

    @media (max-width: 480px){
        font-size: 12px;
    }
    
`;

const InputRow = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;

    @media (max-width: 480px){
        flex-direction: column;
    }
`;

const InputSelect = styled.div`
    display: flex;
    gap: 15px;
`
const LabelRow = styled.label`
    position: relative;
    font-family: 'Poppins',sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;

    @media (max-width: 480px){
        font-size: 12px;
    }
`;
const InputGroup = styled.div`
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: none;
    margin-bottom: 5px;
`;

const Select = styled.select`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 30%;
    font-size: 14px;
    background: none;
`;

const SubmitButton = styled.button`
    background: #A7DBF5;
    border: 0.4px solid #000000;
    border-radius: 10px;
    color: #000000;
    width: 53%;
    height: auto;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    margin: 1%;

    @media (max-width: 480px){
        width: 30%;
        font-size: 12px;
        line-height: 20px;
    }

`;

// Définition des types pour formData et errors
interface FormData {
    prenom: string;
    nom: string;
    genre: string;
    jourNaiss: string;
    moisNaiss: string;
    anneeNaiss: string;
    email: string;
    password: string;
    confirmPassword: string;
}
interface FormErrors {
    prenom?: string;
    nom?: string;
    genre?: string;
    dateNaiss?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        prenom: '',
        nom: '',
        genre: '',
        // dateNaiss: '',
        jourNaiss: '',
        moisNaiss: '',
        anneeNaiss: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const router = useRouter();

    const handleLoginRedirect = () => {
        router.push('/login'); // Redirection vers la page de connexion
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.prenom) newErrors.prenom = 'Prénom requis';
        if (!formData.nom) newErrors.nom = 'Nom requis';
        if (!formData.genre) newErrors.genre = 'Genre requis';
        if (!formData.jourNaiss || !formData.moisNaiss || !formData.anneeNaiss) newErrors.dateNaiss = 'Date de naissance requise';
        if (!formData.email) newErrors.email = 'Email requis';
        if (!formData.password) newErrors.password = 'Mot de passe requis';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        const dateNaiss = `${formData.anneeNaiss}-${formData.moisNaiss}-${formData.jourNaiss}`;

        try {
            const res = await axios.post('${process.env.NEXT_PUBLIC_API_URL}s/signup', { ...formData, dateNaiss });
            if (res.status === 200) {
                localStorage.setItem("authToken", res.data.token);
                setFormData({
                    prenom: '',
                    nom: '',
                    genre: '',
                    jourNaiss: '',
                    moisNaiss: '',
                    anneeNaiss: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                router.push('/login');
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription', error);
            alert("Erreur lors de l'inscription. Veuillez réessayer.");
        }
    };

    const ErrorText = ({ message }: { message: string }) => (
        <span style={{ color: 'red', fontSize: '0.8em' }}>{message}</span>
    );

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <ButtonContainer>
                    <Button type="button" onClick={handleLoginRedirect}>
                        Connectez-vous
                    </Button>
                    <Button type="submit" $primary>
                        Inscrivez-vous
                    </Button>
                </ButtonContainer>

                <Coordonnees>
                    <SectionTitle>Vos coordonnées</SectionTitle>
                    <GenderSelection>
                        <Label>
                            <Input
                                type="radio"
                                name="genre"
                                value="homme"
                                checked={formData.genre === 'homme'}
                                onChange={handleChange}
                            />
                            Homme
                        </Label>
                        <Label>
                            <Input
                                type="radio"
                                name="genre"
                                value="femme"
                                checked={formData.genre === 'femme'}
                                onChange={handleChange}
                            />
                            Femme
                        </Label>
                    </GenderSelection>
                    {errors.genre && <ErrorText message={errors.genre} />}

                    <InputRow>
                        <InputGroup>
                            <LabelRow>Prénom</LabelRow>
                            <Input
                                type="text"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}

                            />
                            {errors.prenom && <ErrorText message={errors.prenom} />}
                        </InputGroup>
                        <InputGroup>
                            <LabelRow>Nom</LabelRow>
                            <Input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}

                            />
                            {errors.nom && <ErrorText message={errors.nom} />}
                        </InputGroup>
                    </InputRow>

                    <LabelRow>Date de naissance</LabelRow>
                    <InputRow>
                        <InputSelect>
                            <Select name="jourNaiss" value={formData.jourNaiss} onChange={handleChange}>
                                <option>JJ</option>
                                {[...Array(31)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                            </Select>
                            <Select name="moisNaiss" value={formData.moisNaiss} onChange={handleChange}>
                                <option>MM</option>
                                {[...Array(12)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                            </Select>
                            <Select name="anneeNaiss" value={formData.anneeNaiss} onChange={handleChange}>
                                <option>AAAA</option>
                                {[...Array(100)].map((_, i) => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </Select>
                            {errors.dateNaiss && <ErrorText message={errors.dateNaiss} />}
                        </InputSelect>

                    </InputRow>

                    <InputRow>
                        <InputGroup>
                            <LabelRow>E-mail</LabelRow>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}

                            />
                            {errors.email && <ErrorText message={errors.email} />}
                        </InputGroup>
                        <InputGroup>
                            <LabelRow>Mot de passe</LabelRow>
                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}

                            />
                            {errors.password && <ErrorText message={errors.password} />}
                        </InputGroup>
                    </InputRow>

                    <InputRow>
                        <InputGroup>
                            <LabelRow>Confirmer</LabelRow>
                            <Input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}

                            />
                            {errors.confirmPassword && <ErrorText message={errors.confirmPassword} />}
                        </InputGroup>
                    </InputRow>
                </Coordonnees>
                <SubmitButton type="submit">S’inscrire</SubmitButton>
            </Form>
        </FormContainer>
    );
};

export default RegisterForm;
