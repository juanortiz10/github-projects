import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getData } from "../../utils/storage";
import { GITHUB_CODE } from "../../consts";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const githubCode = getData(GITHUB_CODE);
  return (
    <Route
      {...rest}
      render={props =>
        githubCode ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
