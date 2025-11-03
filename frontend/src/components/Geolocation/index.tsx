import React, { useState, useRef, useEffect } from 'react';
import styled from './Geolocation.module.scss';
import IconPin from '../../assets/icons/icon-pin';
import IconArrowChevron from '../../assets/icons/icon-arrow-chevron';
import IconPlus from '../../assets/icons/icon-plus';

interface City {
  city: string;
  uf: string;
}

interface GeolocationProps {
  cities: City[];
  admin?: boolean; 
  guia?: boolean;
}

const Geolocation: React.FC<GeolocationProps> = ({ cities: initialCities, admin, guia }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<City>(initialCities[0]);
  const [cities, setCities] = useState<City[]>(initialCities);
  const [modalOpen, setModalOpen] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newUf, setNewUf] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const availableCities = cities.filter(c => c.city !== selected.city || c.uf !== selected.uf);

  const handleSelect = (city: City) => {
    setSelected(city);
    setOpen(false);
  };

  const handleAddCity = () => {
    if (newCity.trim() && newUf.trim()) {
      const newEntry = { city: newCity.trim(), uf: newUf.trim() };
      setCities(prev => [...prev, newEntry]);
      setSelected(newEntry);
      setModalOpen(false);
      setNewCity("");
      setNewUf("");
      setOpen(false);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className={`relative flex items-center justify-between ${styled.geolocation}`}
    >
      <IconPin  class={`${styled.icon} ${admin ? 'stroke-[#229CFF]' : guia ? 'stroke-[#14c414]' : 'stroke-[#FF7022]'}`}/>
      <p>{selected.city} - {selected.uf}</p>

      <button
        onClick={() => setOpen(!open)}
        className="p-1 rounded-full hover:bg-gray-100 transition"
      >
        <IconArrowChevron class={`${styled.icon} ${styled.arrowIcon} transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`${styled.dropdown} 
        absolute w-full right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg overflow-hidden
        transition-[max-height] duration-200 ease-out z-50
        ${open ? "max-h-42" : "max-h-0 border-0"}`}>

        <ul className="flex flex-col overflow-y-auto max-h-42 pb-12">
          {availableCities.map((c, i) => (
            <li
              key={i}
              className="px-4 py-2 active:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(c)}
            >
              {c.city} - {c.uf}
            </li>
          ))}
        </ul>

        <div
          className="absolute bottom-0 w-full bg-white border-t border-gray-200 flex justify-between items-center px-4 py-2 z-50 active:bg-gray-100 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Adicionar cidade
          <IconPlus class={`${styled.plus} border-1 border-gray-500`} />
        </div>
      </div>

      {modalOpen && (
        <div className={`${styled.modal} fixed inset-0 flex items-center justify-center z-50`}>
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Adicionar Cidade</h2>
            <input
              type="text"
              placeholder="Cidade"
              className="w-full mb-2 p-2 border-b rounded"
              value={newCity}
              onChange={e => setNewCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              className="w-full mb-4 p-2 border-b rounded"
              value={newUf}
              onChange={e => setNewUf(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded active:bg-gray-300"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded active:bg-blue-600"
                onClick={handleAddCity}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Geolocation;

/* Chamada
  <Geolocation 
    cities={
      [
        { city: 'Tatuí', uf: 'SP' },
        { city: 'Boituva', uf: 'SP' },
        { city: 'Bofete', uf: 'SP' },
        { city: 'Laranjal Paulista', uf: 'SP' }
      ]
    } 
  />
*/