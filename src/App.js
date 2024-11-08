import React, { useState } from 'react';
import CreateArti from './components/Create-article/CreateArti';
import AfficheArti from './components/Create-article/AfficheArti';

//Composant principal de l'application
const App = () => {
  // État pour stocker la liste des articles
  const [articles, setArticles] = useState([
    {
      name: 'Chaise de bureau',
      category: 'Mobilier de Bureau',
      brand: 'ConfortPlus',
      price: 150,
      content: 'Cette chaise est confortable.',
      stock: 75,
      online: true,
      pictures: ['chaise1.jpg', 'chaise2.jpg']
    },
    
  ]);
    

  // Fonction pour ajouter un nouvel article à la liste
  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <div>
      <CreateArti addArticle={addArticle} />
      <AfficheArti articles={articles} />
    </div>
  );
};

export default App;