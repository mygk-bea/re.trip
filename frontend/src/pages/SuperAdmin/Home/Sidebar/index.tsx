import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiCalendar, FiUsers, FiMap } from "react-icons/fi";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const items = [
        { icon: <FiHome size={24} />, route: "/super-admin/home" },
        { icon: <FiCalendar size={24} />, route: "/super-admin/listagem-eventos" },
        { icon: <FiUsers size={24} />, route: "/super-admin/listagem-usuarios" },
        { icon: <FiMap size={24} />, route: "/super-admin/listagem-rotas" },
    ];

    return (
        <aside className="fixed top-0 left-0 w-16 h-screen bg-gray-50 flex flex-col items-center justify-between py-20 shadow-lg">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="text-gray-400 hover:text-orange-500 cursor-pointer"
                    onClick={() => navigate(item.route)}
                >
                    {item.icon}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
