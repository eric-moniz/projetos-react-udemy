import Layout from '@/components/Layout';

export function getStaticProps() {
    return {
        props: {
            numero: Math.random(),
        },
    };
}

export default function Estatico(props) {
    return (
        <Layout titulo='Conteúdo Estático'>
            <div>{props.numero}</div>
        </Layout>
    );
}

/* 
    Utiliza a função getStaticProps para contornar o erro que o NextJS gera ao atualizar uma página statica com conteudo aleatório quando está no ambiente DEV.
*/
