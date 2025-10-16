import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';

import styled from './RotaCadastro.module.scss';
import Menu from '../../../../components/Menu';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Card from '../../../../components/Card';
import IconArrowChevron from '../../../../assets/icons/icon-arrow-chevron';
import IconPinSharp from '../../../../assets/icons/icon-pin-sharp';
import IconGrab from '../../../../assets/icons/icon-grab';

import { type Place } from '../../../../types/place';
import { allPlaces } from '../../../../constants/infosPlaces';

import { rotaService } from '../../../../core/services/RotaService';

interface RotaCadastroProps {
    initialLocations?: Place[]; 
}

const RotaCadastro: React.FC<RotaCadastroProps> = ({ initialLocations }) => {
    const navigate = useNavigate();
    const [routeName, setRouteName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const [routeImage, setRouteImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedLocations, setSelectedLocations] = useState<Place[]>(initialLocations || []);

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(selectedLocations);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setSelectedLocations(items);
    };

    const availableOptions = allPlaces.filter(
        (location) => !selectedLocations.some((selected) => selected.id === location.id)
    );

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            setRouteImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const routeData = {
            name: routeName,
            private: isPrivate,
            locations: selectedLocations.map(location => location.id),
            image: imageFile
        };

        console.log("Objeto a ser enviado para o backend:", routeData);
        
        // NOTA: Para enviar um arquivo para um backend de verdade, você geralmente
        // usaria um objeto `FormData`. Exemplo:
        // const formData = new FormData();
        // formData.append('name', routeName);
        // if (imageFile) {
        //   formData.append('image', imageFile);
        // }
        // E então enviaria o `formData` na sua requisição.
        
        navigate("/");
    };

    return (
        <div className="w-[95vw] flex flex-col items-center min-h-screen bg-white pt-[5vh] pb-[15vh]">
            <div className="w-full max-w-md lg:max-w-5xl px-4 sm:px-6">
                <div className="w-full flex items-center mb-6">
                    <button onClick={() => window.history.back()}>
                        <IconArrowChevron class={`${styled.icon} ${styled.arrow}`}/>
                    </button>
                </div>
            </div>

            <div className="w-[100%] max-w-md lg:max-w-5xl px-6 flex flex-col items-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    accept="image/*"
                />

                {routeImage ? (
                    <img src={routeImage} alt="Preview da Rota" className="w-32 h-32 rounded-full object-cover mb-2" />
                ) : (
                    <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                        <IconPinSharp class={`${styled.icon} ${styled.pin}`}/>
                    </div>
                )}

                <button type="button" onClick={handleImageClick} className={`${styled.link}`}>
                    {routeImage ? 'Alterar Imagem' : 'Adicionar Imagem'}
                </button>

                <h1 className="text-3xl font-bold text-orange-500 my-6">Nova Rota</h1>

                <form onSubmit={handleSubmit} className={`${styled.form} w-full flex flex-col items-center`}>
                    <div className="w-full flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-3xl font-bold text-orange-500 w-full my-4 text-start">Informações Gerais</h2>
                            <Input
                                label={"Nome da Rota"}
                                type={"text"}
                                placeholder={"Insira o nome..."}
                                name={"routeName"}
                                value={routeName}
                                onChange={(e) => setRouteName(e.target.value)}
                            />
                            <div className={`${styled.checkbox} w-full mt-4`}>
                                <label className="flex items-center cursor-pointer">
                                    <Checkbox
                                        checked={isPrivate}
                                        onChange={(e) => setIsPrivate(e.target.checked)}
                                        sx={{
                                            paddingLeft: 0,
                                            color: '#b6b6b6ff', 
                                            '&.Mui-checked': { color: '#FF7022' },
                                            '& .MuiTouchRipple-root': { color: '#FF7022' },
                                        }}
                                    />
                                    Criar Rota Privada
                                </label>
                                <p className="text-sm text-gray-500 text-start">Essa ficará disponível somente para você</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0">
                            <h2 className="text-3xl font-bold text-orange-500 w-full my-4 text-start">Locais da Rota</h2>
                            <Autocomplete
                                multiple
                                id="locations-autocomplete"
                                options={availableOptions}
                                getOptionLabel={(option) => option.name}
                                value={selectedLocations}
                                onChange={(_event, newValue) => {
                                    setSelectedLocations(newValue as Place[]);
                                }}
                                popupIcon={<IconArrowChevron class={styled.arrow__input} />}
                                noOptionsText="Sem locais disponíveis"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Locais"
                                        placeholder="Adicione locais à rota"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px',
                                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#FF7022', borderWidth: '2px' },
                                                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FF7022', borderWidth: '2px' },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FF7022', borderWidth: '2px' },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: '#FF7022',
                                                '&.Mui-focused': { color: '#FF7022' },
                                            },
                                        }}
                                    />
                                )}
                                className="w-full"
                            />
                            
                            {selectedLocations.length > 1 && (
                                <div className={`w-full text-start my-3`}>
                                    <p><span style={{color: '#FF7022', fontWeight:'bold'}}>Segure </span>e <span style={{color: '#FF7022', fontWeight:'bold'}}>Arraste</span> para organizar a sequência:</p>
                                </div>
                            )}

                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="locations">
                                    {(provided) => (
                                        <div 
                                            className="flex flex-col gap-4 mt-3 w-full"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {selectedLocations.map((location, index) => (
                                                <Draggable key={location.id} draggableId={location.id.toString()} index={index}>
                                                    {(provided) => (
                                                        <div 
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="flex items-center gap-2 w-full"
                                                        >
                                                            <IconGrab/>
                                                            <Card
                                                                className='h-[80px] w-full'
                                                                nameBackground={location.images[0]}
                                                                title={location.name}
                                                                isTags={location.tags.length > 0}
                                                                tags={location.tags.map(tag => tag.text)}
                                                                isBlur={true}
                                                                isOpacity={false}
                                                                positionText="top"
                                                                widthText="100%"
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-12">
                        <Button
                            colorText="#ff7022"
                            backgroundColor="#FFF"
                            colorShadow="#ff7022"
                            height="50px"
                            width="200px"
                            title="Salvar"
                            positionItems="center"
                            fontFamily="'Madimi One', sans-serif"
                            buttonType="submit"
                            isAdm={false}
                        />
                    </div>
                </form>
            </div>
            <Menu />
        </div>
    );
}

export default RotaCadastro;