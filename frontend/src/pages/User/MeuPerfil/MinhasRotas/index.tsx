import React, {useEffect, useState} from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import IconPlus from "../../../../assets/icons/icon-plus";
import styled from "./MinhasRotas.module.scss";
import { rotaService } from "../../../../core/services/RotaService";
import { authService } from "../../../../core/services/LoginService";

const MinhasRotas: React.FC = () => {
    const navigate = useNavigate();
    const [rotasUsuario, setRotasUsuario] = useState<any[]>([]);
    
    // dados das rotas
    useEffect(() => {
        const buscarRotas = async () => {
            const userData = authService.getUserData();
            const userCredencial = userData?.idCredencial ? parseInt(userData.idCredencial) : 0;

            const response = await rotaService.getDadosRotas(userCredencial);

            if (response && response.success) {
                setRotasUsuario(response.data);
                console.log("Rotas carregadas:", response.data);
            } else {
                console.error("Erro ao carregar rotas:", response.message);
            }
        }

        buscarRotas();
    }, []);

    return (
        <div className="relative flex flex-col justify-between h-[100vh] pb-[13vh]">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#FF7022] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#FF7022] font-bold text-[32px]`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Minhas Rotas
                    </div>
                </div>

                <div className="w-6"></div>
            </div>

            <div className="flex flex-col items-start w-full max-w-4xl mx-auto">
                <div className="mt-24 text-center text-gray-500">
                    Você ainda não criou nenhuma rota.
                </div>
            </div>

            <Button
                icon={IconPlus}
                positionItems="start"
                colorIcon="var(--color-primary-user)"
                colorText="var(--color-primary-user)"
                backgroundColor="var(--color-light)"
                colorShadow="var(--color-primary-user)"
                height="50px"
                width="100%"
                isAdm={false}
                title="Criar Nova Rota"
                svgClass={styled.plus}
                fontSize="16px"
                fontFamily="'Madimi One', sans-serif"
                fontWeight={400}
                buttonType="button"
                onClick={() => navigate("/user/rota/cadastro")}
            />

            <Menu />
        </div>
    );
};

export default MinhasRotas;
