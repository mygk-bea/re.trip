import React from "react";
import styles from './Box.module.scss';

interface BoxProps {
    label: string;
    text: string;
}

const Box: React.FC<BoxProps> = ({ label, text }) => {
    return (
        <div
            className={`${styles.container__box} inline-block rounded-lg p-2 w-full`}
        >
            <span className={styles.label}>{label}:</span> <span className={styles.text}>{text}</span>
        </div>
    );
};

{/* <Box 
  label="Endereço" 
  text="Rodovia SP 129, Km 43,5 - Pederneiras, Tatuí - SP, 18270-000" 
/> */}

export default Box;
