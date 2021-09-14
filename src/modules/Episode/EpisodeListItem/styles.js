import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  root: {
    width: '90%',
    display: 'flex',
    margin: `${theme.spacing(2)}px auto`,
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  details: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  },
  content: {
    padding: '0 8px',
  },
  cover: {
    flex: 1,
    width: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  title: {
    width: 200,
  },
  ellipsisMulti: {
    minHeight: theme.spacing(4),
    '& > *': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
  },
}));
