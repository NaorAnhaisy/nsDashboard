import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Dashboard from '../Dashboard/Dashboard';
import Container from '@material-ui/core/Container';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog fullWidth={true} maxWidth={'xl'} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Container maxWidth="xl">
        <DialogTitle id="simple-dialog-title">{selectedValue}</DialogTitle>
        <Dashboard />
      </Container>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};