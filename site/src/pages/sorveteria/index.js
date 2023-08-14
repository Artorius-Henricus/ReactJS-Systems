import './index.scss'
import Compcabecalho from '../../components/cabecalho'
import { useState } from 'react'

export default function SorveteriaPG() {
    const [sorvete, setSorvete] = useState('')
    const [preco, setPreco] = useState('')
    const [lista, setLista] = useState([])

    const [plcsorv, setPlcsorv] = useState('Casquinha')
    const [plcprec, setPlcprec] = useState('2,50')

    const [valortotal, setValortotal] = useState('')


    function Adicionar() {
        if (sorvete === ''){
            setPlcsorv('Inválido')
        }

        else if ( preco === '') {
            setPlcprec('Inválido')
        }

        else {
            let sorvetex = sorvete.trim();

            if (sorvetex === ''){
                setSorvete('')
                setPlcsorv('Valor Vazio')
            }
            else {
                let produto = {
                    nome: sorvete,
                    preço: Number(preco),
                }
        
                setLista([...lista, produto])
                setValortotal(Number(valortotal) + Number(preco))
            }
        }
    }
    return (
        <div className='pagina-sorveteria'>
            <Compcabecalho />

            <section className='corpo'>
                <div className='box'>
                    <div className='banner'>
                        <h1>Sorveteria</h1>
                        <img src="/assets/images/sorvetebanner.png" alt="Imagem Banner" />
                    </div>


                    <h1 className='titles'>Novo Item</h1>
                    <div className='inputs'>
                        <input type="text" placeholder={plcsorv} value={sorvete} onChange={e => setSorvete(e.target.value)}/>

                        <div>R$</div>
                        <input type="number" id='input2' placeholder={plcprec} value={preco} onChange={e => setPreco(e.target.value)}/>

                        <button onClick={Adicionar}>Adicionar</button>
                    </div>

                    <div className='valores'>
                        <h1 className='titles'>Lista de Compras</h1>
                        <h2>Total: R${valortotal}</h2>
                    </div>

                    <section className='lista'>
                        {lista.map(item =>
                            <div><h1>{item.nome}</h1> <h1>R$ {item.preço}</h1></div>
                        )}
                    </section>
                </div>
            </section>
        </div>
    )
}