import React from 'react';
import RegisterForm from '.././component/Form/RegisterForm';
import NavbarComponent from "@/app/component/Bar/navbarComponent";

const RegisterPage = () => {
    return (
        <div>
            <NavbarComponent />
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;