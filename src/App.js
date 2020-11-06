import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

//criar função
/*function App() {
    return ( 
        <div className = "App">
            <h1>Meu Projeto</h1>
            <Comentario nome="Anaê" email="anae@email.com" data={new Date(2020, 11, 5)}>
                Olá, tudo bem?
            </Comentario>
            <Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 11, 5)}>
                Olá, tudo bem? 
            </Comentario>
        </div>
    );
}*/
//Criar classe
class App extends Component { //component é do próprio react
    //hooks
    state = { //state é um objeto, o 'estado' da aplicação
        comentarios: [ //componentes que possuem states , propriedades são chamados de stateful components(componentes inteligentes)
            {
                nome:'Anaê', 
                email:"anae@email.com", 
                data:new Date(2020, 11 , 5, 17, 30 ,0), 
                mensagem:'Olá, tudo bem?'
            },
            {
                nome:'Maria', 
                email:"maria@email.com", 
                data:new Date(2020, 11 , 5, 9, 15, 0), 
                mensagem:'Olá, tudo bem?'
            }
        ],
        novoComentario:{
            nome: '',
            email: '',
            mensagem:''
        }
    }
    adicionarComentario = (evento) =>{
        evento.preventDefault(); //barra o post
        console.log("Adicionando comentário");

        /*const novoComentario = {
            nome:'Anaê', 
            email:"anae@email.com", 
            data:new Date(2020, 11 , 5), 
            mensagem:'Olá, tudo bem?'
        }*/
        //set state função, herdade de components react
        //let lista = this.state.comentarios;
        //lista.push(novoComentario);
        //this.setState( {comentarios: lista} );
        const novoComentario = { ...this.state.novoComentario, data:new Date() } //spread pega o que ja tem no elemento e adiciona a data
        this.setState({
            comentarios: [...this.state.comentarios, novoComentario], //utilizando o spread, adicionando um novo elemento no array comentarios
            novoComentario: { nome: ' ', email: '' , mensagem:''} //limpar os campos do formulário após envio
        })
    }
    removerComentario = comentario => {
        let lista = this.state.comentarios;
        lista = lista.filter(c => c !== comentario) //remover lista filtrando todos os comentarios cujo seja diferente do comentario que estou passando na function
        this.setState({ comentarios: lista })
    }
    digitacao = evento =>{
        //console.log(evento.target.value);
        const {name, value} = evento.target; //criando duas variáveis
        //const value = evento.target.value
        //const name = evento.target.name;
        this.setState({ novoComentario: {...this.state.novoComentario, [name]: value} }) //mudar o state do componente, pegar o que ja tem e adicionar novos valores que serão digitados no form
    }
    render () { 
        return (
        <div className = "App">
            <h1>Meu Projeto</h1>
            {this.state.comentarios.map((comentario, indice) =>(//map percorre uma lista de array e retorna o elemento - fazendo loop
                //console.log(comentario)
            <Comentario 
                key={indice} //cada filho da lista tem que ter uma propriedade única - podemos criar um id no objeto e passar comentario.id também ou utilizar somente o indice mesmo
                nome={comentario.nome} 
                email={comentario.email} 
                data={comentario.data}
                onRemove={this.removerComentario.bind(this, comentario)}> 
                {comentario.mensagem}
            </Comentario>
            //bind() = O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
            //onRemove = passando a referencia da função para o componente comentario.js para remover o comentario
            /*<Comentario nome="Maria" email="maria@email.com" data={new Date(2020, 11, 5)}>
                Olá, tudo bem? 
            </Comentario>*/
            ))}
            <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
                <h2>Adicionar Comentário</h2>
                <div>
                    <input required
                        type="text" 
                        name="nome" 
                        value={this.state.novoComentario.nome} 
                        onChange={this.digitacao} 
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <input required type="email" name="email" value={this.state.novoComentario.email} onChange={this.digitacao}  placeholder="Digite seu email"/>
                </div>
                <div>
                    <textarea required name="mensagem" rows="4" value={this.state.novoComentario.mensagem} onChange={this.digitacao} ></textarea>
                </div>
                <button type="submit">Adicionar Comentário</button>
            </form>
        </div>
        );
    }
}
export default App;