import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import UserRepo from '../UserRepos';

class RightContainer extends Component {
  renderRepos() {
    const { repos } = this.props;
    if (!isEmpty(repos)) {
      const objectKeys = Object.keys(repos);
      let reposComponent = [];

      for (const objKey in objectKeys) {
        reposComponent.push(<UserRepo key={objKey} {...repos[objKey]} />);
      }

      return reposComponent;
    }
  }
  render() {
    return <div>{this.renderRepos()}</div>;
  }
}

export default RightContainer;
