import React from 'react';

export default props => {
  return (
    <ul className="switcher">
      <li><span onClick = {props.onClick}>ENG</span></li>&nbsp;|&nbsp;
      <li><span onClick = {props.onClick}>DE</span></li>&nbsp;|&nbsp;
      <li><span onClick = {props.onClick}>FI</span></li>
    </ul>
  )
}