import React from 'react';
import Button from '@material-ui/core/Button';

import LoginPanel from './LoginPanel';

export function LoginNavbar(props) {
  const { classes, extraButtons } = props;
  const [open, setOpen] = React.useState(false);
  const navbarIcon = extraButtons['login'].icon;

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button color='inherit' className={classes.navbarButton} onClick={handleModalOpen}>
        {navbarIcon}
        <span className={classes.buttonText}>Login</span>
      </Button>
      <LoginPanel classes={classes} open={open} handleModalClose={handleModalClose} />
    </React.Fragment>
  );

}

export default LoginNavbar;