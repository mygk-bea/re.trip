import styles from './Filtros.moule.scss'
import Tag from '../../components/Tag';
import Menu from '../../components/Menu';
import IconArrowChevron from '../../assets/icons/icon-arrow-chevron';

export function Filtros(){
    const tagsAtracoes = [{text: "Local Turístico", bgColor: "#F9F0E5", borderCOlor: "#BF6600", textColor: "#BF6600"},
        {text: "Rota Turística", bgColor: "#F9F0E5", borderCOlor: "#BF6600", textColor: "#BF6600"},
        {text: "Gastronônimica", bgColor: "#F9F0E5", borderCOlor: "#BF6600", textColor: "#BF6600"},
        {text: "Cultural", bgColor: "#F9F0E5", borderCOlor: "#BF6600", textColor: "#BF6600"},
        {text: "Compras", bgColor: "#F9F0E5", borderCOlor: "#BF6600", textColor: "#BF6600"},
        {text: "Natureza e Ecoturismo", bgColor: "#EBF8E6", borderCOlor: "#34B505", textColor: "#34B505"},
        {text: "Aventura e Diversão", bgColor: "#F4E5F9", borderCOlor: "#8F00BF", textColor: "#8F00BF"},
        {text: "Histórico", bgColor: "#F4E5F9", borderCOlor: "#8F00BF", textColor: "#8F00BF"},
        {text: "Religioso", bgColor: "#F4E5F9", borderCOlor: "#8F00BF", textColor: "#8F00BF"},
    ];

    const tagsLocalizacao = [
        {text: "Bofete", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Boituva", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Botucatu", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "essário Lange", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Cerquilho", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Itapetininga", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Tatuí", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Tietê", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Torre de Pedra", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Outras", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Centro", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Próximo à natureza", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Urbano", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
        {text: "Transporte Público", bgColor: "#F1F1F1", borderCOlor: "#757575", textColor: "#757575"},
    ];

    const tagsAceInc = [
        {text: "Vaga Comum", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Vaga DeFis", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Cadeirante", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Braile", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Áudio Descrição", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Pet Friendly", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Banheiros", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
        {text: "Elevadores e Rampas", bgColor: "#E5E8FB", borderCOlor: "#001DD7", textColor: "#001DD7"},
    ];

    return(
        <>
            <div className='container__filtros'>
                <div className='filtros__cabecalho'>
                    <IconArrowChevron class="styles.icon__arrow"/>
                    <h1>Filtros</h1>
                    <div className='cabecalho__divisor'></div>
                </div>

                <div className='filtros__atracoes'>
                    <div className='atracoes__titulo'><h2>Atrações</h2></div>
                    <div className='atracoes__conteudo'>

                    </div>
                </div>

                <div className='filtros__localizacao'>
                    <div className='localizacao__titulo'><h2>Localização</h2></div>
                    <div className='localizacao__conteudo'>

                    </div>
                </div>

                <div className='filtros__acessibilidade_inclusao'>
                    <div className='acessibilidade__titulo'><h2>Acessibilidade e Inclusão</h2></div>
                    <div className='acessibilidade__conteudo'>

                    </div>
                </div>

                <div className='menu'>
                    <Menu />
                </div>
            </div>
        </>
    );
}
