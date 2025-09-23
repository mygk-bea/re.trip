import React from 'react';
import styled from './Menu.module.scss';
import IconHome from '../../assets/icons/icon-home';
import IconMap from '../../assets/icons/icon-map';
import IconBookmark from '../../assets/icons/icon-bookmark';
import IconPerson from '../../assets/icons/icon-person';
import { NavLink } from 'react-router-dom';
import IconHeart from '../../assets/icons/icon-heart';
import IconPin from '../../assets/icons/icon-pin';

// Chamada: <Menu isAdmin/> caso não seja Admin não precisa colocar nada

interface MenuProps {
  isAdmin?: boolean;
}

const Menu: React.FC<MenuProps> = ({ isAdmin = false }) => {
  const routesUser = [
    "/user/home", 
    "/user/pesquisar", 
    "/user/meu-perfil/favoritos", 
    "/user/meu-perfil"
  ];

  const routesAdmin = [
    "/admin/home", 
    "/admin/meu-perfil/meus-locais",
    "/admin/meu-perfil"
  ];

  return (
    <div data-admin={isAdmin} className={`${styled.menu} fixed mx-[4.54vw] bottom-0 left-0 right-0 border-t-3 border-black/20 bg-[#FFF]`}>
      <div className="flex justify-between items-center h-[8.3vh] p-[20px]">
        
        <NavLink
          to={isAdmin ? routesAdmin[0] : routesUser[0]}
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconHome class={`${styled.icon} ${styled.fill}`}/>
        </NavLink>

        <NavLink
          style={ isAdmin ? { display: 'none' } : {}}
          to={routesUser[1]}
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconMap class={`${styled.icon} ${styled.stroke}`}/>
        </NavLink>

        <NavLink
          to={isAdmin ? routesAdmin[1] : routesUser[2]}
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          {isAdmin ? (
            <IconPin class={`${styled.icon} ${styled.stroke}  ${styled.pin}`}/>
          ) : (
            <IconHeart class={`${styled.icon} ${styled.stroke}`}/>
          )}
        </NavLink>

        <NavLink
          to={isAdmin ? routesAdmin[2] : routesUser[3]}
          end
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