import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import action from './redux/action';
import lodash from 'lodash';
import { connect } from 'react-redux';
import EpisodeList from '@/modules/Episode/EpisodeList';
const Detail = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.getTVShow(1);
  }, []);
  return (
    <Grid container>
      <Grid item sm={6}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                isWidthUp('sm', props.width) ? props.TVShow.data?.image?.original : props.TVShow.data?.image?.medium
              }
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.TVShow.data?.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <div dangerouslySetInnerHTML={{ __html: props.TVShow.data?.summary }}></div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sm={6} xs={12}>
        <EpisodeList episodes={lodash.get(props.TVShow, 'data._embedded.episodes', [])} />
      </Grid>
    </Grid>
  );
};

Detail.propTypes = {
  width: PropTypes.any,
  TVShow: PropTypes.object,
  getTVShow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  TVShow: state.TVShow,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTVShow: (id) =>
    dispatch({
      type: action.get,
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(Detail));
