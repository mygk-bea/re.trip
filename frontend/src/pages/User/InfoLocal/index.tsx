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
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  return (
    <>
      <div className={`${styled.container} w-screen min-h-screen text-start pb-[15vh]`}>
        <div
          className={`${styled.header} bg-center bg-no-repeat bg-cover rounded-b-[50px]`}
          style={{ backgroundImage: `url(${place.images[0]})` }}
        >
          <div className={`${styled.overlay} flex flex-col justify-between lg:justify-center lg:gap-[20px] h-[52vh] lg:h-[20vh] w-full p-[9vw] lg:py-[0] bg-[rgba(255,255,255,0.2)] lg:bg-[rgba(255,255,255,0.6)]`}>
            <div className={`${styled.top} flex justify-between items-center z-[2]`}>
              <button onClick={() => window.history.back()}>
                <IconArrowChevron class={`${styled.icon} ${styled.arrow} w-6 h-6 md:w-8 md:h-8`} />
              </button>
              <button onClick={() => { /* Lógica para expandir imagem */ }}>
                <IconExpand class={`${styled.icon} ${styled.expand} w-6 h-6 md:w-8 md:h-8`} />
              </button>
            </div>
            <div className={`${styled.bottom} flex justify-between items-end z-[2]`}>
              <div>
                {place.verified && (
                  <div className={`${styled.warningVerification} flex items-center gap-2 mb-1`}>
                    <IconVerify class={`${styled.verify} w-4 h-4 md:w-5 md:h-5`} />
                    <p className={`${styled.text} text-[#47E417] text-xs md:text-sm`}>
                      Verificado por moderadores
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2 md:gap-3">
                  {editingName ? (
                    <input
                      className="text-white text-2xl md:text-3xl lg:text-4xl font-bold bg-black bg-opacity-30 px-2 py-1 rounded"
                      value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                    />
                  ) : (
                    <h1 className={`${styled.title} text-white text-2xl md:text-3xl lg:text-4xl font-bold`}>
                      {nameValue}
                    </h1>
                  )}
                  {isAdmin && (
                    <button onClick={() => setEditingName(!editingName)}>
                      {editingName ? <IconCheck /> : <IconEdit />}
                    </button>
                  )}
                </div>
              </div>

              {isAdmin ? (
                <>
                  <label htmlFor="imageUpload" className="cursor-pointer p-2">
                    <IconUpload class="w-8 h-8 md:w-10 md:h-10 stroke-[#229CFF] fill-[#229CFF]" />
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
                <button onClick={() => setIsFavorited(!isFavorited)} className='p-2'>
                  <IconHeart class={`${styled.icon} ${styled.heart} ${isFavorited ? styled.fill : ''} w-8 h-8 md:w-10 md:h-10`} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-8">
          <div className="w-full max-w-md lg:max-w-6xl px-6 flex flex-col lg:flex-row lg:gap-12 lg:items-start">
            <div className={`${styled.content} w-full lg:w-1/2 flex flex-col`}>
              <StarRating rating={place.starRating} showNumber={true} isAdmin={isAdmin} />

              <div className="flex flex-wrap gap-2 mt-4">
                {editingTags ? (
                  <input
                    className="border rounded px-2 py-1 w-full"
                    value={tagsValue.map(tag => tag.text).join(", ")}
                    onChange={(e) =>
                      setTagsValue(
                        e.target.value.split(",").map((t) => ({
                          text: t.trim(),
                          style: { bgColor: "#fff", textColor: "#000", borderColor: "#ccc" }
                        }))
                      )
                    }
                  />
                ) : (
                  tagsValue.map(tag => (
                    <Tag
                      key={tag.text}
                      text={tag.text}
                      bgColor={tag.style.bgColor}
                      textColor={tag.style.textColor}
                      borderColor={tag.style.borderColor}
                    />
                  ))
                )}
                {isAdmin && (
                  <button onClick={() => setEditingTags(!editingTags)}>
                    {editingTags ? <IconCheck /> : <IconEdit />}
                  </button>
                )}
              </div>

              <div className="mt-4 p-3 rounded-[15px] bg-[#FFFFCD] border border-[#FFEE71]">
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

              <div className="mt-4 flex gap-2 items-center">
                {editingContact ? (
                  <input
                    className="border rounded px-2 py-1"
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                  />
                ) : (
                  <p><span style={labelStyle}>Contato: </span><u><a href={`tel:${contactValue}`}>{contactValue}</a></u></p>
                )}
                {isAdmin && (
                  <button onClick={() => setEditingContact(!editingContact)}>
                    {editingContact ? <IconCheck /> : <IconEdit />}
                  </button>
                )}
                <IconChat class={`w-5 h-10 ${isAdmin ? "stroke-[#229CFF]" : "stroke-[#FF7022]"}`} />
              </div>

              <div className="mt-4">
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

              <div className="mt-4">
                {!editingAddress && (
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
              </div>
            </div>

            <div className={`${styled.content} w-full lg:w-1/2 flex flex-col gap-6 mt-6 lg:mt-0`}>
              {(routesValue.length > 0 || isAdmin) && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p><span style={labelStyle}>Rotas:</span></p>
                    {isAdmin && (
                      <button onClick={() => setEditingRoutes(!editingRoutes)}>
                        {editingRoutes ? <IconCheck /> : <IconEdit />}
                      </button>
                    )}
                  </div>
                  {editingRoutes ? (
                    <textarea
                      className="border rounded px-2 py-1 w-full h-24"
                      value={routesValue.map(route => route.name).join("\n")}
                      onChange={(e) =>
                        setRoutesValue(
                          e.target.value.split("\n").map((line, i) => ({
                            ...(routesValue[i] || {}),
                            id: routesValue[i]?.id || String(i),
                            name: line.trim(),
                            images: routesValue[i]?.images || [],
                            locals: routesValue[i]?.locals || [],
                          }))
                        )
                      }
                    />
                  ) : (
                    <div className="flex flex-col gap-2">
                      {routesValue.map((route) => (
                        <Card
                          key={route.id}
                          className="h-[80px] w-full cursor-pointer"
                          nameBackground={route.images[0]}
                          title={route.name}
                          isTags={route.locals?.some(local => local.tags.length > 0)}
                          tags={route.locals[0]?.tags.map(tag => String(tag.text))}
                          isBlur={true}
                          isOpacity={false}
                          positionText="top"
                          widthText="100%"
                          onClick={() => navigate('/user/rota/info')}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {(eventsValue.length > 0 || isAdmin) && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p><span style={labelStyle}>Eventos:</span></p>
                    {isAdmin && (
                      <button onClick={() => setEditingEvents(!editingEvents)}>
                        {editingEvents ? <IconCheck /> : <IconEdit />}
                      </button>
                    )}
                  </div>
                  {editingEvents ? (
                    <textarea
                      className="border rounded px-2 py-1 w-full h-24"
                      value={eventsValue.map(event => event.description).join("\n")}
                      onChange={(e) =>
                        setEventsValue(
                          e.target.value.split("\n").map((line, i) => ({
                            ...(eventsValue[i] || {}),
                            id: eventsValue[i]?.id || String(i),
                            description: line.trim(),
                            locals: eventsValue[i]?.locals || [],
                            address: eventsValue[i]?.address || "",
                            date: eventsValue[i]?.date || "",
                            time: eventsValue[i]?.time || "",
                            images: eventsValue[i]?.images || [],
                          }))
                        )
                      }
                    />
                  ) : (
                    <ul className="list-disc list-inside ml-2">
                      {eventsValue.map((event) => (
                        <li key={event.id}>{event.description || event.id}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default InfoLocal;
