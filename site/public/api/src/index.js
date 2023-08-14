import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json())

let userlist = []


server.get('/cadastrar', (req, resp) => {
    let usuario = {
        nome: req.query.nome,
        senha: req.query.senha,
        turma: req.query.turma,
        curso: req.query.curso
    }

    userlist = [...userlist, usuario]
    resp.send(userlist)
    console.log('Usuário ( '+req.query.nome+' ) Cadastrado!')
})

server.get('/atualizar', (req, resp) => {
    let x = userlist

    resp.send(x)
})

server.listen(process.env.PORT,
    () => console.log(`API Online on Port '${process.env.PORT}'`))