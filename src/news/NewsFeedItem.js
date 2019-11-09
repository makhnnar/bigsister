import React from 'react';

import './NewsFeedItem.css';

import NewsItem from './NewsItem';

const NewsFeedItem = ({title = '',listaNews = []}) => {
    return <div className="Contenedor2">

        <h1>{title}</h1>

        {
            listaNews.map(
                item => <NewsItem 
                            titulo={item.titulo} 
                            contenido={item.contenido}
                            fecha={item.fecha}
                        />
            )
        }

  </div>;
} 

export default NewsFeedItem;