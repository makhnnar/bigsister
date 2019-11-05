import React, { Component } from 'react';
import './App.css';

import CustomButon from './CustomButon';
import MenuItem from './MenuItem';
import NewsItem from './NewsItem';

import logoHincha from './logo_sh.png'
import logoReact from './logo.svg'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuItems : [
        { 
          num:4,
          name:'some',
          icon:logoHincha
        },
        { 
          num:5,
          name:'some',
          icon:logoHincha
        },
        { 
          num:6,
          name:'some',
          icon:logoReact
        },
        { 
          num:7,
          name:'Ari',
          icon:logoReact
        }
      ]
    }
  }

  render() {
    return (
      <div className="Principal">

          <div className="Contenedor1">

            <h1>Contenedor1</h1>

            <MenuItem 
              num={1} 
              name={"Item"}
              icon={logoReact}
            />
            <MenuItem 
              num={2} 
              name={"Item"}
              icon={logoHincha}
            />
            <MenuItem 
              num={3} 
              name={"Item"}
              icon={logoHincha}
            />
          
            {
              this.state.menuItems.map(
                item => <MenuItem 
                          num={item.num} 
                          name={item.name}
                          icon={item.icon}
                        />
              )
            }

            <CustomButon
              title={"Mi Boton Custom"}
            />

          </div>

          <div className="Contenedor2">

            <h1>Noticias</h1>

            <NewsItem 
              titulo={"Llego el pernil navideño"} 
              contenido={"Al fin el gobierno cumplioluego de 2 años, sin pernil, la carne para estas fiestas"}
              fecha={"21/11/19"}
            />

            <NewsItem 
              titulo={"Iniciaron las clases"} 
              contenido={"Hoy la UNEG abrio sus puertas al nuevo ciclo academico"}
              fecha={"02/10/19"}
            />

          </div>

      </div>
    );
  }
}

export default App;
