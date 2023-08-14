import './index.scss'
import { Link } from 'react-router-dom'

import Compcabecalho from '../../components/cabecalho'

export default function HomePG() {

    return (
        <div className="pagina-home">
            <Compcabecalho />

            <div className='block'>
                <Link to='/instagram'>Sistema Instagram</Link>
                <Link to='/carros'>Sistema Carros</Link>
                <Link to='/sorveteria'>Sistema Sorveteria</Link>
                <Link to='/usuarios'>Sistema de Usuários</Link>
                <Link to='/filmes'>Sistema de Filmes</Link>
                <Link to='/netflix'>Sistema Netflix</Link>
                <Link to='/marvel'>Sistema Marvel</Link>
            </div>
        </div>
    )
}