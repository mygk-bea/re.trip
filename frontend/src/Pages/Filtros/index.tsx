import styles from './Filtros.module.scss'
import Tag from '../../components/Tag';
import Menu from '../../components/Menu';
import IconArrowChevron from '../../assets/icons/icon-arrow-chevron';
import { useNavigate } from "react-router-dom";

const Filtros: React.FC = () => {
    const navigate = useNavigate();

    const tagsAtracoes = [{text: "Local Turístico", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600"},
        {text: "Rota Turística", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600"},
        {text: "Gastronônimica", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600"},
        {text: "Cultural", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600"},
        {text: "Compras", bgColor: "#F9F0E5", borderColor: "#BF6600", textColor: "#BF6600"},
        {text: "Natureza e Ecoturismo", bgColor: "#EBF8E6", borderColor: "#34B505", textColor: "#34B505"},
        {text: "Aventura e Diversão", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF"},
        {text: "Histórico", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF"},
        {text: "Religioso", bgColor: "#F4E5F9", borderColor: "#8F00BF", textColor: "#8F00BF"},
    ];

    const tagsLocalizacao = [
        {text: "Bofete", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Boituva", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Botucatu", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Cesário Lange", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Cerquilho", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Itapetininga", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Tatuí", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Tietê", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Torre de Pedra", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Outras", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Centro", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Próximo à natureza", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Urbano", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
        {text: "Transporte Público", bgColor: "#F1F1F1", borderColor: "#757575", textColor: "#757575"},
    ];

    const tagsAceInc = [
        {text: "Vaga Comum", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Vaga DeFis", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Cadeirante", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Braile", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Áudio Descrição", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Pet Friendly", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Banheiros", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
        {text: "Elevadores e Rampas", bgColor: "#E5E8FB", borderColor: "#001DD7", textColor: "#001DD7"},
    ];

    return (
        <>
            <div className={styles.container__filtros}>
                <div className={styles.filtros__cabecalho}>
                    <div className={styles.cabecalho__icon_titulo} >
                        <button className={styles.icon__btn} onClick={() => navigate(-1)}>
                            <IconArrowChevron class={styles.icon__arrow}/>
                        </button>
                        <h1>Filtros</h1>
                    </div>
                    <div className={styles.cabecalho__divisor}></div>
                </div>

                <div className={styles.filtros__conteudos}>
                    <div className={styles.filtros__atracoes}>
                <div className={styles.atracoes__titulo}><h2>Atrações</h2></div>
                <div className={styles.atracoes__conteudo}>
                    {tagsAtracoes.map((tag, index) => (
                        <Tag
                            key={index}
                            text={tag.text}
                            bgColor={tag.bgColor}
                            borderColor={tag.borderColor}
                            textColor={tag.textColor}
                        />
                    ))}
                </div>
                    </div>
                    
                    <div className={styles.filtros__localizacao}>
                    <div className={styles.localizacao__titulo}><h2>Localização</h2></div>
                    <div className={styles.localizacao__conteudo}>
                        {tagsLocalizacao.map((tag, index) => (
                            <Tag
                                key={index}
                                text={tag.text}
                                bgColor={tag.bgColor}
                                borderColor={tag.borderColor}
                                textColor={tag.textColor}
                            />
                        ))}
                    </div>
                    </div>
                        
                    <div className={styles.filtros__acessibilidade_inclusao}>
                    <div className={styles.acessibilidade__titulo}><h2>Acessibilidade e Inclusão</h2></div>
                    <div className={styles.acessibilidade__conteudo}>
                        {tagsAceInc.map((tag, index) => (
                            <Tag
                                key={index}
                                text={tag.text}
                                bgColor={tag.bgColor}
                                borderColor={tag.borderColor}
                                textColor={tag.textColor}
                            />
                        ))}
                    </div>
                    </div>
                </div>

                <div className={styles.menu}>
                    <Menu />
                </div>

            </div>
        </>
    );
};

export default Filtros;