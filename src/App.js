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
const datalink = "https://smart-plant-123.herokuapp.com/sensor?pos=99&row=99";
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
    const a = { "soil_observed": [ 9.011968375907138, 9.28008375472272, 9.809730415687486, 10.408498239934353, 10.858866761975486, 10.997226037207284, 10.773312887258673, 10.268470515009552, 9.66609813358185, 9.185025672539629, 9.000017208077018, 9.178282643063664, 9.65506168339481, 10.257149967399709, 10.765820772468887, 10.996284091828219, 10.864817176066493, 10.41917934616712, 9.821261980179038, 9.288276588985584, 9.013846185874803, 9.09766588907346, 9.509285664163354, 10.099172217176724, 10.653031472178755, 10.969657355489197, 10.934025968471188, 10.559081486773925, 9.981033798250788, 9.409876154359242, 9.053098790103968, 9.040311840174386, 9.376160549669207, 9.938637748756472, 10.523406635729046, 10.91803228114317, 10.979155021022436, 10.684570177206073, 10.141294576179694, 9.546689460211237, 9.116763065497409, 9.00769911754364, 9.259118383809637, 9.779685235331744, 10.380288067786463, 10.842739793627487, 10.999040880152615, 10.792410245078472, 10.297912696675125, 9.695189378897783 ], "soil_predicted": [ 5.195696102480157, 1.1285124217948228, 0.09197507684813816, 0.002771180675156118, 3.0761227639791124e-05, 1.2567921406090228e-07, 1.8893194123460048e-10, 1.0449142817120434e-13, 2.1260410751974675e-17, 1.5913726750962553e-21, 4.3820672302757264e-26, 4.439072110309463e-31, 1.6542878035155605e-36, 2.2679606876413366e-42, 1.1438406330004109e-48, 2.1222720043263357e-55, 1.4485786892061442e-62, 3.63737985951299e-70, 3.3600113332945483e-78, 1.1418218384476847e-86, 1.4274518441189273e-95, 6.564930081260264e-105, 1.1107191566472058e-114, 6.913276666377578e-125, 1.5829570480568807e-135, 1.3333981319180302e-146, 4.131959650722665e-158, 4.710400338931478e-170, 1.975445649063981e-182, 3.0477396786725492e-195, 1.7298011087150524e-208, 3.611769208526583e-222, 2.7742738566403037e-236, 7.839424566855668e-251, 8.14937982686783e-266, 3.1165238323982115e-281, 4.384518055726976e-297, 2.2692314372e-313, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], "light_observed": [ 0.15425144988758405, 0.6940609481780848, 0.9817318805486269, 0.9127591073062679, 0.5121990679157323, -0.07443272610791254, -0.6340245881664658, -0.9632879022236839, -0.9426078418952791, -0.5794970626159506, -0.0058665030401412535, 0.5698952406447714, 0.9386253553668678, 0.9663715094446489, 0.6430540758405606, 0.08612786059122664, -0.5020868968419476, -0.9079034506746335, -0.983896702032526, -0.7024598111023894, -0.16583321406258283, 0.4310372979898706, 0.8713205154272442, 0.9950702846232785, 0.7573307707627155, 0.24446802029242545, -0.3572051094559801, -0.8291127131739437, -0.9998201254181716, -0.8073127317255466, -0.321524647107235, 0.28106695979877483, 0.7815525191636024, 0.998115561506946, 0.8520830321481593, 0.3965056503747052, -0.2031143638607441, -0.7289469613627912, -0.9899675968142596, -0.8913526544058872, -0.4689269852871197, 0.12385054976191213, 0.6716356384165121, 0.9754288310631233, 0.9248680908644427, 0.5383211311445059, -0.043787210277547214, -0.6099885273467655, -0.9545931202139238, -0.9524129804151563 ], "light_predicted": [ -0.48675525710171963, -0.10265516668400994, -0.008263596366062312, -0.00024779945441943165, -2.745798992639201e-06, -1.1210980363002902e-08, -1.6849246874140725e-11, -9.317879850604512e-15, -1.895805870982536e-18, -1.4190211711220429e-22, -3.907455931959385e-27, -3.958280291523535e-32, -1.4751125272778138e-37, -2.0223182906831418e-43, -1.019951385608598e-49, -1.892408911105475e-56, -1.2916832452065067e-63, -3.2434155196365135e-71, -2.996088753240537e-79, -1.0181511986601074e-87, -1.2728446390572874e-96, -5.8538829828314585e-106, -9.904172457502616e-116, -6.164500174484162e-126, -1.4115070855430797e-136, -1.1889778774224975e-147, -3.684427402071086e-159, -4.200217221493325e-171, -1.7614852747748019e-183, -2.7176392161800096e-196, -1.542446476689625e-209, -3.220578748759248e-223, -2.47379245740318e-237, -6.990337063318666e-252, -7.2667210917069425e-267, -2.7789733632282605e-282, -3.909631224633538e-298, -2.0234511455e-314, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] }

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(datalink1);
        const jsonData = await response.json();
        setUserData(jsonData);
    };






  return (
    <div className="App">
      <header className="App-header">
          Smart garden monitor
          <h1 className={"H1"}>
              {userData.title}
              {typeof a.soil_observed}

          </h1>
          <h1 className={"H1"}>
              Team: Tyler Kirby, Jialun Chen, Brent Uramoto
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
          <Graph1/>
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
