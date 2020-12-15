//import React, {Component} from 'react';
import React, { useState, useEffect, Component } from "react";
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Graph2 from './Temperature'
import Graph1 from './humidity'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import p1 from "./pic/IMG_0015.JPG";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
//const datalink = "https://api.github.com/users/deekshasharma";
const datalink = "http://18.216.177.93:8080/sensor?pos=99&row=99";
const datalink1 = "https://reactnative.dev/movies.json";




const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        height: 50,
        top:150,
        width:170

    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    slider:{
        margin: theme.spacing(1),
        width:170,
        top:150


    }
}));

function valuetext(value) {
    return `${value}°C`;
}

let light =1
function Shoot(){
    if (light==1){alert("The light is ON"); }
    if(light ==-1){alert("The light is OFF");}
    light = light*-1

}

//
// function App() {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <Grid container spacing={1}>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs
//                     </Paper>
//                 </Grid>
//
//             </Grid>
//             <Grid container spacing={3}>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs</Paper>
//                 </Grid>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs</Paper>
//                 </Grid>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs</Paper>
//                 </Grid>
//             </Grid>
//             <Grid container spacing={3}>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs</Paper>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Paper className={classes.paper}>xs=6</Paper>
//                 </Grid>
//                 <Grid item xs>
//                     <Paper className={classes.paper}>xs</Paper>
//                 </Grid>
//             </Grid>
//         </div>
//
//
//     );
// }




function App() {
    const classes = useStyles();
    const [userData, setUserData] = useState({});
    let test;


    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(datalink);
        const jsonData = await response.json();
        setUserData(jsonData);
    };
    test = userData.soil_observed && userData.soil_observed[1]
    console.info(userData.soil_observed && userData.soil_observed[1])








  return (
    <div className="App">
      <header className="App-header">
          Smart garden monitor
          <h1 className={"H1"}>
              {userData.soil_observed && userData.soil_observed[1]}



          </h1>
          <h1 className={"H1"}>

          </h1>


       </header>

      <empty_bar className={"Empty_bar"}>

      </empty_bar>
      <div className="Board_raw">
          <board_name className={"H3"}>
              Total days
              <h4 className={"H4"}>
                  8
              </h4>

           </board_name>
          <board_name className={"H3"}>
              Current moisture
              <h4 className={"H4"}>
                  8
              </h4>

          </board_name>

          <board_name className={"H3"}>
              Number of leavesc
              <h4 className={"H4"}>
                  8
              </h4>

          </board_name>




      </div>
      <div className = "First_raw">
          <Graph1 humidity_data= {userData.soil_observed && userData.soil_observed[1]} />
          <h2 className={"H2"}>

                Information:


          </h2>
          <Button  size = "medium" className={classes.margin} variant="contained" color="primary" onClick={Shoot}>Turn on </Button>{" "}

       </div>
      <div className = "First_raw">
            <Graph2/>
            <h2 className={"H2"}>
                Information:

            </h2>
          <div className={classes.slider}>
              <Typography id="discrete-slider" gutterBottom>
                  Moisture
              </Typography>
              <Slider
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={100}
              />
          </div>

        </div>
        <div className="First_raw">
            <img src={p1} width={"700"} />

        </div>




    </div>


  );
}





export default App;
