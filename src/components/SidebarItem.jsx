import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Collapse } from '@material-ui/core';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open : false };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {classes, label, Icon, tags} = this.props;
    return (
      <React.Fragment>
        { !tags ? 
          <ListItem button key={label} className={classes.listItem}>
            <ListItemIcon><Icon/></ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        :
        <React.Fragment>
          <ListItem button key={label} className={classes.listItem} onClick={this.handleClick}>
            <ListItemIcon><Icon/></ListItemIcon>
            <ListItemText className={classes.listItemLabel}>{label}</ListItemText>
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component='div' disablePadding>
              {tags.map((tag, index) =>(
                <ListItem button key={tag} className={classes.nested}>
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
}

export default SidebarItem;