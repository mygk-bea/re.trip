import React, { useState } from "react";

import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";
import IconHeart from "../../../../assets/icons/icon-heart";
import IconPin from "../../../../assets/icons/icon-pin";
import IconPlus from "../../../../assets/icons/icon-plus";

import Menu from "../../../../components/Menu";
import StarRating from "../../../../components/StarRating";
import Tag from "../../../../components/Tag";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";

import styled from "./RotaInfo.module.scss";

import type { RouteInfo } from "../../../../types/route";
import { useLocation, useNavigate } from "react-router-dom";
import { dictDataRoutes } from "../../../../constants/typeUser";

interface RotaInfoProps {
  route?: RouteInfo;
  type?: "user" | "admin" | "guia";
}

const RotaInfo: React.FC<RotaInfoProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { route, type } = (location.state || {}) as RotaInfoProps;
  
  if (!route || !type) {
    return <p>⚠️ Nenhuma rota encontrada.</p>;
  }

  const userData = dictDataRoutes(type);

  const [isFavorited, setIsFavorited] = useState(route.favorited);
  const mainStyleColor =
    type === "guia"
      ? styled.guiaTheme
      : type === "admin"
      ? styled.adminTheme
      : styled.userTheme;

  return (
    <>
      <div
        className={`${styled.container} w-screen min-h-screen text-start pb-[15vh] ${mainStyleColor} `}
      >
        <div
          className={`${styled.header} bg-center bg-no-repeat bg-cover rounded-b-[50px]`}
          style={{ backgroundImage: `url(${route.images[0]})` }}
        >
          <div
            className={`${styled.overlay} flex flex-col justify-between lg:justify-center lg:gap-[20px] h-[52vh] lg:h-[20vh] w-full p-[9vw] lg:py-[0] bg-[rgba(255,255,255,0.2)] lg:bg-[rgba(255,255,255,0.6)]`}
          >
            <div
              className={`${styled.top} flex justify-between items-center z-[2]`}
            >
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow}`} />
              </button>
              <button onClick={() => {}}>
                <IconPin class={`${styled.icon} ${styled.pin}`} />
              </button>
            </div>
            <div
              className={`${styled.bottom} flex justify-between items-end z-[2]`}
            >
              <div>
                <h1
                  className={`${styled.title} text-[var(--current-primary-color)] `}
                >
                  {route.name}
                </h1>
              </div>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="py-[10px]"
              >
                <IconHeart
                  class={`${styled.icon} ${styled.heart} ${
                    isFavorited ? styled.fill : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-8">
          <div className="w-full max-w-md lg:max-w-5xl px-6 flex flex-col lg:flex-row lg:gap-12 lg:items-start">
            <div className={`${styled.content} w-full lg:w-1/2 flex flex-col`}>
              <div className={`${styled.author} w-full flex flex-col gap-2`}>
                <p>
                  <span>Criado por: </span>
                  {route.author}
                </p>
                <StarRating rating={route.starRating} showNumber={true} />
              </div>

              <div
                className={`${styled.tags} w-full flex flex-wrap gap-2 mt-4`}
              >
                {route.locals.map((local) =>
                  local.tags.map((tag) => (
                    <Tag
                      key={`${local.id}-${tag.text}`}
                      text={tag.text}
                      bgColor={tag.style.bgColor}
                      textColor={tag.style.textColor}
                      borderColor={tag.style.borderColor}
                    />
                  ))
                )}
              </div>

              <div
                className={`${styled.comment} w-full mt-4 p-[10px] bg-[#FFFFCD] border border-[#FFEE71] rounded-[15px]`}
              >
                {route.comment ? (
                  <p>
                    <span>Comentário do criador: </span>
                    {route.comment}
                  </p>
                ) : (
                  <p>
                    <span>
                      <button className="flex items-center gap-1">
                        <IconPlus />
                        Adicionar Comentário
                      </button>
                    </span>
                  </p>
                )}
              </div>

              <div className={`${styled.routeLength} mt-4 w-full`}>
                <p>
                  <span>Distância Total: </span>
                  {route.routeLength}
                </p>
              </div>
            </div>

            <div
              className={`${styled.content} w-full lg:w-1/2 flex flex-col items-center mt-6 lg:mt-0`}
            >
              <div className="flex flex-col gap-4 w-full">
                {route.locals.map((local, index) => (
                  <div
                    key={`${local.id}-${index}`}
                    className={`${styled.item} flex items-center gap-[10px]`}
                  >
                    <div
                      className={`${styled.number} w-[24px] h-[24px] flex items-center justify-center relative`}
                    >
                      {index + 1}
                    </div>
                    <div key={local.id} className="flex-grow">
                      <Card
                        className="h-[80px] w-full"
                        nameBackground={local.images[0]}
                        title={local.name}
                        isTags={local.tags.length > 0}
                        tags={local.tags.map((tag) => tag.text)}
                        isBlur={true}
                        isOpacity={false}
                        positionText="top"
                        widthText="100%"
                        onClick={() => {
                          navigate(userData.localInfo, {
                            state: {
                              place: local,
                              isAdmin: type === "admin",
                              isGuia: type === "guia",
                              type: type,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {type === "user" && (
                <div className="mt-4">
                  <Button
                    colorText="var(--color-light)"
                    backgroundColor="var(--current-primary-color)"
                    colorShadow="var(--current-shadow-color)"
                    height="50px"
                    width="200px"
                    title="Iniciar"
                    positionItems="center"
                    fontFamily="'Madimi One', sans-serif"
                    isAdm={false}
                    onClick={() => {
                      navigate("/user/rota/em-andamento", {
                        state: {
                          route: route,
                        },
                      });
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Menu isAdmin={type === "admin"} />
    </>
  );
};

export default RotaInfo;
