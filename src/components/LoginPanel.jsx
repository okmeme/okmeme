import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

import InputIcon from '@material-ui/icons/Input';

const styles = theme => ({
  grid: {
    flexGrow: 1,
  },
  navbarButton: {
    color: 'white',
    paddingRight: 10,
    marginRight: 10,
  },
  buttonText: {
    paddingLeft: 10,
  }
});

export function LoginPanel(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false)

  function handleModalOpen() {
    setOpen(open => true);
  }

  function handleModalClose() {
    setOpen(open => false);
  }


  return (
    <React.Fragment>
      <Button color='inherit' className={classes.navbarButton} onClick={handleModalOpen}>
        <InputIcon />
        <span className={classes.buttonText}>Login</span>
      </Button>
      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        id='modal'
      >
        <DialogTitle>Login to OKMEME</DialogTitle>
        <DialogContent>
          put the firebase login thing here
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </React.Fragment>
  )

}

export default withStyles(styles)(LoginPanel);