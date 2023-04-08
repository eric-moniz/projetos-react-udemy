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
        </div>
    );
}
