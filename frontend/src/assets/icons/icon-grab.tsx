import React from 'react';

interface GrabProps {
    class?: string;
}

const IconGrab: React.FC<GrabProps> = (props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.class}>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.875 7.5C17.22 7.5 17.5 7.79 17.5 8.125C17.5 8.47 17.2137 8.75 16.875 8.75H3.125C2.95974 8.74837 2.80172 8.682 2.68486 8.56514C2.568 8.44828 2.50163 8.29026 2.5 8.125C2.5 7.78 2.78625 7.5 3.125 7.5H16.875ZM16.875 11.25C17.22 11.25 17.5 11.54 17.5 11.875C17.5 12.22 17.2137 12.5 16.875 12.5H3.125C2.95974 12.4984 2.80172 12.432 2.68486 12.3151C2.568 12.1983 2.50163 12.0403 2.5 11.875C2.5 11.53 2.78625 11.25 3.125 11.25H16.875Z" fill="#A9A9A9" stroke="#A9A9A9"/>
        </svg>
    );
};

export default IconGrab;