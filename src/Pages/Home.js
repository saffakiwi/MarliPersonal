import react from "react";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuHome from "../Components/menuHome";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { useRef, useEffect, useState } from "react";
import Map from "../Components/Map";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  hero: {
    backgroundColor: "#B1BC55",
    display: "flex",
    height: "600px",
    width: "100%",
  },
  menuLinks: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  heroimg: {
    borderRadius: "50%",
    margin: "auto",
    marginTop: "-50px",
  },
  heroDiv: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  headingText: {
    color: "#FFF",
    fontFamily: "Charm, cursive",
  },
  infoDiv: {
    height: "300px",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: "93%",
    marginTop: "-40px",
    margin: "auto",
    backgroundColor: "#FFF",
    opacity: "80%",
  },
  infoCardHeader: {
    marginBottom: "30px",
  },
  cardMap: {
    padding: "10px",
    height: "820px",
    backgroundColor: "#BEC95B",
    alignContent: "center",
    margin: "auto",
  },
  location: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "20px",
    width: "50%",
    height: "80%",
  },
  mapContainer: {
    height: "400px",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <MenuHome />

      <div className={classes.heroDiv}>
        <Paper className={classes.hero} elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className={classes.heroimg}
                elevation={3}
                src="/marli.png"
                alt="marli"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3" className={classes.headingText}>
                Marli de Klerk
              </Typography>
              <Typography variant="h4" className={classes.headingText}>
                Child & Adolescent Psychotherapist
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div className={classes.infoDiv}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card className={classes.infoCard} elevation={6}>
              <Typography variant="h5" className={classes.infoCardHeader}>
                About Me
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.infoCard} elevation={6}>
              <Typography variant="h5" className={classes.infoCardHeader}>
                Services
              </Typography>
              <Typography variant="body2">
                . Lorem ipsum dolor sit amet, consectetuer <br />
                . Aliquam tinciduntmauris eu risus. <br />
                . Vestibulum auctor dapibus neque. <br />
                . Nuncdignissim risus id metus. <br />. Vestibulum auctor
                dapibus neque.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div>
        <Paper className={classes.cardMap}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ height: "200px", margin: "auto" }}>
              <Card className={classes.location}>
                <Typography>Location</Typography>
                <Typography>
                  Bethlehem Psycological Services <br />
                  36 Sutherland Road <br />
                  Brookfield <br />
                  Tauranga
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} className={classes.map}>
              <Map />
            </Grid>
          </Grid>
        </Paper>
      </div>

      <div style={{ height: "200px" }}>
        <h1>PLACEMENT</h1>
      </div>
    </>
  );
}
export default Home;
