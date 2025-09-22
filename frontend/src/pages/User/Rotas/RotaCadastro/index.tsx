import React, { useState } from 'react';

import styled from './RotaCadastro.module.scss';
import Menu from '../../../../components/Menu';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import IconArrowChevron from '../../../../assets/icons/icon-arrow-chevron';
import IconPinSharp from '../../../../assets/icons/icon-pin-sharp';
import Input from '../../../../components/Input';
import Card from '../../../../components/Card';
import IconGrab from '../../../../assets/icons/icon-grab';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Location {
    id: number;
    name: string;
    image: string;
    tags: string[];
}

const availableLocations: readonly Location[] = [
    { id: 1, name: 'Museu Paulo Setubal', image: '/images/places/img_bg_museu-paulo-setubal-1.png', tags: ['Histórico'] },
    { id: 2, name: 'Sítio do Carroção', image: '/images/places/img_bg_sitio-carrocao.png', tags: ['Natureza e Ecoturismo'] },
];

interface RotaCadastroProps {}

const RotaCadastro: React.FC<RotaCadastroProps> = () => {
    const navigate = useNavigate();
    const [routeName, setRouteName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedLocations, setSelectedLocations] = useState<Location[]>([availableLocations[0], availableLocations[1]]); 

    return (
        <div className="w-screen flex flex-col items-center min-h-screen bg-white pt-[5vh] pb-[15vh]">
            <div className="w-full px-[4.5vw] flex items-center mb-6">
                <button onClick={() => window.history.back()}>
                    <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
                </button>
            </div>

            <div className="w-full max-w-md px-6 flex flex-col items-center">
                <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                    <IconPinSharp class={`${styled.icon} ${styled.pin}`}/>
                </div>
                <a href="#" className={`${styled.link}`}>Adicionar Imagem</a>

                <h1 className="text-3xl font-bold text-orange-500 my-6">Nova Rota</h1>

                <div className={`${styled.form} w-full flex flex-col items-center`}>
                    <h2 className="text-3xl font-bold text-orange-500 w-full my-4 text-start">Informações Gerais</h2>

                    <Input
                        key={"routeName"}
                        label={"Nome da Rota"}
                        type={"text"}
                        placeholder={"Insira o nome..."}
                        name={"routeName"}
                        value={routeName}
                        onChange={(e) => setRouteName(e.target.value)}
                    />

                    <div className={`${styled.checkbox} w-full`}>
                        <label className="flex items-center mt-4 cursor-pointer">
                            <input 
                                type="checkbox"
                                checked={isPrivate}
                                onChange={(e) => setIsPrivate(e.target.checked)}
                                className="mr-2"
                            />
                            Criar Rota Privada
                        </label>
                        <p className="text-sm text-gray-500 text-start">Essa ficará disponível somente para você</p>
                    </div>

                    <Autocomplete
                        multiple
                        id="locations-autocomplete"
                        options={availableLocations}
                        getOptionLabel={(option) => option.name}
                        value={selectedLocations}
                        onChange={(_event, newValue) => {
                            setSelectedLocations(newValue);
                        }}
                        popupIcon={<IconArrowChevron class={styled.arrow__input} />}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="Locais"
                                placeholder="Adicione locais à rota"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FF7022',
                                            borderWidth: '2px', 
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FF7022',
                                            borderWidth: '2px', 
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#FF7022',
                                            borderWidth: '2px', 
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#FF7022',
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: '#FF7022',
                                        },
                                    },
                                }}
                            />
                        )}
                        className="w-full my-6"
                    />


                    <div className="flex flex-col gap-4 mb-4">
                        {selectedLocations.map((location) => (
                        <div key={location.id} className="flex items-center gap-2">
                            <IconGrab/>
                            <Card
                                className='h-[80px] w-[75vw]'
                                nameBackground={location.image}
                                title={location.name}
                                isTags={location.tags.length > 0}
                                tags={location.tags}
                                isBlur={true}
                                isOpacity={false}
                                positionText="top"
                                widthText="100%"
                            />
                        </div>
                        ))}
                    </div>

                    <Button
                        colorText="#ff7022"
                        backgroundColor="#FFF"
                        colorShadow="#ff7022"
                        height="50px"
                        width="200px"
                        title="Salvar"
                        positionItems="center"
                        fontFamily="'Madimi One', sans-serif"
                        isAdm={false}
                        onClick={() => { navigate("/") }}
                    />
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default RotaCadastro;