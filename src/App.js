import React, { Component } from 'react';
import './App.css';

import logoHincha from './logo_sh.png'
import logoReact from './logo.svg'
import NewsFeedItem from './news/NewsFeedItem';
import MenuLateralItem from './menu/MenuLateralItem';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      titleMenu:'menu',
      menuItems : [
        { 
          num:4,
          name:'Fernando',
          icon:logoHincha
        },
        { 
          num:5,
          name:'Pedro',
          icon:logoHincha
        },
        { 
          num:6,
          name:'Gatito',
          icon:logoReact
        },
        { 
          num:7,
          name:'Ari',
          icon:logoReact
        }
      ],
      titleNoticias:'Noticias',
      newsItems : [
        {
          titulo:"Llego el pernil navideño", 
          contenido:"Al fin el gobierno pudo el traer el famoso pernil, luego de 2 años consecutivos sin cumplir la famosa promesa, en fechas decembrina",
          fecha:"21/11/19"
        },
        {
          titulo:"Iniciaron las clases", 
          contenido:"Hoy la UNEG abrio sus puertas al nuevo ciclo academico",
          fecha:"02/10/19"
        }
      ]
    }
  }

  render() {
    return (
      <div className="Principal">

          <MenuLateralItem
            title={this.state.titleMenu}
            listaMenu={this.state.menuItems}
          />

          <NewsFeedItem
            title={this.state.titleNoticias}
            listaNews={this.state.newsItems}
          />

      </div>
    );
  }
}

export default App;
