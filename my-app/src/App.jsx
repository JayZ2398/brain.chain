import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import ButtonAppBar from './shared/components/header.bar.tsx';
import GlobalTheme from './shared/styles/global.theme.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';
import LoginView from './pages/login/LoginView';
import Squads from './pages/squads/Squads';

function About() {
  return (
    <>
      <h1>About</h1>
      <p>About our product.</p>
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
              <LoginView />
            </Route>
            <Route path="/squads">
              <Squads />
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
