import { useState } from 'react'
import './index.scss'

import axios from 'axios'

import {Link} from 'react-router-dom'

export default function MarvelPG() {
    const [nmpersonagem, setNmpersonagem] = useState('')
    const [lista, setLista] = useState([])

    async function Buscar(){
        let url=''
        if (nmpersonagem === '') {
            url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a3a0d06beb0e29b16f700221ee48e4c9&hash=3adefcd6a674b017b5e651e89a246c61`
        }
        else {
            url = `http://gateway.marvel.com/v1/public/characters?name=${nmpersonagem.toUpperCase()}&ts=1&apikey=a3a0d06beb0e29b16f700221ee48e4c9&hash=3adefcd6a674b017b5e651e89a246c61`
        }
        let resp = await axios.get(url)

        setLista([...resp.data.data.results])
    }

    return (
        <div className="pagina-marvel">
            <header className='cabecalho'>
                <img src="/assets/images/MarvelLogo.png" alt="" />

                <div>
                    <Link to='/'>Home</Link>
                    <Link to=''>Personagens</Link>
                    <Link to=''>Quadrinhos</Link>
                    <Link to=''>Eventos</Link>
                    <Link to=''>Contatos</Link>
                    <img src="/assets/images/MLogo.png" alt="" />
                </div>
            </header>

            <section className='middle'>
                <h1>Personagens da MARVEL</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
                    <div id='pesquisa'>
                        <button onClick={Buscar}>
                            <img src="/assets/images/lupinha.png" alt="" />
                        </button>
                        <input type='text' value={nmpersonagem} onChange={e => setNmpersonagem(e.target.value)} placeholder='Buscar'/>
                    </div>
                </div>
            </section>

            <div className='listt'>
                {lista.map(item =>
                    <section>
                        <img src={item.thumbnail.path+'.'+item.thumbnail.extension} alt="" />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </section>
                )}
            </div>
        </div>
    )
}