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
import ReportIcon from '@material-ui/icons/Report';

const reasons = {
  'dmca': {
    name: 'DMCA',
    description: 'You believe the content violates DMCA.'
  },
  'nsfw': {
    name: 'NSFW',
    description: 'You believe the content should/shouldn\'t be marked NSFW.'
  },
  'spam': {
    name: 'Spam',
    description: 'You believe the content is spam.'
  },
  'other': {
    name: 'Other Reason',
    description: 'Moderators should take a look.'
  }
}

export function ReportPanel(props) {

  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [reason, setReason] = React.useState('other');

  function handleModalOpen(event, value) {
    setOpen(true);
  }

  function handleModalClose(event, value) {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button size="small" color="secondary" onClick={handleModalOpen}>
        <ReportIcon />
      </Button>
      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleModalClose}
        id='modal'
      >
        <DialogTitle>Submit a Report</DialogTitle>
        <DialogContent>

          <TextField
            id="select-report-reason"
            select
            fullWidth
            label="Report Reason"
            onChange={(event) => {
              setReason(event.target.value);
            }}
            className={classes.selector}
            value={reason}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Select Report Reason"
            margin="normal"
          >
            {
              Object.keys(reasons).map(option => (
                <MenuItem key={option} value={option}>
                  {reasons[option]['name']} - {reasons[option]['description']}
                </MenuItem>
              ))
            }
          </TextField>

          <TextField
            id="information"
            label="Additional information"
            className={classes.textField}
            fullWidth
            helperText="Enter additional information"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color='secondary'>Cancel</Button>
          <Button onClick={handleModalClose} color='primary'>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

export default ReportPanel;