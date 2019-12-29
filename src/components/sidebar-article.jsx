import React from 'react';
import Author from './author.jpg';

export default props => {
  return(
    <div className="sidebar-article">
      <p>{props.item.title}</p>
      <img src={Author} alt="author"/>
      <strong>David McCourt</strong>
    </div>
  );
}