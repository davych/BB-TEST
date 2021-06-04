import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MessageComps = ({ text, severity }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    lodash.debounce(() => setOpen(false), 2000)();
  }, []);

  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open}>
      <Alert variant="filled" severity={severity}>
        {text || ''}
      </Alert>
    </Snackbar>
  );
};

MessageComps.propTypes = {
  text: PropTypes.string,
  severity: PropTypes.string,
};

const Message = {
  success: (text) => {
    ReactDOM.render(<MessageComps text={text} severity="success" />, document.getElementById('root-prompt'));
  },
  error: (text) => {
    ReactDOM.render(<MessageComps text={text} severity="error" />, document.getElementById('root-prompt'));
  },
  warning: (text) => {
    ReactDOM.render(<MessageComps text={text} severity="warning" />, document.getElementById('root-prompt'));
  },
  info: (text) => {
    ReactDOM.render(<MessageComps text={text} severity="info" />, document.getElementById('root-prompt'));
  },
};

export default Message;
