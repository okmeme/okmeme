import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SubmitPanel from './SubmitPanel';


export function SubmitSidebar(props) {
  const { classes, extraButtons, mediaTypes } = props;
  const [open, setOpen] = React.useState(false);
  const sidebarIcon = extraButtons[0].icon;

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <ListItem button key='submit' className={classes.listItem} onClick={handleModalOpen}>
        <ListItemIcon>{sidebarIcon}</ListItemIcon>
        <ListItemText className={classes.listItemLabel}>Submit</ListItemText>
      </ListItem>
      <SubmitPanel classes={classes} open={open} handleModalClose={handleModalClose} mediaTypes={mediaTypes} />
    </React.Fragment>
  );

}

export default SubmitSidebar;