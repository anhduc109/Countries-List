import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { Country } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 50
    },
    textWidth: {
      maxWidth: 200
    },
    left: {
      textAlign: "left"
    },
    title: {
      marginTop: 15
    },
    center: {
      textAlign: "center"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary
    },
    flag: {
      width: "100%"
    }
  })
);

const CountryDetail = ({ location }: any) => {
  const classes = useStyles();

  const countryData: Country = location.state.data;

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={5} className={classes.center}>
          <Paper className={classes.paper} elevation={3}>
            <img
              className={classes.flag}
              src={countryData.flag}
              alt={`Flag of ${countryData.name}`}
            />
            <Typography variant="h4" className={classes.title}>
              {countryData.name}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={3}>
            <List component="nav" aria-label="Country detail">
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Alpha 3 Code:"
                />
                <ListItemText
                  className={classes.left}
                  primary={countryData.alpha3Code}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Population:"
                />
                <ListItemText
                  className={classes.left}
                  primary={countryData.population}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Capital:"
                />
                <ListItemText
                  className={classes.left}
                  primary={countryData.capital}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText className={classes.textWidth} primary="Region:" />
                <ListItemText
                  className={classes.left}
                  primary={countryData.region}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Sub Region:"
                />
                <ListItemText
                  className={classes.left}
                  primary={countryData.subregion}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Borders:"
                />
                <ListItemText
                  className={classes.left}
                  primary={countryData.borders.join()}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  className={classes.textWidth}
                  primary="Calling Codes:"
                />
                <ListItemText
                  className={classes.left}
                  primary={"+" + countryData.callingCodes.join()}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryDetail;
