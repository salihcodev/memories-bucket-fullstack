import makeStyle from './styles';

const Post = ({ postData }: any) => {
  const classes = makeStyle();

  return <h1>{postData?.title}</h1>;
};

export default Post;
