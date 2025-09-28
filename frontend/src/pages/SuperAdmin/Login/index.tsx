import React from "react";
import backgroundImage from "../../../assets/images/city/img_bg_laranjal-paulista-1.jpg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const LoginSuperAdmin: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen relative">
            {/* Imagem de fundo */}
            <img
                src={backgroundImage}
                alt="Fundo"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay escura */}
            <div className="absolute inset-0 bg-black/40 z-1"></div>

            {/* Container central */}
            <div className="flex items-center justify-center h-full relative z-10">
                <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-lg flex flex-col items-center">
                    {/* Título */}
                    <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
                        Bem-vinda!
                    </h1>

                    {/* Formulário */}
                    <form className="flex flex-col gap-6 w-full">
                        <Input
                            type="email"
                            label="E-mail"
                            placeholder="exemplo@email.com"
                        />
                        <Input
                            type="password"
                            label="Senha"
                            placeholder="*****"
                        />

                        <Button
                            colorText='#ff7022'
                            backgroundColor='transparent'
                            colorShadow="#ff7022"
                            height="50px"
                            width="100%"
                            isAdm={false}
                            title='Entrar'
                            positionItems="center"
                            fontSize="1.25rem"
                            fontFamily="'Madimi One', sans-serif"
                            onClick={() => navigate("/super-admin/home")}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginSuperAdmin;
