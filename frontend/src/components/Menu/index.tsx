import React from 'react';
import styled from './Menu.module.scss';
import IconHome from '../../assets/icons/icon-home';
import IconMap from '../../assets/icons/icon-map';
import IconBookmark from '../../assets/icons/icon-bookmark';
import IconPerson from '../../assets/icons/icon-person';
import { NavLink } from 'react-router-dom';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className={`${styled.menu} fixed mx-[4.54vw] bottom-0 left-0 right-0 border-t-3 border-black/20 bg-[#FFF]`}>
      <div className="flex justify-between items-center h-[8.3vh] p-[20px]">
        
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconHome class={`${styled.icon} ${styled.fill}`}/>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconMap class={`${styled.icon} ${styled.stroke}`}/>
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconBookmark class={`${styled.icon} ${styled.fill}`}/>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconPerson class={`${styled.icon} ${styled.fill}`}/>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
