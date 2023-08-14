import './index.scss'

export default function Comppost(props) {

    return(
        <article className='compuserpost'>
            <div className='cabecalhopost'>
                <img src={props.foto} alt="Icon" />

                <div>
                    <div id='nmdt'>
                        <h3>{props.nome} •</h3>
                        <h3>{props.tmpost}</h3>
                    </div>
                    <img src="/assets/images/verify.png" alt="Verify Icon" id='verified' />
                </div>
            </div>

            <img src={props.postagm} alt="Imagem Post" id='post'/>

            <div className='btt'>
                <img src="/assets/images/Hearth.png" alt="Curtida Icon" />
                <img src="/assets/images/Comment.png" alt="Comentar Icon" />
            </div>

            <p id='curtidas'>{props.curti} curtidas</p>

            <div className='coment'>
                <p>{props.nome}</p>
                <p id='comentado'>{props.descri}</p>
            </div>
        </article>
    )
}