import React, { useRef, useState } from "react";
import IconRouteMap from "../../../assets/icons/icon-route";
import IconHeart from "../../../assets/icons/icon-heart";
import IconLogout from "../../../assets/icons/icon-exit";
import Menu from "../../../components/Menu";
import Button from "../../../components/Button";
import IconAvatar from "../../../assets/icons/icon-avatar";
import { useNavigate } from "react-router-dom";
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";

interface MeuPerfilProps {
    type: string;
    username: string;
    call: string;
}

const MeuPerfil: React.FC<MeuPerfilProps> = ({ type, username, call }) => {
    const navigate = useNavigate();

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);

    // Função para abrir o seletor de arquivos
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Função para carregar a foto escolhida
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 w-full p-6 flex items-center z-50 lg:p-10">
                    <div className="cursor-pointer" onClick={() => navigate(-1)}>
                        <IconArrowChevron class="w-10 h-10 stroke-[#FF7022] transform rotate-90" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div
                            className="text-[#FF7022] font-bold text-[32px]"
                            style={{ fontFamily: "'Madimi One', sans-serif" }}
                        >
                            {call}
                        </div>
                    </div>

                    <div className="w-10 h-10"></div>
                </div>

                <div className="flex flex-col items-center">
                    <div
                        className="w-30 h-30 bg-[#FF7022] rounded-full mb-6 lg:mb-2 flex items-center justify-center cursor-pointer overflow-hidden"
                        onClick={handleClick}
                    >
                        {image ? (
                            <img src={image} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <IconAvatar class="w-[5rem] h-[5rem] ml-4 fill-white opacity-70" />
                        )}
                    </div>

                    {/* Input escondido para upload */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                <div className={`text-[#FF7022] text-center font-bold text-[32px]`}>{username}</div>
                <div className='text-[20px] mb-7 lg:mb-10' style={{ fontFamily: "'Rubik', sans-serif" }}>{type}</div>
            </div>

            <div className="w-[80vw] lg:w-[30vw] flex flex-col gap-8 lg:mb-30" >
                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    title="Minhas Rotas"
                    positionItems="start"
                    fontFamily="Rubik"
                    icon={IconRouteMap}
                    fontWeight='normal'
                    onClick={() => navigate("/user/meu-perfil/minhas-rotas")}
                />

                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    title="Rotas Favoritas"
                    positionItems="start"
                    fontFamily="Rubik"
                    icon={IconHeart}
                    fontWeight='normal'
                    onClick={() => navigate("/user/meu-perfil/rotas-favoritas")}
                />

                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgroundColor="#FFFFFF"
                    colorShadow="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    title="Sair"
                    fontFamily="Rubik"
                    positionItems="start"
                    fontWeight='normal'
                    icon={IconLogout}
                    onClick={() => navigate("/inicio")}
                />
            </div>

            <div>
                <Menu />
            </div>

        </>

    );
};

//   <MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />


export default MeuPerfil;
