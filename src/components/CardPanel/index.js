import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.js';

const CardPanel = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={isWidthUp('sm', props.width) ? props.data?.image?.original : props.data?.image?.medium}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <div dangerouslySetInnerHTML={{ __html: props.data?.summary }}></div>
          </Typography>
        </CardContent>
        {props.actions ? <CardActions>{props.actions}</CardActions> : null}
      </CardActionArea>
    </Card>
  );
};

CardPanel.propTypes = {
  width: PropTypes.any,
  data: PropTypes.object,
  actions: PropTypes.object,
};

export default withWidth()(CardPanel);
