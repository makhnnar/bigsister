import React from 'react';

import './NewsItem.css';

const NewsItem = ({titulo,contenido,fecha}) => {
    return  <div className="Noticia">

        <div className="TituloNoticia">
            {titulo}
        </div>

        <div className="ContenidoNoticia">
            Fecha de publicacion: <b>{fecha}</b>
        </div>

        <div className="ContenidoNoticia">
            {contenido}
        </div>

    </div>;
}

export default NewsItem;
  