import React, { useState } from 'react';
import IconArrowChevron from '../../../assets/icons/icon-arrow-chevron';
import IconExpand from '../../../assets/icons/icon-expand';
import IconHeart from '../../../assets/icons/icon-heart';
import IconVerify from '../../../assets/icons/icon-verify';
import Menu from '../../../components/Menu';
import StarRating from '../../../components/StarRating';
import Tag from '../../../components/Tag';
import styled from './InfoLocal.module.scss';
import type { Place } from '../../../types/place';
import IconChat from '../../../assets/icons/icon-chat';import Card from '../../../components/Card';
4

interface InfoLocalProps {
  place: Place;
}

const InfoLocal: React.FC<InfoLocalProps> = ({ place }) => {
  const [isFavorited, setIsFavorited] = useState(place.favorited);
  
  return (
    <>
      <div className={`${styled.container} h-full w-screen text-start pb-[10vh]`}>
        <div 
          className={`${styled.header} bg-center bg-no-repeat bg-cover rounded-b-[50px]`}
          style={{ backgroundImage: `url(${place.images[0]})` }}
        >
          <div className={`${styled.overlay} flex flex-col justify-between h-[52vh] w-full p-[9vw]`}>
            <div className={`${styled.top} flex justify-between items-center z-[2]`}>
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
              </button>
              <button onClick={() => {}}>
                <IconExpand class={`${styled.icon} ${styled.expand}`}/>
              </button>
            </div>
            <div className={`${styled.bottom} flex justify-between items-end z-[2]`}>
              <div>
                {place.verified && (
                  <div className={`${styled.warningVerification} flex items-center`}>
                    <IconVerify class={`${styled.verify}`}/>
                    <p className={`${styled.text} text-[#47E417]`}>Verificado por moderadores</p>
                  </div>
                )}
                <h1 className={`${styled.title} text-[#FFFFFF] `}>{place.name}</h1>
              </div>
              <button onClick={() => setIsFavorited(!isFavorited)} className='py-[10px]'>
                <IconHeart class={`${styled.icon} ${styled.heart} ${isFavorited ? styled.fill : ''}`}/>
              </button>
            </div>
          </div>
        </div>

        <div className={`${styled.content} p-[3.5vw]`}>
          <StarRating rating={place.starRating} showNumber={true}/>

          <div className={`${styled.tags} flex flex-wrap gap-2 mt-4`}>
            {place.tags.map(tag => {
              return (
                <Tag
                  key={tag.text}
                  text={tag.text}
                  bgColor={tag.style.bgColor}
                  textColor={tag.style.textColor}
                  borderColor={tag.style.borderColor}
                />
              );
            })}
          </div>

          <div className={`${styled.description} mt-4 p-[10px] bg-[#FFFFCD] border border-[#FFEE71] rounded-[15px]`}>
            <p><span>Descrição: </span>{place.description}</p>
          </div>

          <div className={`${styled.contact} mt-4 flex gap-[5px] items-center`}>
            <p>
              <span>Contato: </span>
              <u><a href={`tel:${place.contactInfo}`}>{place.contactInfo}</a></u>
            </p>
            <IconChat class={`${styled.chat}`}/>
          </div>

          <div className={`${styled.adress} mt-4`}>
            <p><span>Endereço: </span>{place.address}</p>
          </div>

          <div className={`${styled.map} mt-4`}>
            <p>
              <span>Ver no mapa: </span>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                Abrir no Google Maps
              </a>
            </p>
          </div>

          {place.routes && place.routes.length > 0 && (
            <div className={`${styled.rotas} mt-4`}>
              <p><span>Rotas:</span></p>
              {place.routes.map((route) => (
              <div key={route.id} className="flex items-center gap-2">
                <Card
                  className='h-[80px] w-[85vw] mx-auto cursor-pointer'
                  nameBackground={route.images[0]}
                  title={route.name}
                  isTags={route.locals.some(local => local.tags.length > 0)}
                  tags={route.locals[0].tags.map(tag => tag.text)}
                  isBlur={true}
                  isOpacity={false}
                  positionText="top"
                  widthText="100%"
                />
              </div>
              ))}
            </div>
          )}

          {/* {place.events && place.events.length > 0 && (
            <div className={`${styled.eventos} mt-4`}>
              <p><span>Eventos:</span></p>
              <ul className="list-disc list-inside ml-2">
                {place.events.map((event, index) => <li key={index}>{event}</li>)}
              </ul>
            </div>
          )} */}
        </div>
      </div>
      <Menu />
    </>
  );
}

export default InfoLocal;