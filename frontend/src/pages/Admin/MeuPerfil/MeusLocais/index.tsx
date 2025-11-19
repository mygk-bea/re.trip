import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import { localPlaces } from "../../../../constants/infos";
import Card from "../../../../components/Card/index";
// import { localService } from "../../../../core/services/LocalService";
// import { authService } from "../../../../core/services/LoginService";

const MeusLocais: React.FC = () => {
    const navigate = useNavigate();
    // const [locaisUsuario, setLocaisUsuario] = useState<any[]>([]);

    // dados das rotas
    // useEffect(() => {
    //     const buscarLocais = async () => {
    //         const userData = authService.getUserData();
    //         const userCredencial = userData?.idCredencial ? parseInt(userData.idCredencial) : 0;

    //         const response = await localService.getDadosLocais(userCredencial);

    //         if (response && response.success) {
    //             setLocaisUsuario(response.data);
    //             console.log("Locais carregados:", response.data);
    //         } else {
    //             console.error("Erro ao carregar locais:", response.message);
    //         }
    //     }

    //     buscarLocais();
    // }, []);

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#229CFF] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#229CFF] font-bold text-[32px]`} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Meus Locais
                    </div>
                </div>

                <div className="w-6"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                {localPlaces.map((place) => (
                    <Card
                        key={place.id}
                        nameBackground={place.image}
                        title={place.title}
                        isOpacity
                        fontSize="30px"
                        positionText="center"
                        className="w-[80vw] h-[15vh] lg:w-[40vw] lg:h-[20vh] mb-4 cursor-pointer"
                        onClick={() => navigate('/admin/local/info')}
                    />
                ))}
            </div>

            <div>
                <Menu isAdmin />
            </div>

        </div>

    );
};

export default MeusLocais;
