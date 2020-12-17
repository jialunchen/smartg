//import React, {Component} from 'react';
import React, { useState, useEffect, Component } from "react";

import './App.css';
import Graph2 from './Moisture';
import Graph1 from './light';
import Graph3 from './graph3';
import Graph4 from "./graph4";
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
// import p1 from "./pic/IMG_0015.JPG";
// import axios from "axios";
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { createMuiTheme } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import {blue} from "@material-ui/core/colors";
//const datalink = "https://api.github.com/users/deekshasharma";
// const datalink = "http://18.216.177.93:8080/sensor?pos=99&row=99";
const datalink = "http://18.216.177.93:8080/sensor?pos=20&row=17";
const datalink2 = "http://18.216.177.93:8080/leaves"
//const datalink2 = "https://reactnative.dev/movies.json";
// const datalink = "/sensor?pos=20&row=17";
// const datalink2 = "/leaves";

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
              Team:Jialun Chen, Brent Uramoto, Tyler Kirby


          </h1>


       </header>


      <div className="Board_raw">
          <board_name className={"H3"}>
              Total Days
              <h4 className={"H4"}>
                  {userData.soil_observed?.length%24}
              </h4>

           </board_name>
          <board_name className={"H3"}>
              Initial Number of Leaves
              <h4 className={"H4"}>
                  10
              </h4>

          </board_name>

          <board_name className={"H3"}>
              Number of Leaves
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
            <Graph4 humidity_data= {userData.soil_predicted} ClassName={"graphbox"}/>

      </div>


      {/*<div className = "First_raw">*/}
      {/*      <Graph4 humidity_data= {userData.soil_predicted} ClassName={"graphbox"}/>*/}
      {/*      <h2 className={"infobox"}>*/}
      {/*          Information:*/}
      {/*      </h2>*/}

      {/*</div>*/}



      <div className="Cv_raw">
          <h3 className={"H6"}>Computer Vision Model Result:</h3>
            {/*<img src={p1} width={"700"} />*/}
          <img src={userimg.annotated_img} height={"400px"} width={"700px"}/>
      </div>




    </div>


  );
}

export default App;
