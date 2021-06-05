import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      position: 'sticky',
      top: 0,
    },
  },
  media: {
    backgroundSize: 'contain',
    height: '50vh',
  },
}));
