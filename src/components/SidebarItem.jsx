import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Collapse } from '@material-ui/core';

export function SidebarItem(props) {
  const { classes, label, Icon, tags } = props;
  const [open, setOpen] = React.useState(false);

  function handleClick(event, value) {
    setOpen(open => !open);
  }

  return (
    <React.Fragment>
      { !tags ?
        <ListItem button key={label} className={classes.listItem}>
          <ListItemIcon><Icon /></ListItemIcon>
          <ListItemText>{label}</ListItemText>
        </ListItem>
        :
        <React.Fragment>
          <ListItem button key={label} className={classes.listItem} onClick={handleClick}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText className={classes.listItemLabel}>{label}</ListItemText>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component='div' disablePadding>
              {tags.map((tag, index) => (
                <ListItem button key={tag} className={classes.nested}>
                  <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                  <ListItemText size="small">{tag}</ListItemText>
                </ListItem>
              ))
              }
            </List>
          </Collapse>
        </React.Fragment>
      }

    </React.Fragment>
  );
}

export default SidebarItem;