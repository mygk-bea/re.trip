import React, { useState } from 'react';

import IconArrowChevron from '../../../assets/icons/icon-arrow-chevron';
import IconHeart from '../../../assets/icons/icon-heart';
import IconPin from '../../../assets/icons/icon-pin';
import IconPlus from '../../../assets/icons/icon-plus';

import Menu from '../../../components/Menu';
import StarRating from '../../../components/StarRating';
import Tag from '../../../components/Tag';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

import styled from './RotaInfo.module.scss';

import type { RouteInfo } from '../../../types/route';

interface RotaInfoProps {
  route: RouteInfo;
}

const tagStyles: { [key: string]: { bgColor: string; textColor: string; borderColor: string } } = {
  "Histórico": { bgColor: "rgba(143, 0, 191, .1)", textColor: "#8F00BF", borderColor: "#8F00BF" },
  "Natureza e Ecoturismo": { bgColor: "rgba(52, 181, 5, .1)", textColor: "#34B505", borderColor: "#34B505" },
  "Aventura e Diversão": { bgColor: "rgba(143, 0, 191, .1)", textColor: "#8F00BF", borderColor: "#8F00BF" },
  "Pet Friendly": { bgColor: "rgba(0, 29, 215, .1)", textColor: "#001DD7", borderColor: "#001DD7" },
};

const defaultTagStyle = { bgColor: "rgba(128, 128, 128, .1)", textColor: "#808080", borderColor: "#808080" };


const RotaInfo: React.FC<RotaInfoProps> = ({ route }) => {
  const [isFavorited, setIsFavorited] = useState(route.favorited);

  return (
    <>
      <div className={`${styled.container} h-full w-screen text-start pb-[10vh]`}>
        <div 
          className={`${styled.header} bg-center bg-no-repeat bg-cover rounded-b-[50px]`}
          style={{ backgroundImage: `url(${route.images[0]})` }}
        >
          <div className={`${styled.overlay} flex flex-col justify-between h-[52vh] w-full p-[9vw]`}>
            <div className={`${styled.top} flex justify-between items-center z-[2]`}>
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
              </button>
              <button onClick={() => {}}>
                <IconPin class={`${styled.icon} ${styled.pin}`}/>
              </button>
            </div>
            <div className={`${styled.bottom} flex justify-between items-end z-[2]`}>
              <div>
                <h1 className={`${styled.title} text-[#FF7022] `}>{route.name}</h1>
              </div>
              <button onClick={() => setIsFavorited(!isFavorited)} className='py-[10px]'>
                <IconHeart class={`${styled.icon} ${styled.heart} ${isFavorited ? styled.fill : ''}`}/>
              </button>
            </div>
          </div>
        </div>

        <div className={`${styled.content} p-[4.5vw] flex flex-col  items-center`}>
          <div className={`${styled.author} mt-4 w-full flex flex-col gap-2`}>
            <p><span>Criado por: </span>{route.author}</p>
            <StarRating rating={route.starRating} showNumber={true}/>
          </div>

          <div className={`${styled.tags} w-full flex flex-wrap gap-2 mt-4`}>
            {route.tags.map(tagText => {
              const style = tagStyles[tagText] || defaultTagStyle;
              return (
                <Tag
                  key={tagText}
                  text={tagText}
                  bgColor={style.bgColor}
                  textColor={style.textColor}
                  borderColor={style.borderColor}
                />
              );
            })}
          </div>

          <div className={`${styled.comment} mt-4 p-[10px] bg-[#FFFFCD] border border-[#FFEE71] rounded-[15px]`}>
            {route.comment ? (
              <p><span>Comentário do criador: </span>{route.comment}</p>
            ) : (
              <p>
                <span>
                  <button>
                    <IconPlus/>
                    Adicionar Comentário
                  </button>
                </span>
              </p>
            )}
          </div>

          <div className={`${styled.routeLength} mt-4 w-full`}>
            <p><span>Distância Total: </span>{route.routeLength}</p>
          </div>

          <div className="flex flex-col gap-4 my-4">
            {route.locals.map((local, index) => (
            <div key={local.id} className="flex items-center gap-2">
              <div className={`${styled.number}`}>{index + 1}</div>
              <Card
                height="80px"
                width="75vw"
                nameBackground={local.images[0]}
                title={local.name}
                isTags={local.tags.length > 0}
                tags={local.tags}
                isBlur={true}
                isOpacity={false}
                positionText="top"
                widthText="100%"
              />
            </div>
            ))}
          </div>

          <Button
            colorText="#FFF"
            backgroundColor="#FF7022"
            colorShadow="#DD3603"
            height="50px"
            width="200px"
            title="Salvar"
            positionItems="center"
            fontFamily="'Madimi One', sans-serif"
            isAdm={false}
            onClick={() => { }}
          />
        </div>
      </div>
      <Menu />
    </>
  );
}

export default RotaInfo;