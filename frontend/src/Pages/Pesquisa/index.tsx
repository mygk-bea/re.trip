import React, { useState } from 'react';

import { categories } from '../../constants/infos'
import IconFilter from '../../assets/icons/icon-filter';
import IconSearch from '../../assets/icons/icon-search';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

const Pesquisa: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <div className="w-full">
                <div className="relative w-[100vw] mx-auto h-[30vh] bg-[#FF8C3A] rounded-b-3xl overflow-hidden p-6 lg:w-[60vw] lg:h-[30vh] shadow-md">
                    <div className="absolute -left-20 -top-40 w-[110vw] lg:-top-50 h-[60vh] lg:w-[55vw] lg:h-[60vh] bg-orange-500 rounded-full z-0"></div>
                    <h2 className="text-2xl relative font-bold lg:mt-3 mt-2 z-10 text-white text-[30px] sm:text-[40px] text-left lg:ml-10">
                        Bora se <br />aventurar?
                    </h2>

                    <div className="relative lg:mt-8 mt-3 lg:mb-6 mb-3 flex justify-center">
                        <div className="flex items-center border-b border-white px-4 py-1 w-[90vw] sm:w-[70vw] lg:w-[50vw]">
                            <IconSearch class="text-white mr-3 w-10 h-10 lg:w-12 lg:h-12 stroke-white fill-white" />
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 bg-transparent text-white placeholder-white placeholder:text-[16px] lg:placeholder:text-[20px] outline-none"
                                style={{ fontFamily: "'Rubrik', sans-serif" }}
                            />
                        </div>
                        <button className="ml-3">
                            <IconFilter class="text-white stroke-white fill-white w-10 h-10 lg:w-12 lg:h-12" />
                        </button>
                    </div>
                </div>

            </div>

            <div className="px-6 py-5 pt-[3vh]">
                <h2 className="text-2xl text-left text-[24px] lg:text-[30px] font-bold text-gray-900 mb-6 lg:mb-8">
                    Descubra
                </h2>

                <div className="space-y-4 gap-2 lg:gap-4 flex flex-col items-center z-0 pb-20 lg:pb-30">
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
                <Menu></Menu>
            </div>
        </div>


    );
};

export default Pesquisa;
