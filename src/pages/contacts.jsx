import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../layouts/layouts.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default props => {
  console.log(props)
  const content = props.texts[0];
  const classes = useStyles();
  return (
    <div className="contacts">
      <Container maxWidth="lg">
      <h1>{content.title}</h1>
        <section className="contact-section">
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label={content.labelName}
                  style={{ margin: 8 }}
                  placeholder={content.placeholderName}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label={content.labelEmail}
                  style={{ margin: 8 }}
                  placeholder={content.placeholderEmail}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label={content.labelMessage}
                  style={{ margin: 8 }}
                  placeholder={content.placeholderMessage}
                  fullWidth
                  multiline
                  rows="5"
                />
              </Grid>
            </Grid>
            <Button variant="contained" className="btn-submit" color="primary">
              Send
            </Button>
          </form>
        </section>
      </Container>
    </div>
  )
}