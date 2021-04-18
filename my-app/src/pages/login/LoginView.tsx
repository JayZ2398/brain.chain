// Taken from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useUser from "../../shared/hooks/useUser";
import { signInWithGoogle } from "../../shared/firebase/firebase";

import logo from "../../media/logo.svg";
import loginBackground from "../../media/loginBackground.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  loginBackgroundImage: {
    height: "100vh",
  },
  loginPanel: {
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "white",
  },
  loginView: {
    height: "100%",
    backgroundColor: "#FDE3E4",
    display: "grid",
    gridTemplateColumns: "2fr 5fr",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleSignInIcon: {
    justifySelf: "start",
  },
}));

// Not working
// eslint-disable-next-line unused-imports/no-unused-vars
const GoogleSignInButton = () => {
  const classes = useStyles();
  return (
    <Button
      onClick={signInWithGoogle}
      className={classes.submit}
      fullWidth
      variant="outlined"
      color="primary"
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item component={Box} marginRight="auto">
          <Grid container justify="center" alignItems="center">
            <img
              src="https://img.icons8.com/dusk/64/000000/google-logo--v1.png"
              alt="google logo"
            />
          </Grid>
        </Grid>
        <Box marginRight="auto">
          <span> Continue with Google</span>
        </Box>
      </Grid>
    </Button>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Brain Chain
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const onLogin = () => {
  return <Redirect to={"/dashboard"} />;
};

export default function LoginView() {
  const classes = useStyles();
  const { user, login } = useUser();

  // Redirect handling
  const [redirect, setRedirect] = useState(user.isAuthenticated);

  // Form state
  const defaultFormValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return redirect ? (
    onLogin()
  ) : (
    <>
      <CssBaseline />
      <Box className={classes.loginView}>
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.loginPanel}
        >
          <div className={classes.paper}>
            {/* <LockOutlinedIcon /> */}
            <img src={logo} alt="brain chain logo" />
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formValues.email}
                onChange={handleInputChange}
                color="secondary"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleInputChange}
                color="secondary"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                // Add an error pop up
                onClick={() =>
                  login(formValues.email, formValues.password)
                    .then(() => setRedirect(true))
                    .catch(() => {})
                }
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2" color="secondary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2" color="secondary">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Grid>
        <Box marginLeft="auto" marginRight="auto">
          <img
            className={classes.loginBackgroundImage}
            src={loginBackground}
            alt="cute art of student studying"
          />
        </Box>
      </Box>
    </>
  );
}
