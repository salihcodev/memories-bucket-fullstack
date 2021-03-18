import makeStyle from './styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizontalIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

// INTERFACES AND TYPES:
interface postInterface {
  _id?: any;
  tags: Array<string>;
  createdAt: Date;
  author: string;
  title: string;
  message: string;
  cover: string;
}

interface PostProps {
  postData: postInterface;
  setCurrentId: any;
}

const Post: React.VFC<PostProps> = ({ postData, setCurrentId }) => {
  const { _id, tags, createdAt, author, title, message, cover } = postData;
  const classes = makeStyle();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={cover} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          onClick={() => {
            setCurrentId(_id);
          }}
          size="small"
        >
          <MoreHorizontalIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          Like
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
