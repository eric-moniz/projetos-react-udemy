import Cabecalho from '@/components/Cabecalho';
import Layout from '@/components/Layout';

export default function Exemplo() {
    return (
        <Layout titulo='Exemplo usando componentes'>
            <Cabecalho titulo='Next.js & React' />
            <Cabecalho titulo='Aprenda Next.js na prática' />
        </Layout>
    );
}
