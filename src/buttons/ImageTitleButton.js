import React from 'react';
import './ImageTitleButton.css';

const ImageTitleButton = ({title}) => {
  return <div className="Btn">

    <p className="Texto">{title}</p>

  </div>;
} 

export default ImageTitleButton;
