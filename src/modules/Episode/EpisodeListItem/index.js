import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import useStyles from './styles'
import Link from '@material-ui/core/Link'

const EpisodeListItem = (props) => {
  const classes = useStyles()
  return (
    <Link className={classes.link} to={`/eposide/${props.data.id}`}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={
            isWidthUp('sm', props.width)
              ? props.data?.image?.original
              : props.data?.image?.medium
          }
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.title}
              noWrap
            >
              {props.data.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <div
                className={classes.ellipsisMulti}
                dangerouslySetInnerHTML={{ __html: props.data?.summary }}
              ></div>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}

EpisodeListItem.propTypes = {
  data: PropTypes.object,
  width: PropTypes.any,
}

export default withWidth()(EpisodeListItem)
