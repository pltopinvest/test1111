import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Article from '../components/article.jsx';
import Sidebar from '../layouts/sidebar.jsx';
import './../layouts/layouts.css';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Container maxWidth="lg">
          <h1>Feast your eyes on the Android games with the best graphics</h1>
          <Grid container spacing={3}>
            <Grid item md={8}>
              { this.props.articles.map((article, index) => {
                return (
                  <Article
                    key = {index} 
                    title = {article.title} 
                    url = {article.url} 
                    textPrev = {article.textPrev}
                    textNext = {article.textNext}
                    link = {article.link}
                    linkText={article.linkText}
                  />
                )
              }) }            
            </Grid>
            <Grid item md={4}>
              <Sidebar/>
            </Grid>
          </Grid>
        </Container>
      </main>
    );
  }
}

export default Main;