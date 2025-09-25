import React, { useState } from "react";
import styles from "./StarRating.module.scss";

interface StarRatingProps {
    rating?: number;
    editable?: boolean;
    showNumber?: boolean;
    onChange?: (rating: number) => void;
    isAdmin?: boolean; // nova prop
}

const StarRating: React.FC<StarRatingProps> = ({
    rating = 0,
    editable = false,
    showNumber = true,
    onChange,
    isAdmin = false,
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

            <div
                className={`flex gap-x-4 rounded-full px-3 py-1 w-fit border ${
                    isAdmin
                        ? "bg-blue-50 border-blue-400"
                        : "bg-[#fff2ed] border-orange-400"
                } ${styles.container__stars}`}
            >
                {[...Array(5)].map((_, index) => {
                    const value = index + 1;

                    return (
                        <span
                            key={value}
                            className={`relative text-xl ${editable ? "cursor-pointer" : ""
                                } ${isAdmin ? "text-yellow-500" : "text-yellow-400"}`}
                            onMouseLeave={() => editable && setHover(0)}
                        >
                            {editable ? (
                                <>
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
                    className={`font-semibold text-lg ${
                        isAdmin ? "text-[#229CFF]" : "text-orange-500"
                    }`}
                >
                    {currentRating.toFixed(1)}
                </span>
            )}
        </div>
    );
};

{/* <StarRating rating={4.5} showNumber={true} isAdmin />
<StarRating editable={true} showNumber={false} isAdmin onChange={(nota) => console.log(nota)} /> */}

export default StarRating;
