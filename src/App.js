//import React, {Component} from 'react';
import React, { useState, useEffect, Component } from "react";
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Graph2 from './Moisture';
import Graph1 from './light';
import Graph3 from './graph3';
import Graph4 from "./graph4";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import p1 from "./pic/IMG_0015.JPG";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {blue} from "@material-ui/core/colors";
//const datalink = "https://api.github.com/users/deekshasharma";
// const datalink = "http://18.216.177.93:8080/sensor?pos=99&row=99";
const datalink = "http://18.216.177.93:8080/sensor?pos=20&row=17";
const datalink2 = "http://18.216.177.93:8080/leaves"
//const datalink2 = "https://reactnative.dev/movies.json";



// const useStyles = makeStyles((theme) => ({
//     margin: {
//         margin: theme.spacing(1),
//         height: 50,
//         top:150,
//         width:170
//
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
//     root: {
//         flexGrow: 1,
//
//
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         // height:"100%",
//     },
//     slider:{
//         margin: theme.spacing(1),
//         width:170,
//         top:150,
//     },
//
//     paper_header:{
//         height:200,
//         color:"#3f51b5",
//     },
//     paper_second:{
//         height:200,
//         color:"#3f51b5",
//     },
//
// }));

// function valuetext(value) {
//     return `${value}°C`;
// }
//
// let light =1
// function Shoot(){
//     if (light==1){alert("The light is ON"); }
//     if(light ==-1){alert("The light is OFF");}
//     light = light*-1
//
// }


function App() {
    // const classes = useStyles();
    const [userData, setUserData] = useState({});
    const [userimg, setUserimg] = useState({});

    useEffect(() => {
        getGitHubUserWithFetch();
    }, []);

    useEffect(() => {
        getimg();
    }, []);

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(datalink);
        const jsonData = await response.json();
        // const response2 = await fetch(datalink2);
        // const jsonData2 = await response2.json();
        setUserData(jsonData);
        // setUserimg(jsonData2);
    };
    const getimg = async () => {
        const response2 = await fetch(datalink2);
        const jsonData2 = await response2.json();
        setUserimg(jsonData2);
    };

    // userData.soil_observed && userData.soil_observed[1]
    // const totalday = [userData.soil_observed && userData.soil_observed];
    //var totalday= userData.soil_observed;
    console.log(userData.soil_observed?.length);



  return (

    <div className="App">
      <header className="App-header">
          Wild Plant Growth Analysis
          <h1 className={"H1"}>

          </h1>
          <h1 className={"H1"}>
              team:
          </h1>


       </header>


      <div className="Board_raw">
          <board_name className={"H3"}>
              Total days
              <h4 className={"H4"}>
                  {userData.soil_observed?.length%24}
              </h4>

           </board_name>
          <board_name >
              <img src={userimg.annotated_img} height={"200px"}/>
              {/*<h4 className={"H4"}>*/}
              {/*    8*/}
              {/*</h4>*/}

          </board_name>

          <board_name className={"H3"}>
              Number of leaves
              <h4 className={"H4"}>
                  {userimg.number_of_leaves}
              </h4>

          </board_name>
      </div>


      <div className = "First_raw">
          <Graph1 humidity_data= {userData.light_observed} ClassName={"graphbox"} />
          <Graph2 humidity_data= {userData.soil_observed} ClassName={"graphbox"}/>
          {/*<Button  size = "medium" className={classes.margin} variant="contained" color="primary" onClick={Shoot}>Turn on*/}
          {/*</Button>{" "}*/}

      </div>



      <div className = "First_raw">
            <Graph3 humidity_data= {userData.light_predicted} ClassName={"graphbox"}/>
            <h2 className={"infobox"}>
                Information:

            </h2>

      </div>


      <div className = "First_raw">
            <Graph4 humidity_data= {userData.soil_predicted} ClassName={"graphbox"}/>
            <h2 className={"infobox"}>
                Information:
            </h2>

      </div>



      <div className="First_raw">
            {/*<img src={p1} width={"700"} />*/}


      </div>




    </div>


  );
}

export default App;
