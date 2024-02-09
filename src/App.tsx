/* eslint-disable prefer-const */

import { useState } from 'react';
import './App.css'
import img from './assets/logo.png';


function App() {

const [textoFrase, setTextoFrase] = useState<string> ("");
const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);


const allFrases = [
  {
    id: 1,
    nome: "Motivação",
    frases: [
      'A palavra “impossível” foi inventada para ser desafiada.',
      'Somos capazes de fazer muito mais do que imaginamos!',
      'Nós somos como o clima: feitos de dias de chuva e de sol!',
      'Há ainda tanta coisa linda na vida para se descobrir.',
      'Abra os olhos e aventure-se nessa jornada chamada vida!',
      'Há tantas pessoas que torcem por você na vida.',
      'Hoje é um novo dia. Não fique pensando no ontem.'
    ]
  },
  {
    id: 2,
    nome: "Bom dia",
    frases: [
      'Sorria e confie nos planos que o universo preparou para você! Bom dia! ',
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
      'Bom dia a todos! Está na hora de acordar, respirar fundo e aproveitar a beleza das pequenas coisas.',
      'Cada amanhecer é um recomeço e um motivo para estar feliz e grato. Bom dia, amigos! 🥰'
    ]
  },

  {
    id: 3,
    nome: "Boa Noite",
    frases: [
      'Que sua noite seja iluminada pelos mais lindos sonhos. Boa noite!',
      'Sair é bom, mas deitar na nossa cama depois de um banho relaxante é mil vezes melhor B,oa noite 😉',
      'É hora de agradecer pelo hoje e sonhar com os planos de amanhã. Tenha uma linda noite!'
    ]
  }
]

function handleSwitchCategory(index: number) {
  setCategoriaSelecionada(index);
}

function gerarFrase(){
  let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
  setTextoFrase(`“ ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} ” `);
}

  return (
    <div className="container">

      <h1 className='titulo'>Aqui temos as melhores frases para você “ ” </h1>

      <img 
      src={img} 
      alt="Imagem da Logo"
      className="logo" 
    />

  <h2 className="title">Categorias</h2>
  
  <section className="category-area">
    {
      allFrases.map( (item, index) => (
        <button 
        key={item.id}
        className="category-button"
        style={{
          borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
          borderColor: "#1fa4db"
        }}
        onClick={() => handleSwitchCategory(index)}
        >
          {item.nome}
        </button>
      ))
    }
  </section>

  <button className="button-frase"  onClick={gerarFrase}>Gerar frase</button>

    {
      textoFrase !== '' && <p className="testoFrase">{textoFrase}</p>
    }

    </div>
  );
}

export default App;
