import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import BuildIcon from '@material-ui/icons/Build';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export function AdminPanel(props) {
  const { classes, open, handleModalClose } = props;
  const [tabVal, setTabVal] = React.useState(0);

  function changeTab(event, val) {
    setTabVal(val);
  }

  return (
    <React.Fragment>
      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        id='modal-admin'
      >
        <DialogTitle>Admin Panel</DialogTitle>
        <DialogContent>
          <Tabs value={tabVal} onChange={changeTab}>
            <Tab label='User Requests' />
            <Tab label='User Management' />
            <Tab label='Post Management' />
          </Tabs>
          <div
            role='tabpanel'
            hidden={tabVal !== 0}
          >
            <List dense className={classes.list}>
              {
                ['a', 'b', 'c'].map(value => {
                  const labelId = `request-item-${value}`;
                  return (
                    <ListItem key={value} button>
                      <ListItemIcon>
                        <PermIdentityIcon />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value} secondary='email@domain.com' />
                      <ListItemSecondaryAction>
                        <IconButton edge='end'>
                          <DoneOutlineIcon />
                        </IconButton>
                        <IconButton edge='end'>
                          <DeleteForeverIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })
              }
            </List>
          </div>
          <div
            role='tabpanel'
            hidden={tabVal !== 1}
          >
            <List dense className={classes.list}>
              {
                ['111', '222', '333'].map(value => {
                  const labelId = `users-item-${value}`;
                  return (
                    <ListItem key={value} button>
                      <ListItemIcon>
                        <VerifiedUserIcon />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value} />
                      <ListItemSecondaryAction>
                        <IconButton edge='end'>
                          <ArrowDownwardIcon />
                        </IconButton>
                        <IconButton edge='end'>
                          <DeleteForeverIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })
              }
            </List>
          </div>
          <div
            role='tabpanel'
            hidden={tabVal !== 2}
          >
            <Typography>
              {/* when users report posts they will show up here */}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color='primary'>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

export default AdminPanel;