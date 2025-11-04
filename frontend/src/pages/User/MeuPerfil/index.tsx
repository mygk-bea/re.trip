import React, { useRef, useState } from "react";
import IconRouteMap from "../../../assets/icons/icon-route";
import IconHeart from "../../../assets/icons/icon-heart";
import IconLogout from "../../../assets/icons/icon-exit";
import Menu from "../../../components/Menu";
import Button from "../../../components/Button";
import IconAvatar from "../../../assets/icons/icon-avatar";
import { useNavigate } from "react-router-dom";
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";
// import { authService } from "../../../core/services/LoginService";
import { dictDataRoutes } from "../../../constants/typeUser";
import IconPin from "../../../assets/icons/icon-pin";
import IconPhone from "../../../assets/icons/icon-phone";

interface MeuPerfilProps {
    type: string;
    username: string;
    call: string;
    isAdmin?: boolean;
    isGuia?: boolean;
}

const MeuPerfil: React.FC<MeuPerfilProps> = ({ type, username, call, isAdmin = false, isGuia = false }) => {
    const navigate = useNavigate();
    const logicType = isAdmin ? 'admin' : isGuia ? 'guia' : 'user';
    const userData = dictDataRoutes(logicType);
    const { color, secondaryColor } = userData;

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

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

    const handleLogout = () => {
        // authService.logout();
        navigate(userData.inicio);
    };

    const renderButtons = () => {
        const buttonProps = {
            colorText: "#000",
            backgroundColor: "#FFFFFF",
            height: "50px",
            width: "100%",
            positionItems: "start" as "start",
            fontFamily: "Rubik",
            fontWeight: 'normal',
            colorIcon: color,
            outlineColor: color,
            colorShadow: color,
            isAdm: logicType === 'admin',
        };

        return (
            <div className="w-[80vw] lg:w-[30vw] flex flex-col gap-8 lg:mb-23">
                {logicType === 'user' && (
                    <Button
                        {...buttonProps}
                        title="Favoritos"
                        icon={IconHeart}
                        onClick={() => navigate(userData.perfilConteudo)}
                    />
                )}
                {logicType !== 'admin' && (
                    <Button
                        {...buttonProps}
                        title="Minhas Rotas"
                        icon={IconRouteMap}
                        onClick={() => navigate(userData.perfilConteudo)}
                    />
                )}
                {logicType === 'admin' && (
                    <Button
                        {...buttonProps}
                        title="Meus Locais"
                        icon={IconPin}
                        onClick={() => navigate(userData.perfilConteudo)}
                    />
                )}
                {logicType === 'guia' && (
                    <Button
                        {...buttonProps}
                        title="Informações de Contato"
                        icon={IconPhone}
                        onClick={() => navigate(userData.perfilContato ? userData.perfilContato : "/")}
                    />
                )}
                <Button
                    {...buttonProps}
                    title="Sair"
                    icon={IconLogout}
                    onClick={handleLogout}
                />
            </div>
        );
    };

    return (
        <>
            <div className="relative">
                <div className="flex items-center mb-6 relative w-full lg:-mt-50 -mt-20 mb-10">
                    <div className="cursor-pointer" onClick={() => navigate(-1)}>
                        <IconArrowChevron
                            class="w-10 h-10 transform rotate-90"
                            // style={{ stroke: color }}
                        />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div
                            className="font-bold text-[32px]"
                            style={{ fontFamily: "'Madimi One', sans-serif", color: color }}
                        >
                            {call}
                        </div>
                    </div>

                    <div className="w-10 h-10"></div>
                </div>

                <div className="flex flex-col items-center">
                    <div
                        className="w-30 h-30 rounded-full mb-3 lg:mb-2 flex items-center justify-center cursor-pointer overflow-hidden"
                        style={{ backgroundColor: color }}
                        onClick={handleClick}
                    >
                        {image ? (
                            <img src={image} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <IconAvatar class="w-[5rem] h-[5rem] ml-[13px] fill-white opacity-70" />
                        )}
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="text-center font-bold text-[32px]" style={{ color: color }}>
                    {username}
                </div>
                <div className="text-[20px] mb-7 lg:mb-10" style={{ fontFamily: "'Rubik', sans-serif" }}>
                    {type}
                </div>
            </div>

            {renderButtons()}

            <div>
                <Menu isAdmin={isAdmin} isGuia={isGuia} />
            </div>
        </>
    );
};

export default MeuPerfil;