import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import get from 'lodash/get';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { GITHUB_TOKEN } from '../../consts';
import { getProfileData, getProfileRepos } from '../../redux/actions/profile';
import { getData } from '../../utils/storage';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import { styles } from './style';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githubToken: null
    };

    this.reposUrlCalled = false;
  }

  async componentDidMount() {
    const githubToken = getData(GITHUB_TOKEN);
    await this.setState({ githubToken });
    this.props.getProfileData({ githubToken });
  }

  componentDidUpdate() {
    const { githubData, getProfileRepos } = this.props;
    const { githubToken } = this.state;
    const reposUrl = get(githubData, 'repos_url', null);

    if (reposUrl && !this.reposUrlCalled) {
      getProfileRepos({ githubToken, reposUrl });
      this.reposUrlCalled = true;
    }
  }

  render() {
    const { githubData, classes, githubUserRepos } = this.props;

    return (
      <Grid container className={classes.homeContainer}>
        <Grid item xs={2} className={classes.leftContainer}>
          <LeftContainer {...githubData} />
        </Grid>
        <Grid item xs={10} className={classes.rightContainer}>
          <RightContainer repos={githubUserRepos} />
        </Grid>
      </Grid>
    );
  }
}

const actions = {
  getProfileData,
  getProfileRepos
};

const mapStateToProps = state => ({
  githubData: state.profile.githubData,
  githubUserRepos: state.profile.userRepos
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withStyles(styles)
)(Home);
