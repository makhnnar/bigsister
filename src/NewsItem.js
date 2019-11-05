import React, { 
    Component 
} from 'react';

import './NewsItem.css';

class NewsItem extends Component {
    render() {
        const {
            titulo,
            contenido,
            fecha
        } = this.props;
        return (
            <div className="Noticia">
                <div className="TituloNoticia">
                    {titulo}
                </div>
                <div className="ContenidoNoticia">
                    Fecha de publicacion: <b>{fecha}</b>
                </div>
                <div className="ContenidoNoticia">
                    {contenido}
                </div>
            </div>
        );
    }
}

export default NewsItem;
  