import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

import { styles } from './style';

const LeftContainer = ({ classes, avatar_url, bio, blog, email, followers, following, location, name, onLogout }) => (
  <Fragment>
    <Avatar alt={email} src={avatar_url} className={classes.avatar} />
    <Typography className={cx(classes.name, classes.whiteFont)}>{name}</Typography>
    <Typography className={cx(classes.whiteFont)}>{email}</Typography>
    <Typography className={cx(classes.whiteFont)}>{bio}</Typography>
    <Typography className={cx(classes.whiteFont)}>{location}</Typography>
    <IconButton className={classes.logoutButton} onClick={onLogout}>
      <Icon>logout</Icon>
    </IconButton>
  </Fragment>
);

export { LeftContainer };
export default withStyles(styles)(LeftContainer);
