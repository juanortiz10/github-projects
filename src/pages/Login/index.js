import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GitHubLogin from 'react-github-login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { getGithubToken } from '../../redux/actions/login';
import { styles } from './style';
import { GITHUB_CODE } from '../../consts';

class Login extends Component {
  static propTypes = {
    getGithubToken: PropTypes.func.isRequired
  };

  handleSuccess = object => {
    if (object && object.code) {
      const { getGithubToken, history } = this.props;
      getGithubToken({ code: object.code });
    }
  };

  handleOnFailure = error => {
    alert('Algo salio mal. Intentalo de nuevo');
  };

  render() {
    const { classes, githubToken } = this.props;

    if (githubToken) {
      return <Redirect to="/home" />;
    }

    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography className={classes.cardTitle} variant="h1">
            Iniciar Sesion
          </Typography>
          <GitHubLogin
            className={classes.button}
            clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
            redirectUri={process.env.REACT_APP_GITHUB_REDIRECT_URI}
            onSuccess={this.handleSuccess}
            onFailure={this.handleOnFailure}
            buttonText="Github Account"
          />
        </Card>
      </div>
    );
  }
}

const actions = {
  getGithubToken
};

const mapStateToProps = state => ({
  githubToken: get(state, 'login.githubToken', null)
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withStyles(styles)
)(Login);
