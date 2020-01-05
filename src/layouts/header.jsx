import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import Navigation from '../components/navigation.jsx';
import './layouts.css';

export default props => {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <strong className="logo">
              <NavLink to="/">
              <svg  width="33" height="33" viewBox="0 0 79.6 69">
                <polygon fill="#FFFFFF" points="50.9,64.1 71.3,64.1 56.2,38.1 41.3,64.1 38.4,69 0,69 39.8,0 59,33.2 79.6,69 48.1,69"></polygon>
              </svg>
              </NavLink>
            </strong>
          </Grid>
          <Grid item xs={9}>
          {props.nav.map((item, index) => {
            return (
            <Navigation 
              key={index} 
              link1={item.link1} 
              link2={item.link2}
              link1Route={item.link1Route}
              link2Route={item.link2Route}
            />
            )
          })}
          </Grid>
        </Grid>
      </Container>
    </header>
  )
};