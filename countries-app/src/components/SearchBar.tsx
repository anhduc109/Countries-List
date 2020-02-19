import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fade,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  IconButton,
  Badge,
  Drawer
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import { HandleSearchInput, AppState } from "../types";
import FavoritesDrawer from "./FavoritesDrawer";
import ThemeContext from "../context-api/context";
import { toggleDrawer } from "../redux/actions";

type SearchBarProps = {
  handleSearchInput: HandleSearchInput | undefined;
};

//Styling Material UI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 65
    },
    grow: {
      flexGrow: 1
    },
    homelink: {
      textDecoration: "none"
    },
    title: {
      color: "white",
      fontFamily: " 'Righteous', sans-serif"
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "200px",
      [theme.breakpoints.up("sm")]: {
        width: "400px"
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    }
  })
);

const SearchBar = ({ handleSearchInput }: SearchBarProps) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const classes = useStyles();

  const favoriteCountries = useSelector(
    (state: AppState) => state.countries.favorites
  );

  const drawerStatus = useSelector((state: AppState) => state.ui.toggleDrawer);

  const dispatch = useDispatch();

  return (
    <div className="search-wrapper">
      <Drawer
        open={drawerStatus}
        anchor="right"
        onClose={() => dispatch(toggleDrawer(false))}
      >
        <FavoritesDrawer />
      </Drawer>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Link to={"/"} className={classes.homelink}>
              <Button size="large" className={classes.title}>
                Countries App
              </Button>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchInput}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show dark or light mode"
                color="inherit"
                onClick={switchTheme}
              >
                {theme.palette.type === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <IconButton
                aria-label="show favorite countries"
                color="inherit"
                onClick={() => dispatch(toggleDrawer(true))}
              >
                <Badge
                  badgeContent={favoriteCountries.length}
                  color="secondary"
                >
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

// Optimization with React.memo
export default React.memo(SearchBar);

SearchBar.displayName = "SearchBar";
