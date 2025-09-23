import React from "react";
import IconLogout from "../../../assets/icons/icon-exit";
import Menu from "../../../components/Menu";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import IconArrowChevron from "../../../assets/icons/icon-arrow-chevron";
import logoAdmin from '../../../assets/images/logo/logo_admin.png';
import IconEvent from "../../../assets/icons/icon-event";
import IconPark from "../../../assets/icons/icon-park";

interface MeuPerfilProps {
    type: string;
    username: string;
}

const MeuPerfilAdmin: React.FC<MeuPerfilProps> = ({ type, username }) => {
    const navigate = useNavigate();


    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 w-full p-6 flex items-center z-50 lg:p-10">
                    <div className="cursor-pointer" onClick={() => navigate(-1)}>
                        <IconArrowChevron class="w-10 h-10 stroke-[#229CFF] transform rotate-90" />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <span
                            className="text-[#229CFF] font-bold text-[32px]"
                            style={{ fontFamily: "'Madimi One', sans-serif" }}
                        >
                            Host Turístico
                        </span>
                    </div>

                    <div className="w-10 h-10"></div>
                </div>

                <div className="flex flex-col items-center mb-5 lg:mb-5 mt-5 lg:mt-20">
                    <img
                        src={logoAdmin}
                        alt="Logo Admin"
                        className="w-65 h-30 justify-center object-cover"
                    />
                </div>


                <div className={`text-[#229CFF] text-center font-bold text-[32px]`}>{username}</div>
                <div className='text-[20px] mb-7 lg:mb-10' style={{ fontFamily: "'Rubik', sans-serif" }}>{type}</div>
            </div>

            <div className="w-[80vw] lg:w-[30vw] flex flex-col gap-8 lg:mb-30" >
                <Button
                    colorIcon="#229CFF"
                    colorText="#000"
                    backgroundColor="#FFFFFF"
                    colorShadow="#229CFF"
                    height="50px"
                    width="100%"
                    isAdm={true}
                    title="Meus Locais"
                    positionItems="start"
                    fontFamily="Rubik"
                    icon={IconPark}
                    fontWeight='normal'
                    onClick={() => navigate("/admin/meu-perfil/meus-locais")}
                />

                <Button
                    colorIcon="#229CFF"
                    colorText="#000"
                    backgroundColor="#FFFFFF"
                    colorShadow="#229CFF"
                    height="50px"
                    width="100%"
                    isAdm={true}
                    title="Meus Eventos"
                    positionItems="start"
                    fontFamily="Rubik"
                    icon={IconEvent}
                    fontWeight='normal'
                    onClick={() => navigate("/admin/meu-perfil/meus-eventos")}
                />

                <Button
                    colorIcon="#229CFF"
                    colorText="#000"
                    backgroundColor="#FFFFFF"
                    colorShadow="#229CFF"
                    height="50px"
                    width="100%"
                    isAdm={true}
                    title="Sair"
                    fontFamily="Rubik"
                    positionItems="start"
                    fontWeight='normal'
                    icon={IconLogout}
                    onClick={() => navigate("/admin/inicio")}
                />
            </div>

            <div>
                <Menu isAdmin />
            </div>

        </>

    );
};

//   <MeuPerfilAdmin type='Usuário Admin' username='Username Admin' />

export default MeuPerfilAdmin;
