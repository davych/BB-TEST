import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    margin: `${theme.spacing(2)}px auto`,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    flex: '1 0 auto',
  },
  title: {
    width: '90%',
  },
  ellipsisMulti: {
    '& > *': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
    },
  },
}));
