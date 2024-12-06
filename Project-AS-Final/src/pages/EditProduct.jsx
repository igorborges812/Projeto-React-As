import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EditProduct.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProduct(response.data); 
      })
      .catch((error) => {
        console.error('Erro ao carregar o produto:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.put(`http://localhost:3001/products/${id}`, product)
      .then(() => {
        navigate('/products'); 
      })
      .catch((error) => {
        console.error('Erro ao atualizar produto:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };
  

  return (
    <div className="edit-product-form">
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Preço</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagem</label>
          <input
            type="url"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditProduct;


