import React from "react";
import styles from "./Card.module.scss";
import iconStar from '../../assets/icons/star.svg'

interface CardProps {
  height: string;
  width: string;
  nameBackground: string;
  title?: string;
  isTags?: boolean;
  tags?: string[];
  isRating?: boolean;
  numberRating?: number;
  isBlur?: boolean;
  isOpacity?: boolean;
  positionText?: "top" | "center" | "bottom";
  widthText?: string;
}

const Card: React.FC<CardProps> = ({
  widthText,
  nameBackground,
  height,
  width,
  title,
  isTags,
  tags,
  isRating,
  numberRating,
  isBlur,
  positionText = "bottom",
  isOpacity
}) => {
  const CardStyle = {
    "--height": height,
    "--width": width,
    backgroundImage: `url(${nameBackground})`,
    "--width-text": widthText,
    "--position-text": positionText
  } as React.CSSProperties;

  return (
    <div className={styles.card} style={CardStyle}>

      {isBlur && <div className={styles.blur__overlay}></div>}

      {isOpacity && <div className={styles.opacity__overlay}></div>}

      <div className={`${styles.content} ${styles[positionText]}`}>
        <h3 className={styles.title}>{title}</h3>
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
                {numberRating?.toFixed(1)}</div>
          )}
        </div>
      )}
    </div>
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
/> */}