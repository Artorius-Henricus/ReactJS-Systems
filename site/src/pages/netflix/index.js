import './index.scss'

import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function NetflixPG() {
    const [nmfilme, setNmfilme] = useState('')
    const [ltfilme, setLtfilme] = useState([])

    async function Buscar() {
        let url = `https://www.omdbapi.com/?apikey=b843fde5&s=${nmfilme.toUpperCase()}&type=movie`
        let resp = await axios.get(url)
        
        setLtfilme([...resp.data.Search])
    }

    return (
        <div className='pagina-netflix'>
            <header id='cabecalho'>
                <div>
                    <div id='logo'>
                        <img src="/assets/images/XMLID_344_w.png" alt="Logo" />
                        <Link to='/'>Portifolio.me</Link>
                    </div>
                    
                    <div className='semimenu'>
                        <Link to=''>Início</Link>
                        <Link to=''>Séries</Link>
                        <Link to=''>Filmes</Link>
                        <Link to=''>Bombando</Link>
                        <Link to=''>Minha Lista</Link>
                    </div>
                </div>

                <div className='dirm'>
                    <div className='buscar'>
                        <input type='text' placeholder='Pesquise pelo Título' value={nmfilme} onChange={e => setNmfilme(e.target.value)}/>
                        <button>
                            <img src="/assets/images/lupinha.png" alt="" onClick={Buscar}/>
                        </button>
                    </div>
                    <h1>Bruno</h1>
                    <img src="/assets/images/sino.png" alt="" />
                    <img src="/assets/images/netflixicon.png" alt="" />
                    <img src="/assets/images/DownArrow.png" alt="" />   
                </div>
            </header>

            <section className='corp'>
                <section className='main'>
                    <h1>Friends</h1>
                    <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                    <button>Assistir</button>
                </section>

                <section className='filmes'>
                    <h1>Resultado da Busca</h1>
                    <div>
                        {ltfilme.map(item =>
                            <div>
                                <img src={item.Poster} alt="" />
                            </div>
                        )}
                    </div>
                </section>
            </section>
        </div>
    )
}