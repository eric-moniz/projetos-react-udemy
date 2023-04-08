import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Estado() {
    const [state, setState] = useState(0);

    function incrementar() {
        setState(state + 1);
    }

    return (
        <Layout titulo='Componente com Estado'>
            <span>{state}</span>
            <div>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </Layout>
    );
}
