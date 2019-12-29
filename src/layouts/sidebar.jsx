import React from 'react';
import SidebarItem from '../components/sidebar-article.jsx';
import Context from '../context/context';

const Sidebar = () =>{
  return(
    <Context.Consumer>
      {sidebarItems => sidebarItems? sidebarItems.map((item, index) => {
        return (
          <SidebarItem
            key={index}
            item={item}
          />
        )
      }) : null}
    </Context.Consumer>
  )
}

export default Sidebar