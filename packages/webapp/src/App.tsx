// UTILITIES;
import { Container, Typography, Grow, Grid, AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memos from './assets/memos.svg';
import { useEffect } from 'react';
import makeStyles from './styles';
import { getAllPosts } from './redux/action/posts/post.action';

// COMPONENTS:
import Posts from './components/posts/PostsWrapper.comp';
import Form from './components/form/Form.comp';

function App() {
  // dispatch actions:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // STYLES:
  const classes = makeStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memos}
          alt="Memories bring back memories."
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
