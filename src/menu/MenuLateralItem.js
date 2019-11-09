import React from 'react';

import './MenuLateralItem.css';

import ImageTitleButton from '../buttons/ImageTitleButton';
import MenuItem from './MenuItem';

const MenuLateralItem = ({title='',listaMenu = []}) => {
    return <div className="Contenedor1">

        <h1>{title}</h1>
    
        {
            listaMenu.map(
                item => <MenuItem 
                        num={item.num} 
                        name={item.name}
                        icon={item.icon}
                        />
            )
        }

        <ImageTitleButton
            title={"Mi Boton Custom"}
        />

  </div>;
} 

export default MenuLateralItem;