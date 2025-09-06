import React from "react";
import IconRouteMap from "../../assets/icons/icon-route";
import IconHeart from "../../assets/icons/icon-heart";
import IconLogout from "../../assets/icons/icon-exit";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import IconPerson from "../../assets/icons/icon-person";
import styles from './MeuPerfil.module.scss';

const MeuPerfil: React.FC = () => {
    return (
        <>
            <div className="flex-1 flex flex-col items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-orange-500 text-2xl font-bold mb-6">Aventureira</h1>

                    <div className="mx-auto mb-6 p-6 bg-orange-500 rounded-full w-24 h-24 flex items-center justify-center">
                        <IconPerson class={styles.icon__person} />
                    </div>

                    <h2 className="text-orange-500 font-semibold text-xl mb-1">Username</h2>
                    <p className="text-gray-600">Usuário Comum</p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col space-y-4 mt-10 w-full">
                    <Button
                        colorIcon="#ee8047"
                        colorText="#ee8047"
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
                        colorText="#ee8047"
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
                        colorText="#ee8047"
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
            </div>

            <div className="mt-auto">
                <Menu />
            </div>

        </>

    );
};

export default MeuPerfil;
