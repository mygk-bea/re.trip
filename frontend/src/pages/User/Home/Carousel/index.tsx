import React, { useState, useEffect } from "react";
import { Box, Button} from "@mui/material";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";

// --- Carousel ---
interface CarouselProps {
    items: React.ReactNode[];
    visibleCount?: number;
    autoplay?: boolean;
    autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    visibleCount = 1,
    autoplay = false,
    autoplayInterval = 3000,
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const total = items.length;

    const next = () => setStartIndex((prev) => (prev + visibleCount) % total);
    const prev = () => setStartIndex((prev) => (prev - visibleCount + total) % total);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(next, autoplayInterval);
        return () => clearInterval(interval);
    }, [startIndex, autoplay, autoplayInterval]);

    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
        const index = startIndex + i;
        if (index < total) {
            visibleItems.push(items[index]);
        }
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
            {total > visibleCount && (
                <Button onClick={prev} sx={{ minWidth: '30px', height: '30px', zIndex: 1 }}>
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform rotate-90" />
                </Button>
            )}
            <Box className={`flex gap-2 lg:gap-4 overflow-hidden flex-grow justify-start w-[70vw] lg:w-[40vw] 
            ${total <= visibleCount ? 'ml-9' : ''}`} >

                {visibleItems.map((item, idx) => (
                    <Box key={idx} sx={{ flexShrink: 0 }}>
                        {item}
                    </Box>
                ))}
            </Box>
            {total > visibleCount && (
                <Button onClick={next} sx={{ minWidth: '30px', height: '30px', zIndex: 1 }}>
                    <IconArrowChevron class="w-5 h-5 stroke-[#333] transform -rotate-90" />
                </Button>
            )}
        </Box>
    );
};

export default Carousel;