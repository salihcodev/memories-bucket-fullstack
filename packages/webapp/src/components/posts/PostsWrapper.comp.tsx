// utils:
import Post from './post/Post.comp';
import makeStyle from './styles';
import { useSelector } from 'react-redux';

const PostsWrapper = () => {
  const allPosts = useSelector(({ posts: { allPosts } }: any) => allPosts);

  // styles:
  const classes = makeStyle();

  return (
    <div className="posts-wrapper">
      {allPosts.map((post: object) => (
        <Post postData={post} />
      ))}
    </div>
  );
};

export default PostsWrapper;
