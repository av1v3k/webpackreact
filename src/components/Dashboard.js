import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";

import {
  useRouteMatch,
  Link as RouterLink,
  Switch,
  Route,
} from "react-router-dom";

import WithLoading from "../HOC/WithLoading";
import GreetUser from "../HOC/GreetUser";
import PaperMachine from "./PaperMachine";
import WrapperPaper from "./WrapperPaper";

function Hello({ name }) {
  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
    >
      Hello, {name}
    </Typography>
  );
}

const User = GreetUser(Hello);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const ListData = ({ data }) => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <li key="asdf">
        <RouterLink to={`${url}/rendering`}>asdf</RouterLink>
      </li>
      <li key="er">
        <RouterLink to={`${url}/wash`}>er</RouterLink>
      </li>
      <li key="iopip">
        <RouterLink to={`${url}/clean`}>iopip</RouterLink>
      </li>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:slug`}>
          <PaperMachine />
        </Route>
      </Switch>
    </>
  );
};

const ListWithLoader = WithLoading(ListData);


const MyDashBoard = () => {

  const { path, url } = useRouteMatch();

  return (
    <>
      <header>header</header>
      <div id="main_content">
        <li key="asdf">
          <RouterLink to={`${url}/rendering`}>Rendering</RouterLink>
        </li>
        <li key="er">
          <RouterLink to={`${url}/wash`}>Wash</RouterLink>
        </li>
        <li key="iopip">
          <RouterLink to={`${url}/clean`}>Clean</RouterLink>
        </li>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:slug`}>
            <WrapperPaper />
          </Route>
        </Switch>
      </div>
      <footer>{"Copyright - " + new Date().getFullYear()}</footer>
    </>
  );
};

export default function Dashboard() {
  return <MyDashBoard />;
}

