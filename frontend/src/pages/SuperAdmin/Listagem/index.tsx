import React from "react";
import { FiSearch, FiDownload, FiFilter, FiEdit } from "react-icons/fi";
import Sidebar from "../../../pages/SuperAdmin/Home/Sidebar";

interface TableItem {
    [key: string]: string;
}

interface ListagemProps {
    title: string;
    data: TableItem[];
}

export const Listagem: React.FC<ListagemProps> = ({ title, data }) => {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="flex min-h-screen bg-white text-gray-800">
            <Sidebar />

            <main className="flex-1 ml-16 p-4 md:p-8 w-full">
                <h1 className="text-3xl mt-4 font-bold mb-2 text-left">
                    Listagem de <span className="text-orange-500">{title}</span>:
                </h1>

                <div className="flex flex-wrap justify-end mb-4 space-x-2">
                    <button className="text-gray-400 hover:text-orange-500">
                        <FiSearch size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-orange-500">
                        <FiDownload size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-orange-500">
                        <FiFilter size={20} />
                    </button>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full border border-orange-500 text-left table-auto md:table-fixed">
                        <thead>
                            <tr className="bg-white border-b border-orange-500">
                                {headers.map((header) => (
                                    <th
                                        key={header}
                                        className="px-4 py-2 md:px-6 md:py-3 text-gray-700 capitalize font-bold"
                                    >
                                        {header}
                                    </th>
                                ))}
                                <th
                                    className="px-4 py-2 md:px-6 md:py-3 text-gray-700"
                                    style={{ fontWeight: 'bold' }}
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-orange-500">
                                    {headers.map((header) => (
                                        <td
                                            key={header}
                                            className="px-4 py-2 md:px-6 md:py-4 break-words"
                                            style={{ fontFamily: 'Rubrik, sans-serif' }}
                                        >
                                            {item[header]}
                                        </td>
                                    ))}
                                    <td
                                        className="px-4 py-2 md:px-6 md:py-4 text-orange-500 cursor-pointer"
                                        style={{ fontFamily: 'Rubrik, sans-serif'}}
                                    >
                                        <FiEdit size={20} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};
