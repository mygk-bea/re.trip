import React from "react";
import Menu from "../../../../components/Menu";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import { useNavigate } from "react-router-dom";
import IconFilter from "../../../../assets/icons/icon-filter";
import { allRoutes, rotaParques, rotaSitioMuseu } from "../../../../constants/infosRoutes";
import { allPlaces } from "../../../../constants/infosPlaces";
import Card from "../../../../components/Card";


const Favoritos: React.FC = () => {
    const navigate = useNavigate();
    // const location = useLocation();

    // const selectedTags = location.state?.selectedTags || [];

    const favoritedPlaces = [
        ...allRoutes
            .filter(route => route.favorited)
            .map(route => ({ ...route, type: "route" as const })),
        ...allPlaces
            .filter(place => place.favorited)
            .map(place => ({ ...place, type: "place" as const })),
    ];

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-6 flex items-center">
                <div className="cursor-pointer" onClick={() => navigate(-1)}>
                    <IconArrowChevron class="w-10 h-10 stroke-[#FF7022] transform rotate-90" />
                </div>

                <div className="flex-1 flex justify-center">
                    <div className={`text-[#FF7022] font-bold text-[32px] `} style={{ fontFamily: "'Madimi One', sans-serif" }}>
                        Favoritos
                    </div>
                </div> 

                <div onClick={() => navigate("/user/favoritos/filtros")}>
                    <IconFilter class="w-8 h-10 fill-[#FF7022] cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col h-[80vh] w-[90vw] gap-2">
                {favoritedPlaces.length > 0 ? (
                    favoritedPlaces.map((item) => (
                        <Card
                            key={`${item.type}-${item.id}`}
                            className="h-[75px] w-full cursor-pointer"
                            nameBackground={item.images[0]}
                            title={item.name}
                            isBlur={true}
                            isOpacity={false}
                            positionText="center"
                            widthText="100%"
                            onClick={() => {
                                if (item.type === "place") {
                                    navigate("/user/local/info", {
                                        state: {
                                        place: item,
                                        isAdmin: false,
                                        },
                                    });
                                } else if (item.type === "route") {
                                    const route = item.id == "1" ? rotaSitioMuseu : rotaParques;

                                    if (route) {
                                        navigate("/user/rota/info", {
                                            state: {
                                                type: "user",
                                                route: route,
                                            },
                                        });
                                    }
                                }
                            }}
                        />
                    ))
                ) : (
                    <div className="mt-32 text-center text-gray-500">
                        Você ainda não tem favoritos.
                    </div>
                )}
            </div>

            <Menu />
        </div>

    );
};

export default Favoritos;
