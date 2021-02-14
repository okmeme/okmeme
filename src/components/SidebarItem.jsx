import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Collapse } from '@material-ui/core';

export function SidebarItem(props) {
  const { classes, item, tags } = props;
  const [open, setOpen] = React.useState(false);

  function handleClick(event, value) {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      { !tags ?
        <ListItem button key={item.name} className={classes.listItem}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.name}</ListItemText>
        </ListItem>
        :
        <React.Fragment>
          <ListItem button key={item.name} className={classes.listItem} onClick={handleClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className={classes.listItemLabel}>{item.name}</ListItemText>
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