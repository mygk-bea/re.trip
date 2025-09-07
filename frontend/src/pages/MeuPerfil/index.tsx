import React from "react";
import IconRouteMap from "../../assets/icons/icon-route";
import IconHeart from "../../assets/icons/icon-heart";
import IconLogout from "../../assets/icons/icon-exit";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import IconAvatar from "../../assets/icons/icon-avatar";

interface MeuPerfilProps {
    type: string;
    username: string;
    call: string;
}

const MeuPerfil: React.FC<MeuPerfilProps> = ({ type, username, call }) => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className="text-[#FF7022] text-center font-bold text-[32px] mb-6 fixed top-0 p-8">
                        {call}
                    </div>

                    <div className="w-30 h-30 bg-[#FF7022] rounded-full mb-6 flex items-center justify-center">
                        <IconAvatar class={`ml-[0.9rem] w-[5rem] h-[5rem] fill-white opacity-70`} />
                    </div>
                </div>

                <div className="text-[#FF7022] text-center font-bold text-[32px]">{username}</div>
                <div className='text-[20px] mb-5'>{type}</div>
            </div>

            <div className="w-[80vw] flex flex-col gap-8" >
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
                />
            </div>

            <div>
                <Menu />
            </div>

        </>

    );
};

export default MeuPerfil;
