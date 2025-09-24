import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import { categories } from '../../../constants/infos';
import IconFilter from '../../../assets/icons/icon-filter';
import IconSearch from '../../../assets/icons/icon-search';
import Menu from '../../../components/Menu';
import Card from '../../../components/Card';
import IconArrowChevron from '../../../assets/icons/icon-arrow-chevron';
import Tag from '../../../components/Tag';

const Pesquisar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

const initialTagsRaw = location.state?.selectedTags || [];
const initialTags = initialTagsRaw.map((tag: any) => ({ ...tag, id: uuidv4() }));

const [selectedTags, setSelectedTags] = useState(initialTags);

    return (
        <div>
            <div className="w-full">
                <div className="relative w-[100vw] mx-auto h-fit bg-[#FF8C3A] rounded-b-3xl overflow-hidden p-6 lg:w-[60vw] lg:h-[32vh] shadow-md">
                    <div className="absolute -left-20 -top-40 w-[110vw] lg:-top-30 h-[60vh] lg:w-[60vw] lg:h-[70vh] bg-orange-500 rounded-full z-0"></div>

                    <div className="cursor-pointer" onClick={() => navigate(-1)}>
                        <IconArrowChevron class="w-8 h-8 stroke-[#fff] transform rotate-90" />
                    </div>

                    <h2 className="text-xl relative font-bold z-10 mt-3 mb-3 text-white text-[40px] text-left lg:ml-10">
                        Bora se <br /> aventurar?
                    </h2>

                    {/* Campo de pesquisa */}
                    <div className="relative mb-3 lg:mb-6 flex justify-center">
                        <div className="flex items-center border-b border-white px-4 py-1 w-[90vw] sm:w-[30vw] lg:w-[50vw]">
                            <IconSearch class="text-white mr-3 w-10 h-10 sm:w-6 sm:h-6 lg:w-12 lg:h-12 stroke-white fill-white" />
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 w-[30%] lg:w-[60%] bg-transparent text-white placeholder-white placeholder:text-[15px] text-[15px] lg:placeholder:text-[20px] outline-none"
                                style={{ fontFamily: "'Rubrik', sans-serif", fontSize: '20px' }}
                            />
                        </div>
                        <button className="ml-3 cursor-pointer" onClick={() => navigate("/user/pesquisar/filtros")}>
                            <IconFilter class="text-white stroke-white fill-white w-10 h-10 sm:w-6 sm:h-6 lg:w-12 lg:h-12" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Se houver tags selecionadas, exiba-as */}
            {selectedTags.length > 0 && (
                <div className="mb-6 ml-4 pt-[3vh]">
                    <h2 className="text-2xl text-left text-[24px] lg:text-[30px] font-bold text-gray-900 mb-2 ml-2 lg:mb-4">Filtros</h2>
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {selectedTags.map((tag: any) => (
                            <Tag
                                key={tag.id}
                                text={tag.text}
                                bgColor={tag.bgColor}
                                textColor={tag.textColor}
                                borderColor={tag.borderColor}
                                dismissible={true}       // permite remover na página de pesquisa
                                showDismiss={true}       // mostra o botão de dismiss
    onDismiss={() => {
      setSelectedTags(selectedTags.filter((t: { id: any; }) => t.id !== tag.id));
    }}

                            />
                        ))}

                    </div>
                </div>
            )}

            <div className="px-6 py-2">
                <h2 className="text-2xl text-left text-[24px] lg:text-[30px] font-bold text-gray-900 mt-4 mb-6 lg:mb-8">
                    Descubra
                </h2>

                <div className="space-y-4 gap-2 lg:gap-4 flex flex-col items-center z-0 pb-25 lg:pb-30">
                    {categories.map((category) => (
                        <Card
                            key={category.id}
                            className="h-[15vh] w-[80vw] lg:h-[20vh] lg:w-[50vw]"
                            nameBackground={category.image}
                            title={category.title}
                            positionText="center"
                        />
                    ))}
                </div>
            </div>

            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Pesquisar;
