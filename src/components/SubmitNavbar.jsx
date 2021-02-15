import React from 'react';
import Button from '@material-ui/core/Button';

import SubmitPanel from './SubmitPanel';


export function SubmitNavbar(props) {
  const { classes, extraButtons, mediaTypes } = props;
  const [open, setOpen] = React.useState(false);
  const navbarIcon = extraButtons['submit'].icon;

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
        <span className={classes.buttonText}>Submit</span>
      </Button>
      <SubmitPanel classes={classes} open={open} handleModalClose={handleModalClose} mediaTypes={mediaTypes} />
    </React.Fragment>
  );

}

export default SubmitNavbar;