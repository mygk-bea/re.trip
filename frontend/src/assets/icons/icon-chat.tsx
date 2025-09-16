import React from 'react';

interface ChatProps {
    class?: string;
}

const IconChat: React.FC<ChatProps> = (props) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
            <path d="M20 12C20 8.229 20 6.343 18.828 5.172C17.656 4.001 15.771 4 12 4C8.229 4 6.343 4 5.172 5.172C4.001 6.344 4 8.229 4 12V18C4 18.943 4 19.414 4.293 19.707C4.586 20 5.057 20 6 20H12C15.771 20 17.657 20 18.828 18.828C19.999 17.656 20 15.771 20 12Z" stroke="#FF7022" strokeWidth="2"/>
            <path d="M9 10H15M9 14H12" stroke="#FF7022" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default IconChat;