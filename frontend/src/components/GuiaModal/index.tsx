import React from "react";
import Tag from "../Tag";
import { TAG_COLORS } from "../../constants/tagColors";
import IconAvatar from "../../assets/icons/icon-avatar";

interface GuiaModalProps {
    nome: string;
    descricao: string;
    contato: string;
    tags: string[];
    fotoUrl?: string;
    onClose?: () => void;
}

const GuiaModal: React.FC<GuiaModalProps> = ({
    nome,
    descricao,
    contato,
    tags,
    fotoUrl,
    onClose,
}) => {
    const getTagColors = (tag: string) => {
        const normalized = tag.toLowerCase();
        if (normalized.includes("local")) return TAG_COLORS.atracoes.localTuristico;
        if (normalized.includes("rota")) return TAG_COLORS.atracoes.rotaTuristica;
        if (normalized.includes("cultural")) return TAG_COLORS.atracoes.cultural;
        if (normalized.includes("natureza")) return TAG_COLORS.atracoes.naturezaEcoturismo;
        if (normalized.includes("histórico") || normalized.includes("historico")) return TAG_COLORS.atracoes.historico;
        if (normalized.includes("tatu")) return TAG_COLORS.localizacao.tatui;
        if (normalized.includes("boituva")) return TAG_COLORS.localizacao.boituva;
        return { bgColor: "#EEE", textColor: "#666", borderColor: "#BBB" };
    };

    return (
        <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black/40 z-[9000]">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-[80vw] lg:w-[550px] max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div
                        className="w-30 h-30 rounded-full mb-3 lg:mb-2 flex items-center justify-center cursor-pointer overflow-hidden"
                        style={{ backgroundColor: '#14c414' }}
                    >
                        {fotoUrl ? (
                            <img src={fotoUrl} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <IconAvatar class="w-[5rem] h-[5rem] ml-[13px] fill-white opacity-70" />
                        )}
                    </div>
                    <h2 className="text-xl font-bold mb-3" style={{fontSize:'25px', color:'#14c414'}}>{nome}</h2>

                    <div className="flex flex-wrap gap-2 mb-4" style={{fontFamily:"'Rubik', sans-serif", overflowY:"auto", maxHeight:"100px"}}>
                        {tags.map((tag) => {
                        const { bgColor, textColor, borderColor } = getTagColors(tag);
                        return (
                            <Tag
                            key={tag}
                            text={tag}
                            bgColor={bgColor}
                            textColor={textColor}
                            borderColor={borderColor}
                            />
                        );
                        })}
                    </div>

                    <p style={{fontFamily: "'Rubik', sans-serif", textAlign:'left', width:'100%'}}><span style={{ fontWeight: 'bold', color: '#14c414' }}>Contato: </span>{contato}</p>
                    <div className="mt-4 p-3 rounded-[15px] bg-[#FFFFCD] border border-[#14c414] w-full">
                        <p style={{fontFamily: "'Rubik', sans-serif", textAlign:'left'}}><span style={{ fontWeight: 'bold', color: '#14c414' }}>Descrição: </span>{descricao}</p>
                    </div>
                </div>

                {onClose && (
                    <div className="flex justify-center mt-5">
                        <button
                            onClick={onClose}
                            className="text-sm font-medium text-600 border px-4 py-1 rounded-full hover:bg-lime-600 hover:text-white transition"
                            style={{color:'#14c414', borderColor:'#14c414'}}
                        >
                        Fechar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GuiaModal;
