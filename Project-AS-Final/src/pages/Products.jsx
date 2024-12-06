import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  const handleNewProduct = () => {
    navigate('/new-product');
  };

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error('Erro ao excluir produto:', error);
      });
  };

  const handleEdit = (productId) => {
    navigate(`/products/edit/${productId}`);
  };

  return (
    <div className="product-page">
      <div className="banner">
        <span>ENCONTRE O SEU TÊNIS IDEAL</span>
        <div className='botao'>
          <button className="add-product-btn" onClick={handleNewProduct}>
            Cadastrar Novo Produto
          </button>
        </div>
      </div>

      <div className="products">
        <section className="product-images">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onClick={() => handleImageClick(product.id)} 
                />
                <div className="product-actions">
                  <button onClick={() => handleEdit(product.id)} className="edit-btn">Editar</button>
                  <button onClick={() => handleDelete(product.id)} className="delete-btn">Excluir</button>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando produtos...</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
