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
        {/* <Grid className={classes.header} item xs={12}>
        </Grid> */}
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
                <ListItemText primary="Alpha 3 Code:" />
                <ListItemText primary={countryData.alpha3Code} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Population:" />
                <ListItemText primary={countryData.population} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Capital:" />
                <ListItemText primary={countryData.capital} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Region:" />
                <ListItemText primary={countryData.region} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Sub Region:" />
                <ListItemText primary={countryData.subregion} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Borders:" />
                <ListItemText primary={countryData.borders.join()} />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Calling Codes:" />
                <ListItemText primary={"+" + countryData.callingCodes.join()} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryDetail;
