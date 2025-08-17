import React, { useState } from "react";
import styles from "./StarRating.module.scss";

interface StarRatingProps {
    rating?: number; // Avaliação inicial ou fixa (ex: 3.5)
    editable?: boolean; // Se pode ou não avaliar
    showNumber?: boolean; // Se exibe ou não o número da nota
    onChange?: (rating: number) => void; // Callback ao mudar a nota
}

const StarRating: React.FC<StarRatingProps> = ({
    rating = 0,
    editable = false,
    showNumber = true,
    onChange,
}) => {
    const [currentRating, setCurrentRating] = useState(rating);
    const [hover, setHover] = useState(0);

    const handleClick = (value: number) => {
        if (!editable) return;
        setCurrentRating(value);
        if (onChange) onChange(value);
    };

    const getStarIcon = (index: number) => {
        const value = index + 1;
        const effectiveRating = hover || currentRating;

        if (effectiveRating >= value) {
            return "fas fa-star"; // estrela cheia
        } else if (effectiveRating >= value - 0.5) {
            return "fas fa-star-half-alt"; // meia estrela
        } else {
            return "far fa-star"; // estrela vazia
        }
    };

    return (
        <div className="flex items-center gap-x-2 w-fit">

            <div className={`${styles.container__stars} flex gap-x-4 rounded-full border border-orange-400 px-3 py-1 w-fit`}>
                {[...Array(5)].map((_, index) => {
                    const value = index + 1;

                    return (
                        <span
                            key={value}
                            className={`relative text-xl ${editable ? "cursor-pointer" : ""
                                } text-yellow-400`}
                            onMouseLeave={() => editable && setHover(0)}
                        >
                            {editable ? (
                                <>
                                {/* controle de meia estrela */}
                                    <span
                                        className="absolute left-0 top-0 w-1/2 h-full"
                                        onMouseEnter={() => setHover(value - 0.5)}
                                        onClick={() => handleClick(value - 0.5)}
                                    />

                                    <span
                                        className="absolute right-0 top-0 w-1/2 h-full"
                                        onMouseEnter={() => setHover(value)}
                                        onClick={() => handleClick(value)}
                                    />
                                </>
                            ) : null}

                            <i className={`${getStarIcon(index)} ${styles.star} pointer-events-none`}></i>
                        </span>
                    );
                })}
            </div>

            {showNumber && (
                <span
                    className="text-orange-500 font-semibold text-lg"
                >
                    {currentRating.toFixed(1)}
                </span>
            )}
        </div>
    );
};

{/* 
<StarRating rating={4.5} showNumber={true} />

<StarRating editable={true} showNumber={false} onChange={(avaliacao) => console.log("Nota:", avaliacao)} />*/}

export default StarRating;
