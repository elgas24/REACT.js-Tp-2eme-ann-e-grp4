import React from 'react';

// Composant pour afficher la liste des articles
const AfficheArti = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.name}</h2>
          <p>Catégorie : {article.category}</p>
          <p>Marque : {article.brand}</p>
          <p>Prix : {article.price} €</p>
          <p>{article.content}</p>
          <p>Stock : {article.stock}</p>
          <p>{article.online ? 'En ligne' : 'Hors ligne'}</p>
          <div>
            {article.pictures.map((pic, idx) => (
              <img key={idx} src={pic} alt={`pic-${idx}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AfficheArti;