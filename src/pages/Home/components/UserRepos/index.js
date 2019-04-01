import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import cx from 'classnames';

import { styles } from './style';
import { LANGUAGES_ICON } from '../../../../consts';

const UserRepo = ({ classes, description, name, owner, open_issues, created_at, language, license, html_url }) => {
  return (
    <Card className={classes.cardContainer}>
      <Typography className={cx(classes.repoName, classes.fontFamily)}>{name}</Typography>
      <Typography className={cx(classes.repoCreatedDate, classes.fontFamily)}>{moment(created_at).format('LL')}</Typography>
      <Typography className={cx(classes.repoDescription, classes.fontFamily)}>{description}</Typography>
      <div className={classes.cardLinks}>
        {/* TODO <Avatar
          alt={language}
          src={language ? LANGUAGES_ICON[language.toUpperCase()] : LANGUAGES_ICON.NOT_DEFINED}
          className={classes.languageImage}
        />*/}
        <a href={html_url} target="_blank" className={classes.repoLink}>
          <IconButton>
            <Icon>link</Icon>
          </IconButton>
        </a>
      </div>
    </Card>
  );
};

export default withStyles(styles)(UserRepo);
