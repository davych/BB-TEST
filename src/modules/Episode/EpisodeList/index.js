import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import List from '@material-ui/core/List';
import EpisodeListItem from '../EpisodeListItem';
const EpisodeList = (props) => {
  return (
    <List>
      {props.episodes.map((episode) => (
        <EpisodeListItem key={episode.id} data={episode} />
      ))}
    </List>
  );
};

EpisodeList.propTypes = {
  // width: PropTypes.any,
  episodes: PropTypes.array,
};

export default withWidth()(EpisodeList);
