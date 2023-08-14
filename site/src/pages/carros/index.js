import './index.scss'

import Compcabecalho from '../../components/cabecalho'
import { useState } from 'react'


export default function CarrosPG() {
    const [valortotal, setValortotal] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [jurosmensal, setJurosmensal] = useState('');

    const [parcelacalc, setParcelacalc] = useState('');
    const [valortotalcalc, setValortotalcalc] = useState('');

    function Calcular() {
        let x = (valortotal * jurosmensal * parcelas) / 100
        let vltot = x * parcelas
        setParcelacalc(x.toFixed(2))
        setValortotalcalc(vltot.toFixed(2))
    }


    return (
        <div className='pagina-carros'>
            <Compcabecalho />

            <section className='corpo'>
                <h1>Simulador de Compra de Veículo</h1>

                <div className='box'>
                    <div className='imagem'>
                        <img src="/assets/images/carro.png" alt="Imagem Carro" />
                    </div>

                    <div className='dir'>
                        <h2>Valor Total</h2>
                        <input type='number' value={valortotal} onChange={e => setValortotal(e.target.value)} />

                        <div className='group'>
                            <div>
                                <h2>Parcelas</h2>
                                <input type='number' id='inpt' value={parcelas} onChange={e => setParcelas(e.target.value)}/>
                            </div>
                            <div>
                                <h2>Juros Mensal (%)</h2>
                                <input type='number' value={jurosmensal} onChange={e => setJurosmensal(e.target.value)} />
                            </div>
                        </div>

                        <button onClick={Calcular}>Calcular</button>
                        <div className='resp'>
                            <h2>Parcela: <span>R${parcelacalc}</span></h2>
                            <h2>Valor Total: <span>R${valortotalcalc}</span></h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}