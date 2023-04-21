import Navegador from '@/components/Navegador';
import style from '@/styles/Index.module.css';

export default function inicio(props) {
    return (
        <div className={style.index}>
            <Navegador
                destino='/estiloso'
                texto='Estiloso'
                cor='#9400d3'
            />
            <Navegador
                destino='/exemplo'
                texto='Exemplo'
            />
            <Navegador
                destino='/jsx'
                texto='JSX'
                cor='crimson'
            />
            <Navegador
                destino='/navegacao'
                texto='Navegação #01'
                cor='darkgray'
            />
            <Navegador
                destino='/cliente/sp-2/1234'
                texto='Navegação #02'
                cor='darkgreen'
            />
            <Navegador
                destino='/estado'
                texto='Componente com Estado'
                cor='darkblue'
            />
            <Navegador
                destino='/integracao_1'
                texto='Integração com API #01'
                cor='tomato'
            />
            <Navegador
                destino='/estatico'
                texto='Conteudo Estático'
                cor='#fa054a'
            />
        </div>
    );
}
