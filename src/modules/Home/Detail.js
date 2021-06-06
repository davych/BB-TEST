import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import action from './redux/action';
import lodash from 'lodash';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import EpisodeList from '@/modules/Episode/EpisodeList';
import CardPanel from '@/components/CardPanel';

import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const Detail = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const Actions = useMemo(
    () => (
      <>
        <IconButton onClick={() => history.push(`/${parseInt(id) - 1}`)} disabled={parseInt(id) === 1}>
          <SkipPreviousIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => history.push(`/${parseInt(id) + 1}`)}>
          <SkipNextIcon fontSize="large" />
        </IconButton>
      </>
    ),
    [id],
  );

  useEffect(() => {
    props.getTVShow(id);
  }, [id]);

  return (
    <Grid container>
      <Grid item sm={6}>
        <CardPanel data={props.TVShow.data || {}} actions={Actions} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <EpisodeList episodes={lodash.get(props.TVShow, 'data._embedded.episodes', [])} />
      </Grid>
    </Grid>
  );
};

Detail.propTypes = {
  TVShow: PropTypes.object,
  getTVShow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  TVShow: state.TVShow,
});

const mapDispatchToProps = (dispatch) => ({
  getTVShow: (id) =>
    dispatch({
      type: action.get,
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
