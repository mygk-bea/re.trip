import React, { useState } from "react";
import styles from "./Card.module.scss";
import iconStar from "../../assets/icons/star.svg";
import { HiX } from "react-icons/hi";

interface CardProps {
  nameBackground: string;
  onClick?: () => void;
  title?: string;
  description?: string;
  local?: string;
  date?: string;
  time?: string;
  isTags?: boolean;
  tags?: string[];
  isRating?: boolean;
  numberRating?: number;
  isBlur?: boolean;
  isOpacity?: boolean;
  positionText?: "top" | "center" | "bottom";
  widthText?: string;
  fontSize?: string;
  className?: string;
  height?: string;
  width?: string;
  isEvent?: boolean;
}

const Card: React.FC<CardProps> = ({
  nameBackground,
  onClick,
  title,
  description,
  local,
  date,
  time,
  isTags,
  tags,
  isRating,
  numberRating,
  isBlur,
  isOpacity,
  positionText = "bottom",
  widthText,
  fontSize,
  className = "",
  height,
  width,
  isEvent,
}) => {
  const [open, setOpen] = useState(false);

  const CardStyle = {
    backgroundImage: `url(${nameBackground})`,
    height,
    width,
    "--width-text": widthText,
    "--position-text": positionText,
    "--font-size-title": fontSize ? fontSize : "20px",
  } as React.CSSProperties;

  const handleCardClick = () => {
    if (isEvent) setOpen(true);
    else onClick?.();
  };

  return (
    <>
      <div
        className={`${styles.card} ${className}`}
        style={CardStyle}
        onClick={handleCardClick}
      >
        {isBlur && <div className={styles.blur__overlay}></div>}
        {isOpacity && <div className={styles.opacity__overlay}></div>}

        <div className={`${styles.content} ${styles[positionText]}`}>
          {title && <h3 className={styles.title}>{title}</h3>}

          {isEvent && (
            <div className="flex justify-end"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
                className="mt-2 mx-6 my-1 px-3 py-1 rounded-lg bg-[#FF7022] text-white text-sm font-semibold hover:bg-[#ff8b4d] transition"
              >
                Saiba Mais
              </button>
            </div>
          )}
        </div>

        {(isRating || isTags) && (
          <div className={styles.footer}>
            {isTags && tags && tags.length > 0 && (
              <div className={styles.tags}>
                <span className={styles.tag}>{tags[0]}</span>
              </div>
            )}
            {isRating && (
              <div className={styles.rating}>
                <img className={styles.icon__star} src={iconStar} alt="" />
                {numberRating?.toFixed(1)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal do evento */}
      {isEvent && open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[80%] max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 mr-2 mt-2 text-gray-500 hover:text-black text-xl font-bold"
            >
              <HiX />
            </button>

            <h2 className="text-xl font-bold mb-2 text-[#FF7022]">{title}</h2>

            {local && (
              <p className="text-sm text-gray-600 mb-2">
                <strong>Local:</strong> {local}
              </p>
            )}
            {date && (
              <p className="text-sm text-gray-600 mb-2">
                <strong>Data:</strong> {date}
              </p>
            )}
            {time && (
              <p className="text-sm text-gray-600 mb-4">
                <strong>Horário:</strong> {time}
              </p>
            )}

            {description && (
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;


// exemplo de chamada
{/* <Card
  height="100px"
  width="360px"
  nameBackground={imageGastronomia}
  title="Gastronomia"
  positionText="center"
/>

<Card
  height="100px"
  width="360px"
  nameBackground={imagemMariaTuca}
  title="Parque Ecológico Municipal Maria Tuca"
  positionText="top"
  isBlur
  isTags
  tags={["Aventura e Diversão"]}
/>

<Card
  height="100px"
  width="150px"
  nameBackground={imagemMuseu}
  title="Sítio - Museu"
  isOpacity
  isRating
  numberRating={4.1}
  positionText="center"
/>

<Card
  height="100px"
  width="150px"
  nameBackground={imagemMuseu}
  title="Sítio Museu"
  isOpacity
  positionText="center"
  widthText="70px"
/>

<Card
  height="100px"
  width="150px"
  nameBackground={imageBoituva}
  title="Boituva"
  isBlur
  positionText="center"
/>

<Card
  height="180px"
  width="360px"
  nameBackground={imagemEvento}
  title="Festival de Música de Tatuí"
  description="Venha curtir um dia de muita música e cultura no coração de Tatuí!"
  local="Praça da Matriz"
  date="10 de Dezembro"
  time="14h às 22h"
  isBlur
  positionText="bottom"
  isEvent
/>

*/}