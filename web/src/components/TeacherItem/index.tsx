import React from 'react';

import './styles.css';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return(
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars0.githubusercontent.com/u/49920527?s=460&v=4"
              alt="profile-photo"
            />
            <div>
              <strong>Vinicius Campos</strong>
              <span>Algoritmo e estrutura de dados</span>
            </div>
          </header>
          
          <p>Sou um professor brabo se quiser aprender dá o papo!</p>

          <footer>
            <p>
              Preço/hora
              <strong>R$30,00</strong>
            </p>
            <button>
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato.
            </button>
          </footer>
        </article>
    );
}

export default TeacherItem;