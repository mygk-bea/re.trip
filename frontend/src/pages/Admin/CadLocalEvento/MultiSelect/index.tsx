import { useState } from "react";
import IconArrowChevron from "../../../../assets/icons/icon-arrow-chevron";

interface Option {
    id: string | number;
    title: string;
}

interface MultiSelectProps {
    options: Option[];
    name: string;
    selected: (string | number)[];
    onChange: (e: { target: { name: string; value: (string | number)[] } }) => void;
}

const MultiSelect = ({ options, name, selected, onChange }: MultiSelectProps) => {
    const [open, setOpen] = useState(false);

    const toggleOption = (id: string | number) => {
        let newSelected: (string | number)[];
        if (selected.includes(id)) {
            newSelected = selected.filter(s => s !== id);
        } else {
            newSelected = [...selected, id];
        }
        onChange({ target: { name, value: newSelected } });
    };

    const closeDropdown = () => {
        setOpen(false);
    };

    return (
        <div className="relative w-60 lg:w-90">
            {/* Caixa principal */}
            <div
                className="border-b border-gray-400 pb-2 pl-3 pr-8 text-gray-700 bg-white cursor-pointer select-none text-left flex flex-wrap gap-1 min-h-[38px] items-center relative"
                onClick={() => setOpen(!open)}
            >
                {selected.length > 0
                    ? options.filter(o => selected.includes(o.id)).map(o => (
                        <span key={o.id} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm break-words">
                            {o.title}
                        </span>
                    ))
                    : <span className="text-gray-400">Selecione...</span>
                }

                {/* Ícone do lado direito */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <IconArrowChevron class="w-5 h-5 stroke-black" />
                </div>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute left-0 w-full bg-white border rounded shadow max-h-48 overflow-y-auto z-10 flex flex-col">
                    {/* Topo do dropdown com X */}
                    <div className="flex justify-end px-2 pt-2 gap-2">
                        {/* Botão fechar */}
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); closeDropdown(); }}
                            className="text-gray-400 hover:text-gray-600 text-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Opções */}
                    {options.map(option => {
                        const isSelected = selected.includes(option.id);
                        return (
                            <label
                                key={option.id}
                                className={`flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 ${isSelected ? 'bg-blue-50' : 'bg-white'}`}
                            >
                                <div className="relative mr-2 w-5 h-5 border border-gray-400 rounded">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => toggleOption(option.id)}
                                        className="absolute w-full h-full opacity-0 cursor-pointer"
                                    />
                                    {isSelected && (
                                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500 text-white">
                                            ✓
                                        </span>
                                    )}
                                </div>
                                {option.title}
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
