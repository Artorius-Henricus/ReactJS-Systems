import './index.scss'

import Compcabecalho from '../../components/cabecalho'
import { useState } from 'react'
import axios from 'axios'

export default function UsuariosPG() {
    const [iduser, setIduser] = useState('')
    const [nomeuser, setNomeuser] = useState('')
    const [senhauser, setSenhauser] = useState('')
    const [turmauser, setTurmauser] = useState('')
    const [cursouser, setCursouser] = useState('')

    const [lista, setLista] = useState([])

    async function CadastrarUser() {
        let user = {
            id: iduser,
            nome: nomeuser,
            senha: senhauser,
            turma: turmauser,
            curso: cursouser
        }

        let url = `http://localhost:5000/cadastrar?id=${iduser}&nome=${nomeuser}&senha=${senhauser}&turma=${turmauser}&curso=${cursouser}`
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

    return (
        <div className='pagina-usuarios'>
            <Compcabecalho/>

            <section className='corpo'>
                <div className='box'>
                    <h1>Bem-Vindo ao Cadastro de Usuários</h1>
                    
                    <div className='inputs'>
                        <div>
                            <h3>Nome de Usuário</h3>
                            <input type='text' value={nomeuser} onChange={e => setNomeuser(e.target.value)}/>

                            <h3>Curso</h3>
                            <input type='text' value={cursouser} onChange={e => setCursouser(e.target.value)}/>

                            <h3>Id do Usuário</h3>
                            <input type='text' value={iduser} onChange={e => setIduser(e.target.value)}/>
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
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Senha</th>
                                <th>Curso</th>
                                <th>Turma</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map(item =>
                                <tr>
                                    <th>{item.id}</th>
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
                    </table>
                </div>
            </section>
        </div>
    )
}