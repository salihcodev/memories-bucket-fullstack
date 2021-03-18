// utils:
import Post from './post/Post.comp';
import makeStyle from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

interface postWrapperProps {
  setCurrentId: any;
}

const PostsWrapper: React.VFC<postWrapperProps> = ({ setCurrentId }) => {
  const allPosts = useSelector(({ posts: { allPosts } }: any) => allPosts);

  // styles:
  const classes = makeStyle();

  return allPosts.length ? (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {allPosts.map((post: any) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post postData={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div
      className="loading"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default PostsWrapper;
