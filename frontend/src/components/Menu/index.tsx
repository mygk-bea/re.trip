import React from "react";
import styled from "./Menu.module.scss";
import IconHome from "../../assets/icons/icon-home";
import IconMap from "../../assets/icons/icon-map";
import IconPerson from "../../assets/icons/icon-person";
import { NavLink } from "react-router-dom";
import IconHeart from "../../assets/icons/icon-heart";
import IconPin from "../../assets/icons/icon-pin";

// Chamada: <Menu isAdmin/> ou <Menu isGuia/>

interface MenuProps {
  isAdmin?: boolean;
  isGuia?: boolean;
}

const Menu: React.FC<MenuProps> = ({ isAdmin = false, isGuia = false }) => {
  const type = isAdmin ? "admin" : isGuia ? "guia" : "user";
  const routesUser = [
    "/user/home",
    "/user/pesquisar",
    "/user/meu-perfil/favoritos",
    "/user/meu-perfil",
  ];
  const routesAdmin = [
    "/admin/home",
    "/admin/meu-perfil/meus-locais",
    "/admin/meu-perfil",
  ];
  const routesGuia = [
    "/guia/home",
    "/guia/pesquisar",
    "/guia/meu-perfil/minhas-rotas",
    "/guia/meu-perfil",
  ];

  return (
    <div
      data-admin={isAdmin}
      data-guia={isGuia}
      className={`${styled.menu} fixed mx-[4.54vw] bottom-0 left-0 right-0 border-t-3 border-black/20 bg-[#FFF] z-[2]`}
    >
      <div className="flex justify-between items-center h-[8.3vh] p-[20px]">
        <NavLink
          to={
            type === "admin"
              ? routesAdmin[0]
              : type === "guia"
              ? routesGuia[0]
              : routesUser[0]
          }
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconHome class={`${styled.icon} ${styled.fill}`} />
        </NavLink>

        <NavLink
          style={type === "admin" ? { display: "none" } : {}}
          to={type === "guia" ? routesGuia[1] : routesUser[1]} 
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconMap class={`${styled.icon} ${styled.stroke}`} />
        </NavLink>

        <NavLink
          to={
            type === "admin"
              ? routesAdmin[1]
              : type === "guia"
              ? routesGuia[2]
              : routesUser[2]
          }
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          {type === "user" ? (
            <IconHeart class={`${styled.icon} ${styled.stroke}`} />
          ) : (
            <IconPin class={`${styled.icon} ${styled.stroke} ${styled.pin}`} />
          )}
        </NavLink>

        <NavLink
          to={
            type === "admin"
              ? routesAdmin[2]
              : type === "guia"
              ? routesGuia[3]
              : routesUser[3]
          }
          end
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? styled.fillActive : ""}`
          }
        >
          <IconPerson class={`${styled.icon} ${styled.fill}`} />
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
