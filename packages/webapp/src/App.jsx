// UTILITIES;
import { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid, AppBar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import memos from './assets/memos.svg';
import makeStyles from './styles';
import { getAllPosts } from './redux/action/posts/post.action';

// COMPONENTS:
import PostsWrapper from './components/posts/PostsWrapper.comp';
import Form from './components/form/Form.comp';

function App() {
  // grab the post's Id:
  const [currentId, setCurrentId] = useState(null);

  // dispatch actions:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [currentId, dispatch]);


  // STYLES:
  const classes = makeStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" color="primary">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memos}
          alt="Memories bring back memories."
          title="Memories bring back memories."
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
              <PostsWrapper setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
