import React from 'react';

import './MenuItem.css';

const MenuItem = ({num,name,icon}) => {
    return <div className="Menu">
        <b>{num} - {name}</b>
        <img 
            src={icon} 
            width={50} 
            height={50}
            alt=""
        />
    </div>;
} 

export default MenuItem;
  