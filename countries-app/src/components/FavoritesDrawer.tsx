import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { AppState } from "../types";
import { removeCountry } from "../redux/actions";

//Styling Material UI
const useStyles = makeStyles(() =>
  createStyles({
    listDrawer: {
      width: 300,
      paddingTop: 6
    },
    headerDrawer: {
      textAlign: "center",
      paddingBottom: 5
    },
    flagImg: {
      width: 40
    },
    linkDetail: {
      color: "inherit",
      textDecoration: "none"
    }
  })
);

const FavoritesDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favoriteCountries = useSelector(
    (state: AppState) => state.countries.favorites
  );

  return (
    <div className={classes.listDrawer} role="presentation">
      <List>
        <Typography variant="h6" className={classes.headerDrawer}>
          Favorite Countries
        </Typography>
        {favoriteCountries.length > 0 ? (
          favoriteCountries.map(country => {
            return (
              <React.Fragment key={country.name}>
                <ListItem button>
                  <ListItemIcon>
                    <img
                      className={classes.flagImg}
                      src={country.flag}
                      alt={`Flag of ${country.name}`}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    {" "}
                    <Link
                      className={classes.linkDetail}
                      to={{
                        pathname: `/${country.name}`,
                        state: { data: country }
                      }}
                    >
                      {country.name}{" "}
                    </Link>
                  </ListItemText>
                  <ListItemIcon>
                    <IconButton
                      color="inherit"
                      onClick={() => dispatch(removeCountry(country))}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })
        ) : (
          <Typography color="textSecondary" align="center" variant="subtitle2">
            <Box fontStyle="italic" m={1}>
              You can add countries here by clicking the{" "}
              <span role="img" aria-label="heart emoji">
                ❤️
              </span>{" "}
              button on the table
            </Box>
          </Typography>
        )}
      </List>
    </div>
  );
};

export default FavoritesDrawer;
