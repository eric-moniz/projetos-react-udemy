import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '../styles/Estiloso.module.css';

export default function Estiloso() {
    return (
        <Layout titulo='Exemplo de CSS modularizado'>
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    );
}
