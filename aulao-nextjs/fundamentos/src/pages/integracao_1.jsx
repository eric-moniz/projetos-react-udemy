import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Integracao() {
    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados));
    }

    return (
        <Layout titulo='Integração com API #01'>
            <div>
                <input
                    type='number'
                    min={0}
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)}
                />
                <button onClick={obterCliente}>Obter cliente</button>
            </div>
            <ul>
                <li>Cód.: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    );
}
