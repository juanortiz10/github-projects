import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import GitHubLogin from "react-github-login";

import { styles } from "./style";
import { GITHUB_CODE } from "../../consts";
import { saveData } from "../../utils/storage";

class Login extends Component {
  handleSuccess = object => {
    if (object && object.code) {
      saveData(GITHUB_CODE, object.code);
      this.props.history.replace("/home");
    }
  };

  handleOnFailure = error => {
    alert("Algo salio mal. Intentalo de nuevo");
  };

  render() {
    const { classes } = this.props;
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

export default withStyles(styles)(Login);
