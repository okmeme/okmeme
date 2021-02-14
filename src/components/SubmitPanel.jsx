import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { ListItemIcon, withStyles } from '@material-ui/core';

import AddBoxIcon from '@material-ui/icons/AddBox';

const styles = theme => ({
  grid: {
    flexGrow: 1,
  },
  navbarButton: {
    color: 'white',
    paddingRight: 10,
    marginRight: 10,
  },
  selector: {
    '& .MuiListItemIcon-root': {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(0)
    }
  }
});

const visibilityTypes = [
  'Public', 'Verified Only', 'Staff Only'
]

const submitterTypes = [
  'As Yourself', 'As Verified', 'As Staff'
]

export function SubmitPanel(props) {

  const { classes, mediaTypes, categoryTypes, linkType, tags, url, text, visibleType, submitterType, nsfw } = props;

  const [open, setOpen] = React.useState(false)
  const [mediaType, setMediaType] = React.useState(mediaTypes[3])

  function handleMediaType(event, value) {
    setMediaType(mediaType => value);
  }

  function handleModalOpen() {
    setOpen(open => true);
  }

  function handleModalClose() {
    setOpen(open => false);
  }

  return (
    <React.Fragment>
      <Button color='inherit' className={classes.navbarButton} onClick={handleModalOpen}>
        <AddBoxIcon />
        <span className={classes.buttonText}>Submit</span>
      </Button>
      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        id='modal'
      >
        <DialogTitle>Submit a post</DialogTitle>
        <DialogContent>

          <TextField
            id="select-media-type"
            select
            fullWidth
            label="Media Type"
            onChange={handleMediaType}
            className={classes.selector}
            value={mediaType}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Select Media Type"
            margin="normal"
          >
            {mediaTypes.map(option => (
              <MenuItem key={option.name} value={option}>
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="title"
            label="Title goes here"
            className={classes.textField}
            fullWidth
            helperText="Enter a descriptive title or whatever"
          />
          {/* type and autosuggest existing ones in category or add a new one  */}
          <TextField
            id="tags"
            label="Tagging"
            className={classes.textField}
            helperText="Enter some tags"
            fullWidth
          />

          {/* changes based on link type */}
          {/* todo change helper text based on media type
                  pics: Enter direct image link ((need to think about imgur albums/custom embeds))
                  vids: Enter video link ((may want to think about custom embeds))
                  audio: Enter audio link ((may want to think about soundcloud/spotify/etc embeds))
                  url: Enter link
               */}
          <TextField
            id="link"
            label="Link"
            fullWidth
            className={classes.textField}
            helperText="Enter URL"
          />
          <TextField
            id="text"
            label="Text"
            fullWidth
            multiline
            className={classes.textField}
            helperText="Enter some text"
          />

          {/* highest visibility available based on role */}
          {/* <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
            spacing={2}
            className={classes.grid}
          >
            <TextField
              id="select-post-visibility"
              select
              label=""
              className={classes.typePadding}
              value={visibilityTypes}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Select post visibility"
              margin="normal"
            >
              {visibilityTypes.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField> */}

          {/* highest visibility available based on role */}
          {/* <TextField
              id="select-submit-visibility"
              select
              label=""
              className={classes.typePadding}
              value={visibleType}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Select submitter visibility"
              margin="normal"
            >
              {submitterTypes.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid> */}
          {/* NSFW on auto defaults to post visibility verified only or higher if not already selected */}
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch checked={nsfw} value="checkedA" />
              }
              label="NSFW (Visible to registered users only)"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color='secondary'>Cancel</Button>
          <Button onClick={handleModalClose} color='primary'>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

export default withStyles(styles)(SubmitPanel);