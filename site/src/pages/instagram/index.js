import './index.scss'
import {Link} from 'react-router-dom'

import Compicon from '../../components/userposticon'
import Comppost from '../../components/userpost'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InstagramPG() {
    const [usuario, setUsuario] = useState('');
    const [tempo, setTempo] = useState('');
    const [avatar, setAvatar] = useState('');
    const [descricao, setDescricao] = useState('');
    const [post, setPost] = useState('');
    const [curtidas, setCurtidas] = useState('');

    const [postagens, setPostagens] = useState([]);

    function Postar() {
        
        if (usuario.trim() === '' || tempo.trim() === '' || avatar.trim() === '' || descricao.trim() === '' || post.trim() === '' || curtidas.trim() === '') {
            toast.error("Todos os campos devem estar preenchidos!");
        }
        else {
            const obj = {
                usernm: usuario,
                foto: avatar,
                postagem: post,
                desc: descricao,
                likes: curtidas,
                time: tempo
            }
    
            setPostagens([...postagens, obj]);
            toast("Postagem Publicada!");
        }
    }

    return (
        <div className='pagina-instagram'>
            <section className='menu'>
                <div id='cabecalho'>
                    <img src="/assets/images/XMLID_344_w.png" alt="Logo" />
                    <Link to='/'>Portifolio.me</Link>
                </div>

                <div className='menubt'>
                    <img src="/assets/images/Vector.png" alt="" />
                    <Link to=''>Página Inicial</Link>
                </div>

                <div className='menubt'>
                    <img src="/assets/images/Vector(1).png" alt="" />
                    <Link to=''>Pesquisa</Link>
                </div>

                <div className='menubt'> 
                    <img src="/assets/images/Vector(2).png" alt="" className='bd'/>
                    <Link to=''>Reels</Link>
                </div>

                <div className='menubt'>
                    <img src="/assets/images/Vector(3).png" alt="" />
                    <Link to=''>Mensagens</Link>
                </div>

                <div className='menubt'>
                    <img src="/assets/images/Vector(4).png" alt="" />
                    <Link to=''>Notificações</Link>
                </div>

                <div className='menubt'>
                    <img src="/assets/images/Vector(5).png" alt="" className='bd'/>
                    <Link to=''>Criar</Link>
                </div>
            </section>

            <section className='dir'>
                <ToastContainer />
                <button>Novas Publicações</button>

                <article className='users'>
                    <Compicon imagem='/assets/images/Ellipse13.png'/>
                    <Compicon imagem='/assets/images/Ellipse13(1).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(2).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(3).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(4).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(5).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(6).png'/>
                    <Compicon imagem='/assets/images/Ellipse13(7).png'/>
                </article>
                
                <div className='boxreg'>
                    <div>
                        <h1>Usuário:</h1>
                        <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} />

                        <h1>Tempo:</h1>
                        <input type='text' className='scnd' value={tempo} onChange={e => setTempo(e.target.value)}/>
                    </div>

                    <div>
                        <h1>Avatar:</h1>
                        <input type='text' value={avatar} onChange={e => setAvatar(e.target.value)}/>
                    </div>

                    <div>
                        <h1>Descrição:</h1>
                        <textarea id='descr' value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>

                    <div>
                        <h1>Post:</h1>
                        <input type='text' value={post} onChange={e => setPost(e.target.value)}/>

                        <h1>Curtidas:</h1>
                        <input type='number' className='scnd' value={curtidas} onChange={e => setCurtidas(e.target.value)} />
                    </div>

                    <button onClick={Postar}>Postar</button>
                </div>

                {postagens.map(item => {
                    return(
                        <Comppost nome={item.usernm} foto={item.foto} postagm={item.postagem} descri={item.desc} curti={item.likes} tmpost={item.time} />
                    )
                })}

            </section>
        </div>
    )
}