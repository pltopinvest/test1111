import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';
import Navigation from '../components/navigation.jsx';
import './layouts.css';

export default props => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <strong className="logo"><NavLink to="/">Logo</NavLink></strong>
          </Grid>
          <Grid item xs={10}>
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
    </footer>
  )
};