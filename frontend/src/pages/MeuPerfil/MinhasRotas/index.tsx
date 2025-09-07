import React from "react";
import Menu from "../../../components/Menu";
import styles from './MinhasRotas.module.scss';

const MeuPerfil: React.FC = () => {
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <div className={`text-[#FF7022] text-center font-bold text-[32px] mb-6 fixed top-0 p-8 ${styles.text__custom}`}>
                        Minhas Rotas
                    </div>

                </div>

            </div>

            <div>
                <Menu />
            </div>

        </>

    );
};

export default MeuPerfil;
