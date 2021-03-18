// utils:
import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import makeStyle from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewPost,
  updatePost,
} from '../../redux/action/posts/post.action';

const Form = ({ setCurrentId, currentId }) => {
  // styles:
  const classes = makeStyle();

  // STATE:
  // state interface.
  // interface formInterface {
  //   author: string | null;
  //   title: string | null;
  //   message: string | null;
  //   tags: string | null;
  //   cover: string | null;
  // }

  // FORM STATE.
  // inputs schema
  const inputsSchema = {
    author: null,
    title: null,
    message: null,
    tags: null,
    likeCount: null,
    cover: null,
  };

  // state:
  const [memoData, setMemoData] = useState(inputsSchema);

  // clear
  const clearFormInputs = () => setMemoData(inputsSchema);

  // handle form submission
  const dispatch = useDispatch();
  // to fill update:
  const postToUpdate = useSelector(({ posts: { allPosts } }) =>
    currentId ? allPosts.find((post) => post._id === currentId) : null
  );

  useEffect(() => {
    if (postToUpdate) setMemoData(postToUpdate);
  }, [postToUpdate]);

  const handleSubmission = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, memoData));
    } else {
      dispatch(createNewPost(memoData));
    }
    clearFormInputs();
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmission}
      >
        <Typography variant="h5">Setup A Memory</Typography>

        {/* inputs */}
        <TextField
          name="memo-create_author"
          variant="outlined"
          label="author"
          value={memoData.author || ''}
          onChange={(e) => setMemoData({ ...memoData, author: e.target.value })}
          fullWidth
        />
        <TextField
          name="memo-create_author"
          variant="outlined"
          label="title"
          value={memoData.title || ''}
          onChange={(e) => setMemoData({ ...memoData, title: e.target.value })}
          fullWidth
        />
        <TextField
          name="memo-create_author"
          variant="outlined"
          label="message"
          value={memoData.message || ''}
          onChange={(e) =>
            setMemoData({ ...memoData, message: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="memo-create_author"
          variant="outlined"
          label="tags"
          value={memoData.tags || ''}
          onChange={(e) => setMemoData({ ...memoData, tags: e.target.value })}
          fullWidth
        />
        {/* memory cover file */}
        <div className={`upload ${classes.fileInput}`}>
          <FileBase
            className={classes.fileUpload}
            type="file"
            multiple={false}
            onDone={({ base64 }) => setMemoData({ ...memoData, cover: base64 })}
          />
        </div>

        {/* form submitting */}
        <Button
          type="submit"
          className={classes.formSubmit}
          size="large"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {/* form clearer */}
        <Button
          className={classes.formClear}
          size="small"
          variant="outlined"
          color="default"
          fullWidth
          onClick={clearFormInputs}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
