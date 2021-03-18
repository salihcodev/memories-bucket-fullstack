import { indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(0),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '1rem 0',
    border: `2px dashed ${indigo[200]}`,
    minHeight: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileUpload: {
    width: '100%',
    height: '100%',
  },
  formClear: {
    marginBottom: '2rem',
  },
  formSubmit: {
    margin: '2rem 0 1rem',
  },
}));
