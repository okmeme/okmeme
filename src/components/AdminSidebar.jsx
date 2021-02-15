import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AdminPanel from './AdminPanel';


export function AdminSidebar(props) {
  const { classes, extraButtons } = props;
  const [open, setOpen] = React.useState(false);
  const sidebarIcon = extraButtons['admin'].icon;

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <ListItem button key='admin' className={classes.listItem} onClick={handleModalOpen}>
        <ListItemIcon>{sidebarIcon}</ListItemIcon>
        <ListItemText className={classes.listItemLabel}>Admin</ListItemText>
      </ListItem>
      <AdminPanel classes={classes} open={open} handleModalClose={handleModalClose} />
    </React.Fragment>
  );

}

export default AdminSidebar;