import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import ButtonAppBar from "./shared/components/header.bar.tsx";
import GlobalTheme from "./shared/styles/global.theme.tsx";
import DashboardPage from "./pages/dashboard/DashboardPage.tsx";
import LoginView from "./pages/login/LoginView";
import Squads from "./pages/squads/Squads";
import "./App.css";
import UserProvider from "./shared/contexts/UserContext";
import DatabaseContext, {
  DatabaseContextProvider,
} from "./shared/contexts/DatabaseContext";
import Database from "./shared/db/db";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";


import store from "./shared/redux/store";

import Page from "./shared/components/Page";

function App() {
  return (
    <DatabaseContextProvider>
      <UserProvider>
        <Router>
          <ReduxProvider store={store}>
            <ThemeProvider theme={GlobalTheme}>
      <CssBaseline />
              <div style={{ width: "100%", height: "100%" }}>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/squads">
                    <ButtonAppBar />
                    <Page>
                      <Squads />
                    </Page>
                  </Route>
                  <Route path="/dashboard">
                    <ButtonAppBar />
                    <Page>
                      <DashboardPage />
                    </Page>
                  </Route>
                  <Route path="/">
                    <LoginView />
                  </Route>
                </Switch>
              </div>
            </ThemeProvider>
          </ReduxProvider>
        </Router>
      </UserProvider>
    </DatabaseContextProvider>
  );
}

export default App;
