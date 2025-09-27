import React, { useState } from 'react';
import IconArrowChevron from '../../../assets/icons/icon-arrow-chevron';
import IconExpand from '../../../assets/icons/icon-expand';
import IconHeart from '../../../assets/icons/icon-heart';
import IconVerify from '../../../assets/icons/icon-verify';
import IconChat from '../../../assets/icons/icon-chat';
import IconEdit from '../../../assets/icons/icon-edit';
import IconCheck from '../../../assets/icons/icon-check';
import Menu from '../../../components/Menu';
import StarRating from '../../../components/StarRating';
import Tag from '../../../components/Tag';
import styled from './InfoLocal.module.scss';
import type { Place } from '../../../types/place';
import IconUpload from '../../../assets/icons/icon-upload';
import Card from '../../../components/Card';

interface InfoLocalProps {
  place: Place;
  isAdmin?: boolean;
}

const InfoLocal: React.FC<InfoLocalProps> = ({ place, isAdmin = false }) => {
  const [isFavorited, setIsFavorited] = useState(place.favorited);

  // Estados de edição
  const [editingName, setEditingName] = useState(false);
  const [nameValue, setNameValue] = useState(place.name);

  const [editingDescription, setEditingDescription] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(place.description);

  const [editingContact, setEditingContact] = useState(false);
  const [contactValue, setContactValue] = useState(place.contactInfo);

  const [editingAddress, setEditingAddress] = useState(false);
  const [addressValue, setAddressValue] = useState(place.address);

  const [editingRoutes, setEditingRoutes] = useState(false);
  const [routesValue, setRoutesValue] = useState(place.routes || []);

  const [editingEvents, setEditingEvents] = useState(false);
  const [eventsValue, setEventsValue] = useState(place.events || []);

  const [editingTags, setEditingTags] = useState(false);
  const [tagsValue, setTagsValue] = useState(place.tags || []);

  const labelStyle = { color: isAdmin ? "#229CFF" : "#FF7022", fontWeight: 500 as const };

  return (
    <>
      <div className={`${styled.container} h-full w-screen text-start pb-[10vh]`}>
        {/* Header */}
        <div
          className={`${styled.header} bg-center bg-no-repeat bg-cover rounded-b-[50px]`}
          style={{ backgroundImage: `url(${place.images[0]})` }}
        >
          <div className={`${styled.overlay} flex flex-col justify-between h-[52vh] w-full p-[9vw]`}>
            <div className={`${styled.top} flex justify-between items-center z-[2]`}>
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow}`} />
              </button>
              <button onClick={() => { }}>
                <IconExpand class={`${styled.icon} ${styled.expand}`} />
              </button>
            </div>
            <div className={`${styled.bottom} flex justify-between items-end z-[2]`}>
              <div>
                {place.verified && (
                  <div className={`${styled.warningVerification} flex items-center`}>
                    <IconVerify class={`${styled.verify}`} />
                    <p className={`${styled.text} text-[#47E417]`}>Verificado por moderadores</p>
                  </div>
                )}
                {/* Nome editável */}
                <div className="flex items-center gap-2">
                  {editingName ? (
                    <input
                      className="text-white text-2xl font-bold bg-black bg-opacity-30 px-2 py-1 rounded"
                      value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                    />
                  ) : (
                    <h1 className={`${styled.title} text-[#FFFFFF] `}>{nameValue}</h1>
                  )}
                  {isAdmin && (
                    <button onClick={() => setEditingName(!editingName)}>
                      {editingName ? <IconCheck /> : <IconEdit />}
                    </button>
                  )}
                </div>
              </div>

              {/* Botão coração ou alterar imagem */}
              {isAdmin ? (
                <>
                  <label htmlFor="imageUpload" className="cursor-pointer w-10 h-10 flex items-center justify-center">
                    <IconUpload class="w-10 h-10 stroke-[#229CFF] fill-[#229CFF]" />
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        console.log("Arquivo selecionado:", file);
                      }
                    }}
                  />
                </>
              ) : (
                <button onClick={() => setIsFavorited(!isFavorited)} className='py-[10px]'>
                  <IconHeart class={`${styled.icon} ${styled.heart} ${isFavorited ? styled.fill : ''}`} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className={`${styled.content} p-[4.5vw]`}>
          <StarRating rating={place.starRating} showNumber={true} isAdmin={isAdmin} />

          {/* Tags */}
          <div className={`${styled.tags} flex flex-wrap gap-2 mt-4`}>
            {editingTags ? (
              <input
                className="border rounded px-2 py-1 w-full"
                value={tagsValue.join(", ")}
                onChange={(e) =>
                  setTagsValue(
                    e.target.value.split(",").map((t) => ({
                      text: t.trim(),
                      style: {
                        bgColor: "#fff",
                        textColor: "#000",
                        borderColor: "#ccc"
                      }
                    }))
                  )
                }
              />
            ) : (
              place.tags.map(tag => {
                return (
                  <Tag
                    key={tag.text}
                    text={tag.text}
                    bgColor={tag.style.bgColor}
                    textColor={tag.style.textColor}
                    borderColor={tag.style.borderColor}
                  />
                );
              })
            )}
            {isAdmin && (
              <button onClick={() => setEditingTags(!editingTags)}>
                {editingTags ? <IconCheck /> : <IconEdit />}
              </button>
            )}
          </div>

          {/* Descrição */}
          <div
            className={`mt-4 p-[10px] rounded-[15px] ${isAdmin ? "bg-blue-50 border border-blue-400" : "bg-[#FFFFCD] border border-[#FFEE71]"} flex items-center justify-between`}
          >
            {editingDescription ? (
              <textarea
                className="w-full p-1 rounded border border-gray-300"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            ) : (
              <p><span style={labelStyle}>Descrição: </span>{descriptionValue}</p>
            )}
            {isAdmin && (
              <button className="ml-2" onClick={() => setEditingDescription(!editingDescription)}>
                {editingDescription ? <IconCheck /> : <IconEdit />}
              </button>
            )}
          </div>

          {/* Contato */}
          <div className={`${styled.contact} mt-4 flex gap-[5px] items-center`}>
            {editingContact ? (
              <input
                className="border rounded px-2 py-1"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
              />
            ) : (
              <p>
                <span style={labelStyle}>Contato: </span>
                <u><a href={`tel:${contactValue}`}>{contactValue}</a></u>
              </p>
            )}
            {isAdmin && (
              <button onClick={() => setEditingContact(!editingContact)}>
                {editingContact ? <IconCheck /> : <IconEdit />}
              </button>
            )}
            <IconChat class={`w-5 h-10 ${isAdmin ? "stroke-[#229CFF]" : "stroke-[#FF7022]"}`} />
          </div>

          {/* Endereço */}
          <div className={`${styled.adress} mt-4 flex items-center justify-between`}>
            {editingAddress ? (
              <input
                className="border rounded px-2 py-1 w-full"
                value={addressValue}
                onChange={(e) => setAddressValue(e.target.value)}
              />
            ) : (
              <p><span style={labelStyle}>Endereço: </span>{addressValue}</p>
            )}
            {isAdmin && (
              <button onClick={() => setEditingAddress(!editingAddress)}>
                {editingAddress ? <IconCheck /> : <IconEdit />}
              </button>
            )}
          </div>

          {/* Ver no mapa */}
          <div className={`${styled.map} mt-4 flex items-center justify-between`}>
            {editingAddress ? null : (
              <p>
                <span style={labelStyle}>Ver no mapa: </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressValue)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Abrir no Google Maps
                </a>
              </p>
            )}
            {isAdmin && (
              <button onClick={() => setEditingAddress(!editingAddress)}>
                {editingAddress ? <IconCheck /> : <IconEdit />}
              </button>
            )}
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
                  tags={route.locals[0].tags.map(tag => String(tag.text))} 
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
          {/* Rotas */}
          {/* {routesValue.length > 0 && (
            <div className={`${styled.rotas} mt-4 flex items-start justify-between`}>
              {editingRoutes ? (
                <textarea
                  className="border rounded px-2 py-1 w-full"
                  value={routesValue.join("\n")}
                  onChange={(e) => setRoutesValue(e.target.value.split("\n"))}
                />
              ) : (
                <div>
                  <p><span style={labelStyle}>Rotas:</span></p>
                  <ul className="list-disc list-inside ml-2">
                    {routesValue.map((route, i) => <li key={i}>{route}</li>)}
                  </ul>
                </div>
              )}
              {isAdmin && (
                <button onClick={() => setEditingRoutes(!editingRoutes)}>
                  {editingRoutes ? <IconCheck /> : <IconEdit />}
                </button>
              )}
            </div>
          )} */}

          {/* Eventos */}
          {eventsValue.length > 0 && (
            <div className={`${styled.eventos} mt-4 flex items-start justify-between`}>
              {editingEvents ? (
                <textarea
                  className="border rounded px-2 py-1 w-full"
                  value={eventsValue.join("\n")}
                  onChange={(e) =>
                    setEventsValue(
                      e.target.value.split("\n").map((line, i) => ({
                        id: String(i),
                        locals: [],
                        address: "",
                        description: line.trim(),
                        date: "",
                        time: "",
                        images: []
                      }))
                    )
                  }
                />
              ) : (
                <div>
                  <p><span style={labelStyle}>Eventos:</span></p>
                  <ul className="list-disc list-inside ml-2">
                    {eventsValue.map((event, i) => <li key={i}>{event.id}</li>)}
                  </ul>
                </div>
              )}
              {isAdmin && (
                <button onClick={() => setEditingEvents(!editingEvents)}>
                  {editingEvents ? <IconCheck /> : <IconEdit />}
                </button>
              )}
            </div>
          )}
          {/* Rotas */}
          {routesValue.length > 0 && (
            <div className={`${styled.rotas} mt-4 flex items-start justify-between`}>
              {editingRoutes ? (
                <textarea
                  className="border rounded px-2 py-1 w-full"
                  value={routesValue.join("\n")}
                  onChange={(e) =>
                    setRoutesValue(
                      e.target.value.split("\n").map((line, i) => ({
                        id: String(i),
                        name: line.trim(),
                        author: "",
                        favorited: false,
                        starRating: 0,
                        comment: "",
                        routeLength: "",
                        locals: [],
                        images: []
                      }))
                    )
                  }
                />
              ) : (
                <div>
                  <p><span style={labelStyle}>Rotas:</span></p>
                  <ul className="list-disc list-inside ml-2">
                    {routesValue.map((route, i) => <li key={i}>{route.id}</li>)}
                  </ul>
                </div>
              )}
              {isAdmin && (
                <button onClick={() => setEditingRoutes(!editingRoutes)}>
                  {editingRoutes ? <IconCheck /> : <IconEdit />}
                </button>
              )}
            </div>
          )}

          {/* Eventos */}
          {eventsValue.length > 0 && (
            <div className={`${styled.eventos} mt-4 flex items-start justify-between`}>
              {editingEvents ? (
                <textarea
                  className="border rounded px-2 py-1 w-full"
                  value={eventsValue.join("\n")}
                  onChange={(e) =>
                    setEventsValue(
                      e.target.value.split("\n").map((line, i) => ({
                        id: String(i),
                        locals: [],
                        address: "",
                        description: line.trim(),
                        date: "",
                        time: "",
                        images: []
                      }))
                    )
                  }
                />
              ) : (
                <div>
                  <p><span style={labelStyle}>Eventos:</span></p>
                  <ul className="list-disc list-inside ml-2">
                    {eventsValue.map((event, i) => <li key={i}>{event.id}</li>)}
                  </ul>
                </div>
              )}
              {isAdmin && (
                <button onClick={() => setEditingEvents(!editingEvents)}>
                  {editingEvents ? <IconCheck /> : <IconEdit />}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
      <Menu />
    </>
  );
};

export default InfoLocal;
