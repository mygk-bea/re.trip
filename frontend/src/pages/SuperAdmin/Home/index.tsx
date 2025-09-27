import React from "react";
import { Box } from "@mui/material";
import Carousel from "./Carousel";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Local {
    id: string;
    nome: string;
    admin: string;
    status: 'Aprovado' | 'Desaprovado' | 'Em Análise';
}

const HomeSuperAdmin: React.FC = () => {
    const locais: Local[] = [
        { id: '#0000LC', nome: 'Sítio do Carroção', admin: 'Username Admin', status: 'Aprovado' },
        { id: '#0000LC', nome: 'Casa sem Teto', admin: 'Username Admin', status: 'Desaprovado' },
        { id: '#0000LC', nome: 'Sítio Santa Rosa', admin: 'Username Admin', status: 'Em Análise' },
    ];

    const cardStatsArray = [
        { label: "Novos Usuários", value: 12 },
        { label: "Novos Locais", value: 5 },
        { label: "Novos Eventos", value: 3 },
        { label: "Novos Guias", value: 6 },
        { label: "Novos Admins", value: 8 },
    ];

    const cards = cardStatsArray.map((card, index) => (
        <Box
            key={index}
            className="p-6 rounded-xl shadow-lg border border-gray-200 text-white"
            style={{ background: 'linear-gradient(#FFB289 0%, #DD6626 100%)', minWidth: '250px' }}
        >
            <p className="text-4xl font-bold">{card.value}</p>
            <h3 className="text-2xl mt-2 font-semibold">{card.label}</h3>
        </Box>
    ));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Aprovado': return 'text-green-600';
            case 'Desaprovado': return 'text-red-600';
            case 'Em Análise': return 'text-yellow-600';
            default: return 'text-gray-600';
        }
    };

    // --- Dados para o gráfico de linha ---
    const lineData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Novos Usuários',
                data: [5, 8, 12, 7, 10, 15, 12],
                borderColor: '#DD6626',
                backgroundColor: 'rgba(221, 102, 38, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Novos Admins',
                data: [2, 4, 3, 5, 6, 5, 5],
                borderColor: '#FFB289',
                backgroundColor: 'rgba(255, 178, 137, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Novos Guias',
                data: [3, 5, 4, 6, 7, 6, 8],
                borderColor: '#FFA500',
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' as const },
        },
    };

    return (
        <div className="min-h-screen p-8 w-full">
            <div className="w-full">
                {/* Cabeçalho */}
                <div className="p-6 text-left">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Olá, <br /><span className="text-[var(--color-primary-user)]">Super Admin</span>!
                    </h1>
                </div>

                {/* Carousel dos cards */}
                <div className="mt-[2%]">
                    <Carousel items={cards} visibleCount={3} autoplay autoplayInterval={4000} />
                </div>

                {/* Divisor */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Gráfico de linha */}
                <div className="mt-[5%]">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                        Tendência de <span className="text-[var(--color-primary-user)]">Novos Usuários</span>:
                    </h2>
                    <Line data={lineData} options={lineOptions} />
                </div>

                {/* Divisor */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Listagem de Locais */}
                <div className="mt-[5%] pb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
                        Listagem de <span className="text-[var(--color-primary-user)]">Locais</span>:
                    </h2>

                    <div className="space-y-2 w-full">
                        {locais.map((local, index) => (
                            <div key={index} className="flex items-center py-3 border-b border-gray-200">
                                <div className="w-1/6 text-gray-600">{local.id}</div>
                                <div className="w-2/6 text-gray-900 font-medium">{local.nome}</div>
                                <div className="w-2/6 text-gray-600">{local.admin}</div>
                                <div className={`w-1/6 font-medium ${getStatusColor(local.status)}`}>{local.status}</div>
                                <div className="w-1/12 flex justify-end">
                                    <button
                                        className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                                        title="Mudar status"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-600 hover:text-gray-800"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSuperAdmin;
