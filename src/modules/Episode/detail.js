import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import action from './redux/action';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardPanel from '@/components/CardPanel';

const Detail = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.getEpisode(id);
  }, []);

  return (
    <Grid container>
      <Grid item sm={6}>
        <CardPanel data={props.Episode.data || {}} />
      </Grid>
    </Grid>
  );
};

Detail.propTypes = {
  Episode: PropTypes.object,
  getEpisode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  Episode: state.Episode,
});

const mapDispatchToProps = (dispatch) => ({
  getEpisode: (id) =>
    dispatch({
      type: action.get,
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
