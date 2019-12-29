import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Profile from './profile-example2.png';
import Likes from './likes-animation.gif';
import Summary from './summary-en.png';
import '../layouts/layouts.css';

export default props => {
  console.log(props)
  return (
    <div className="guide">
      <Container maxWidth="lg">
        <h1>{props.articles[0].mainTitle}</h1>
        <section className="buildInfo">
          <h3>{props.articles[0].title1}</h3>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={2} md={1}>
              <img src={Profile} alt="profile" className="profileImg"/>
            </Grid>
            <Grid item xs={8} sm={10} md={11}>
              <p>{props.articles[0].text1}</p>
            </Grid>
          </Grid>
        </section>
        <section className="buildInfo">
          <h3>{props.articles[0].title2}</h3>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={3} md={1}>
              <img src={Likes} alt="profile" className="likesImg"/>
            </Grid>
            <Grid item xs={8} sm={9} md={11}>
              <p>{props.articles[0].text2}</p>
            </Grid>
          </Grid>
        </section>
        <section className="buildInfo">
          <h3>{props.articles[0].title3}</h3>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <img src={Summary} alt="profile" className="summaryImg"/>
            </Grid>
            <Grid item sm={6}>
              <p>{props.articles[0].text3}</p>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  )
}