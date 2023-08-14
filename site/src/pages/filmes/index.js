import './index.scss'

import Compcabecalho from '../../components/cabecalho'
import { useState } from 'react'
import axios from 'axios'


export default function FilmePG(){
    const [nmfilme, setNmfilme] = useState('')
    const [ltfilme, setLtfilme] = useState([])

    async function Buscar() {
        let url = `https://www.omdbapi.com/?apikey=b843fde5&s=${nmfilme.toUpperCase()}`
        let resp = await axios.get(url)
        
        setLtfilme([...resp.data.Search])
    }


    return(
        <div className='pagina-filmes'>
            <Compcabecalho />

            <section className='corpo'>

                <div className='box'>
                    <div className='banner'>
                        <img src="/assets/images/bannerfilme.png" alt="Filme Banner" />
                        <h1>IMDB</h1>
                    </div>

                    <div className='intrc'>
                        <h1>Consulta de Filmes</h1>

                        <div className='buscar'>
                            <div>
                                <h1>Nome</h1>
                                <input type='text' placeholder='Nome do Filme' value={nmfilme} onChange={e => setNmfilme(e.target.value)}/>
                            </div>
                            <button onClick={Buscar}>
                                <img src="/assets/images/icon-buscar.png" alt="Lupa" />
                            </button>
                        </div>
                    </div>

                    <div className='tabelinabox'>
                        <table className='tabela'>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Título</th>
                                    <th>Ano</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ltfilme.map(item =>
                                    <tr className='linha'>
                                        <td id='tdid'>{item.imdbID}</td>
                                        <td id='nmflm'>{item.Title}</td>
                                        <td id='tdye'>{item.Year}</td>
                                        <td id='tdimg'>
                                            <img src={item.Poster} alt="" />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}