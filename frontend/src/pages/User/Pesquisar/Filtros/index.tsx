import { useState } from "react";
import styles from './Filtros.module.scss';
import Tag from '../../../../components/Tag';
import Menu from '../../../../components/Menu';
import IconArrowChevron from '../../../../assets/icons/icon-arrow-chevron';
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import { dictDataRoutes } from "../../../../constants/typeUser";

interface FiltrosProps {
    isAdmin?: boolean;
    isGuia?: boolean;
}

const Filtros: React.FC<FiltrosProps> = ({ isAdmin = false, isGuia = false }) => {
    const navigate = useNavigate();

    const type = isAdmin ? 'admin' : isGuia ? 'guia' : 'user';
    const userData = dictDataRoutes(type);
    const { color } = userData;

    const [selectedTags, setSelectedTags] = useState<{ text: string, bgColor: string, borderColor: string, textColor: string }[]>([]);

    const handleTagClick = (tag: { text: string, bgColor: string, borderColor: string, textColor: string }) => {
        setSelectedTags((prevTags) =>
            prevTags.some(t => t.text === tag.text)
                ? prevTags.filter(t => t.text !== tag.text)
                : [...prevTags, tag]
        );
    };

    const tagsAtracoes = [
        { text: "Local Turístico", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600" },
        { text: "Rota Turística", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600" },
        { text: "Gastronônimica", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600" },
        { text: "Cultural", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600" },
        { text: "Compras", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600" },
        { text: "Natureza e Ecoturismo", bgColor: "#EBF8E6", borderColor: "#34B505", textColor: "#34B505" },
        { text: "Aventura e Diversão", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF" },
        { text: "Histórico", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF" },
        { text: "Religioso", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF" },
    ];

    const tagsLocalizacao = [
        { text: "Bofete", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Boituva", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Botucatu", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Cesário Lange", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Cerquilho", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Itapetininga", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Tatuí", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Tietê", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Torre de Pedra", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Outras", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Centro", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Próximo à natureza", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Urbano", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
        { text: "Transporte Público", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575" },
    ];

    const tagsAceInc = [
        { text: "Vaga Comum", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Vaga DeFis", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Cadeirante", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Braile", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Áudio Descrição", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Pet Friendly", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Banheiros", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
        { text: "Elevadores e Rampas", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7" },
    ];

    const tagsProfissional = [
        { text: "Com guia", bgColor: "#30CA01", borderColor: "#30CA01", textColor: "#fff" }
    ];

    return (
        <>
            <div className={styles.container__filtros}>
                <div className={styles.filtros__cabecalho}>
                    <div className={styles.cabecalho__icon_titulo}>
                        <button className={styles.icon__btn} onClick={() => navigate(-1)}>
                            <IconArrowChevron
                                class={styles.icon__arrow}
                            />
                        </button>
                        <h1 style={{ color: '#333' }}>Filtros</h1>
                    </div>
                    <div className={styles.cabecalho__divisor} style={{ background: userData.color }}></div>
                </div>

                <div className={`${styles.filtros__conteudos} px-[4.5vw]`}>
                    <div className={styles.filtros__atracoes}>
                        <div className={styles.atracoes__titulo}>
                            <h2 style={{ color: '#333' }}>Atrações</h2>
                        </div>
                        <div className={styles.atracoes__conteudo}>
                            {tagsAtracoes.map((tag, index) => (
                                <Tag
                                    key={`${index}-atracoes`}
                                    text={tag.text}
                                    bgColor={tag.bgColor}
                                    borderColor={tag.borderColor}
                                    textColor={tag.textColor}
                                    onClick={() => handleTagClick(tag)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.filtros__localizacao}>
                        <div className={styles.localizacao__titulo}>
                            <h2 style={{ color: '#333' }}>Localização</h2>
                        </div>
                        <div className={styles.localizacao__conteudo}>
                            {tagsLocalizacao.map((tag, index) => (
                                <Tag
                                    key={`${index}-localizacao`}
                                    text={tag.text}
                                    bgColor={tag.bgColor}
                                    borderColor={tag.borderColor}
                                    textColor={tag.textColor}
                                    onClick={() => handleTagClick(tag)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.filtros__acessibilidade_inclusao}>
                        <div className={styles.acessibilidade__titulo}>
                            <h2 style={{ color: '#333' }}>Acessibilidade e Inclusão</h2>
                        </div>
                        <div className={styles.acessibilidade__conteudo}>
                            {tagsAceInc.map((tag, index) => (
                                <Tag
                                    key={`${index}-aceinc`}
                                    text={tag.text}
                                    bgColor={tag.bgColor}
                                    borderColor={tag.borderColor}
                                    textColor={tag.textColor}
                                    onClick={() => handleTagClick(tag)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.filtros__localizacao}>
                        <div className={styles.localizacao__titulo}>
                            <h2 style={{ color: '#333' }}>Profissional</h2>
                        </div>
                        <div className={styles.localizacao__conteudo}>
                            {tagsProfissional.map((tag, index) => (
                                <Tag
                                    key={`${index}-profissional`}
                                    text={tag.text}
                                    bgColor={tag.bgColor}
                                    borderColor={tag.borderColor}
                                    textColor={tag.textColor}
                                    onClick={() => handleTagClick(tag)}
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div className="flex justify-end mt-10">
                    <Button
                        colorText={color}
                        outlineColor={color}
                        colorShadow={color}
                        backgroundColor="#fff"
                        height="40px"
                        width="250px"
                        isAdm={type === 'admin'}
                        title="Confirmar Filtros"
                        positionItems="center"
                        onClick={() => navigate(userData.pesquisar, { state: { selectedTags } })}
                    />
                </div>

                <div>
                    <Menu isAdmin={isAdmin} isGuia={isGuia} />
                </div>
            </div>
        </>
    );
};

export default Filtros;