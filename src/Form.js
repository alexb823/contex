import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';

class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
      <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Sign In</Typography>
      <Select>
      <MenuItem>English</MenuItem>
      <MenuItem>French</MenuItem>
      <MenuItem>Spanish</MenuItem>
      </Select>
      </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(Form);
