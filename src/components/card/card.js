import React from 'react';

import './card.scss';

const Card = ({ items }) => (
  <div className="card">
    <img className="image" src={items.avatar_url} alt={items.login}/>
    <div className="card-details">
      <span className="name">{items.login}</span>
      <span className="contributions">{items.contributions}</span>
    </div>
  </div>
)

export default Card;
