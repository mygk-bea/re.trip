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

  function createGoogleCalendarUrl(title: string, description: string, local: string, date: string, time: string) {
    // Ex.: "12 a 15 de julho de 2025"
    const dateRegex = /(\d{1,2})\s*a\s*(\d{1,2})\s*de\s*([a-zç]+)\s*de\s*(\d{4})/i;
    const match = date.match(dateRegex);

    if (!match) {
      console.error("Formato de data inválido:", date);
      return "#";
    }

    const startDay = match[1];
    const endDay = match[2];
    const monthName = match[3].toLowerCase();
    const year = match[4];

    const meses: Record<string, string> = {
      janeiro: "01",
      fevereiro: "02",
      março: "03",
      abril: "04",
      maio: "05",
      junho: "06",
      julho: "07",
      agosto: "08",
      setembro: "09",
      outubro: "10",
      novembro: "11",
      dezembro: "12",
    };

    const month = meses[monthName];

    // Ex.: "10h às 22h"
    const timeRegex = /(\d{1,2})h.*?(\d{1,2})h/i;
    const t = time.match(timeRegex);

    if (!t) {
      console.error("Formato de horário inválido:", time);
      return "#";
    }

    const startHour = t[1].padStart(2, "0");
    const endHour = t[2].padStart(2, "0");

    const start = new Date(`${year}-${month}-${startDay}T${startHour}:00:00`);
    const end = new Date(`${year}-${month}-${endDay}T${endHour}:00:00`);

    const format = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const startStr = format(start);
    const endStr = format(end);

    const encodedTitle = encodeURIComponent(title || "");
    const encodedDescription = encodeURIComponent(description || "");
    const encodedLocation = encodeURIComponent(local || "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startStr}/${endStr}&details=${encodedDescription}&location=${encodedLocation}`;
  }



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
          {title && (
            <h3
              className={`${styles.title} ${isEvent ? "text-2xl font-bold" : "text-[20px]"
                }`}
            >
              {title}
            </h3>
          )}
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

            <a
              onClick={(e) => e.stopPropagation()}
              href={createGoogleCalendarUrl(
                title ?? "",
                description ?? "",
                local ?? "",
                date ?? "",
                time ?? ""
              )} target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-[#FF7022] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#5a95ff] transition"
            >
              Adicionar ao Google Agenda
            </a>

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