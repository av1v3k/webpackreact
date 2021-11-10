import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
  Link as RouterLink,
} from "react-router-dom";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Header from "./Header";
import SideBar from "./SideBar";
import NewTopic from "./NewTopic";
import CountDownTimer from "./CountDownTimer";

import WithLoading from "../HOC/WithLoading";

const ListData = ({ data, url }) => {
  return data ? (
    <ul>
      {data.map((item, idx) => (
        <li key={idx + "df"}>
          <RouterLink to={`${url}/${item.id}`}>
            {item.name + " " + item.id}
          </RouterLink>
        </li>
      ))}
    </ul>
  ) : null;
};

const ListWithLoader = WithLoading(ListData);
const NewTopicWrapper = WithLoading(NewTopic);

const mdTheme = createTheme();

export default function DashboardWrapper() {
  const [isLoading, setLoaded] = React.useState({
    isLoading: true,
    data: null,
  });
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setLoaded({ isLoading: true });
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then((data) => setLoaded({ isLoading: false, data: data }));
  }, []);

  React.useEffect(() => {

  }, [endTime]);

  const { url, path } = useRouteMatch();
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header toggleDrawer={toggleDrawer} open={open} />
        <SideBar toggleDrawer={toggleDrawer} open={open} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <ListWithLoader
                    isLoading={isLoading.isLoading}
                    data={!isLoading.isLoading ? isLoading.data.data : null}
                    url={url}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Switch>
                    <Route exact path={path}>
                      <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/:topicId`}>
                      <NewTopic />
                    </Route>
                  </Switch>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <CountDownTimer endTime={1635902557311} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
