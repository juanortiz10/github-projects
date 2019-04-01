import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

import { styles } from './style';

const LeftContainer = ({ classes, avatar_url, bio, blog, email, followers, following, location, name }) => (
  <Fragment>
    <Avatar alt={email} src={avatar_url} className={classes.avatar} />
    <Typography className={cx(classes.name, classes.whiteFont)}>{name}</Typography>
    <Typography className={cx(classes.whiteFont)}>{email}</Typography>
    <Typography className={cx(classes.whiteFont)}>{bio}</Typography>
    <Typography className={cx(classes.whiteFont)}>{location}</Typography>
  </Fragment>
);

export default withStyles(styles)(LeftContainer);
