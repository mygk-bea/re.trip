import React, { useRef, useState } from "react";
import IconRouteMap from "../../assets/icons/icon-route";
import IconHeart from "../../assets/icons/icon-heart";
import IconLogout from "../../assets/icons/icon-exit";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import IconAvatar from "../../assets/icons/icon-avatar";
import styles from './MeuPerfil.module.scss'
import { useNavigate } from "react-router-dom";

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
                <div className="flex flex-col items-center">
                    <div className={`text-[#FF7022] text-center font-bold text-[32px] mb-6 fixed top-0 p-8 lg:p-40 ${styles.text__custom}`}>
                        {call}
                    </div>

                    <div
                        className="w-30 h-30 bg-[#FF7022] rounded-full mb-6 flex items-center justify-center cursor-pointer overflow-hidden"
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

                <div className={`text-[#FF7022] text-center font-bold text-[32px] ${styles.text__custom}`}>{username}</div>
                <div className='text-[20px] mb-5'>{type}</div>
            </div>

            <div className="w-[80vw] lg:w-[30vw] flex flex-col gap-8" >
                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgrandColor="#FFFFFF"
                    colorSombra="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    tittle="Minhas Rotas"
                    positionItens="start"
                    icon={IconRouteMap}
                    onClick={() => navigate("/user/meu-perfil/minhas-rotas")}
                />

                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgrandColor="#FFFFFF"
                    colorSombra="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    tittle="Rotas Favoritas"
                    positionItens="start"
                    icon={IconHeart}
                    onClick={() => navigate("/user/meu-perfil/rotas-favoritas")}
                />

                <Button
                    colorIcon="#ee8047"
                    colorText="#363837"
                    backgrandColor="#FFFFFF"
                    colorSombra="#ee8047"
                    height="50px"
                    width="100%"
                    isAdm={false}
                    tittle="Sair"
                    positionItens="start"
                    icon={IconLogout}
                    // onClick={() => navigate("/user/meu-perfil/sair")}
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
