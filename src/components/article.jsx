import React from 'react';

export default props => {

  return(
    <article className="article">
        <h3>{props.title}</h3>
        <p>{props.textPrev}</p>
        <iframe width="100%" height="400px" src={props.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>{props.textNext}</p>
        <a href={props.link} className="storeLink">{props.linkText}</a>
      </article>
  )
};