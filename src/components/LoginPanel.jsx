import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export function LoginPanel(props) {
  const { classes, open, handleModalClose } = props;

  return (
    <React.Fragment>
      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        id='modal'
      >
        <DialogTitle>Login to OKMEME!</DialogTitle>
        <DialogContent>
          put the firebase login thing here
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  )

}

export default LoginPanel;