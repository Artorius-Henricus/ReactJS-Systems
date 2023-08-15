import './index.scss'

import Compcabecalho from '../../components/cabecalho'
import { useState } from 'react'
import axios from 'axios'

export default function UsuariosPG() {
    const { v4: uuidv4 } = require('uuid');
    const [nomeuser, setNomeuser] = useState('')
    const [senhauser, setSenhauser] = useState('')
    const [turmauser, setTurmauser] = useState('')
    const [cursouser, setCursouser] = useState('')

    const [lista, setLista] = useState([])
    const [showoff, setShowoff] =useState(true)

    const [estado, setEstado] = useState(<i class="fa-regular fa-eye"></i>)

    async function CadastrarUser() {
        
        let user = {
            id: uuidv4(),
            nome: nomeuser,
            senha: senhauser,
            turma: turmauser,
            curso: cursouser
        }

        let url = `http://localhost:5000/cadastrar?id=${user.id}&nome=${nomeuser}&senha=${senhauser}&turma=${turmauser}&curso=${cursouser}`
        let connect = await axios.get(url);

        setLista([...lista, user])
    }

    async function Atualizar(){
        let url = `http://localhost:5000/atualizar`
        let connect = await axios.get(url); 

        setLista([...connect.data])
    }

    async function Apagar(itemExcluir){
        let listaNova = lista.filter(item => item.id != itemExcluir.id)
        let url = 'http://localhost:5000/excluir'
        let connect = axios.post(url, listaNova)

        setLista([...listaNova])
    }

    function ShowOff(){
        if (showoff == true) {
            setEstado(<i class="fa-regular fa-eye-slash"></i>)
        }
        else {
            setEstado(<i class="fa-regular fa-eye"></i>)
        }
    }

    return (
        <div className='pagina-usuarios'>
            <Compcabecalho/>

            <section className='corpo'>
                <div className='box'>
                    <h1>Bem-Vindo ao Cadastro de Usuários</h1>
                    <button onClick={() => {setShowoff(!showoff); Atualizar(); ShowOff();}}>{estado}</button>
                    <div className='inputs'>
                        <div>
                            <h3>Nome de Usuário</h3>
                            <input type='text' value={nomeuser} onChange={e => setNomeuser(e.target.value)}/>

                            <h3>Curso</h3>
                            <input type='text' value={cursouser} onChange={e => setCursouser(e.target.value)}/>
                        </div>
                        <div>
                            <h3>Senha do Usuário</h3>
                            <input type='number' value={senhauser} onChange={e => setSenhauser(e.target.value)}/>

                            <h3>Turma</h3>
                            <input type='text' value={turmauser} onChange={e => setTurmauser(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={CadastrarUser}>Cadastrar</button>
                    <button onClick={Atualizar}>Atualizar</button>

                    <table className='tabela'>
                        <thead>
                            <tr id='cabecalho'>
                                <th>Nome</th>
                                <th>Senha</th>
                                <th>Curso</th>
                                <th>Turma</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        {showoff === true && 
                        <>
                            <tbody>
                                {lista.map(item =>
                                    <tr>
                                        <th>{item.nome}</th>
                                        <th>{item.senha}</th>
                                        <th>{item.curso}</th>
                                        <th>{item.turma}</th>
                                        <th>
                                            <button id='apagarbt' onClick={() => Apagar(item)}>X</button>
                                        </th>
                                    </tr>
                                    )}
                            </tbody>
                        </>
                        }
                    </table>
                </div>
            </section>
        </div>
    )
}