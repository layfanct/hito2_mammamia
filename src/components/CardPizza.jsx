import React from 'react';
import './CardPizza.css'; 

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-outline-dark custom-btn">Ver más</a>
          <a href="#" className="btn btn-dark custom-btn">Añadir 🛒</a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
