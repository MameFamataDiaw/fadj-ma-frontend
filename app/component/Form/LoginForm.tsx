'use client'
import styled from 'styled-components';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

interface ButtonProps {
    $primary?: boolean;
}

const FormContainer = styled.div`
    background-color: #EDF1F5;
    max-width: 800px;
    height: 300px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 60px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px){
        // max-width: 400px;
        margin: 0;
    }
`;

const ButtonContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 480px){
        margin: 10px auto;
    }
`;

const Button = styled.button<ButtonProps>`
    background: ${({$primary}) => ($primary ? '#A7DBF5' : 'none')};
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
    margin: 10px 1%;

    @media (max-width: 480px){
        width: 110px;
        font-size: 12px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 480px){
        padding-bottom: 10px;
    }
`
const Input = styled.input`
    background: none;
    width: 92%;
    height: 8px;
    padding: 12px;
    margin: 8px 0;
    border: 0.4px solid #000000;
    border-radius: 10px;

    &:focus {
        outline: none;
        border-color: #61808f;
    }

    @media (max-width: 480px){
        width: 82%;
    }
`;

const Label = styled.label`
    position: relative;
    display: block;
    margin-top: 8px;
    margin-right: 300px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;

    @media (max-width: 480px){
        margin-right: auto;
        margin-left: 10px;
    }
`;

const ForgotPassword = styled.a`
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    text-align: right;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 480px){
        text-align: left;
        margin-left: 8px;
    }
`;

const SubmitButton = styled.button`
    background: #A7DBF5;
    border: 0.4px solid #000000;
    border-radius: 10px;
    color: #000000;
    width: 400px;
    height: 30px;
    margin-top: 10px;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
  
    //&:hover {
    //  background-color: #90CAF9;
    //}

    @media (max-width: 480px){
        width: 110px;
    }
`;

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });
            if (response.status ===  200) {
                localStorage.setItem("authToken", response.data.token);
                router.push('/'); // Redirection après connexion
            }  else {
                setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
            }
        } catch (err) {
                console.error("Erreur de connexion:", err);
                setErrorMessage("Erreur de connexion. Veuillez vérifier vos identifiants.");
            }
    };

    const handleRegisterRedirect = () => {
        router.push('/register'); // Redirection vers la page d'inscription
    };

    return (
        <FormContainer>
            {/*<Form>*/}
            <form onSubmit={handleSubmit}>
                <ButtonContainer>
                    <Button type="submit" $primary>Connectez-vous</Button>
                    <Button type="button" onClick={handleRegisterRedirect}>Inscrivez-vous</Button>
                </ButtonContainer>

                <InputContainer>
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Adresse e-mail"
                    />
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Mot de passe"
                    />
                </InputContainer>

                <ForgotPassword href="#">Mot de passe oublié</ForgotPassword>

                <SubmitButton type="submit">Se connecter</SubmitButton>
            </form>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            {/*</Form>*/}
        </FormContainer>
    );
};

const ErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
`;


export default LoginForm;