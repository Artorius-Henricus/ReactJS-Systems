import './index.scss'
import {Link} from 'react-router-dom'

export default function Compcabecalho() {

    return(
        <header className="comp-cabecalho">
            <img src="/assets/images/XMLID_344_.png" alt="Logo" />
            <Link to='/'>Portifolio.me</Link>
        </header>
    )
}