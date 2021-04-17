import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import ButtonAppBar from './shared/components/header.bar.tsx';
import GlobalTheme from './shared/styles/global.theme.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';

function About() {
  return (
    <>
      <h1>About</h1>
      <p>About our product.</p>
    </>
  );
}

function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>Login to your account here.</p>
    </>
  );
}

function Home() {
  return (
    <>
      <DashboardPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={GlobalTheme}>

        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <ButtonAppBar />
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
