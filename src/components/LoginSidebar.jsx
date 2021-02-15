import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import LoginPanel from './LoginPanel';


export function LoginSIdebar(props) {
  const { classes, extraButtons } = props;
  const [open, setOpen] = React.useState(false);
  const sidebarIcon = extraButtons['login'].icon;

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <ListItem button key='login' className={classes.listItem} onClick={handleModalOpen}>
        <ListItemIcon>{sidebarIcon}</ListItemIcon>
        <ListItemText className={classes.listItemLabel}>Login</ListItemText>
      </ListItem>
      <LoginPanel classes={classes} open={open} handleModalClose={handleModalClose} />
    </React.Fragment>
  );

}

export default LoginSIdebar;