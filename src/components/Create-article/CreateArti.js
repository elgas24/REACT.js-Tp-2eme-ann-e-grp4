import React, { useState } from 'react';

// Composant pour créer un nouvel article
const CreateArti = ({ addArticle }) => {
  // État local pour stocker les informations de l'article
  const [article, setArticle] = useState({
    name: '',
    category: '',
    brand: '',
    price: 0,
    content: '',
    stock: '',
    online: '',
    pictures: []
  });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoi des données de l'article à l'URL spécifiée via une requête POST
      const response = await fetch('http://localhost:8000/api/article/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      });
      if (response.ok) {
        const newArticle = await response.json();
        addArticle(newArticle); // Ajoute l'article à la liste
        // Réinitialise le formulaire après soumission
        setArticle({
          name: '',
          category: '',
          brand: '',
          price: 0,
          content: '',
          stock: 0,
          online: false,
          pictures: []
        });
      } else {
        console.error('Erreur lors de l\'ajout de l\'article');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={article.name} onChange={handleChange} placeholder="Nom" />
      <input type="text" name="category" value={article.category} onChange={handleChange} placeholder="Catégorie" />
      <input type="text" name="brand" value={article.brand} onChange={handleChange} placeholder="Marque" />
      <input type="number" name="price" value={article.price} onChange={handleChange} placeholder="Prix" />
      <input type="text" name="content" value={article.content} onChange={handleChange} placeholder="Content" />
      <input type="number" name="stock" value={article.stock} onChange={handleChange} placeholder="Stock" />
      <input type="boolean" name="online" value={article.online} onChange={handleChange} placeholder="Online" />
      <input type="string" name="pictures " value={article.pictures} onChange={handleChange} placeholder="Pictures" />

      <button type="submit">Ajouter l'article</button>
    </form>
  );
};

export default CreateArti;