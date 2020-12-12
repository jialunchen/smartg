import {Chart} from 'react-google-charts';
import React from 'react'

async function getMoviesFromApi() {
    try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
    } catch(error) {
        console.error(error);
    }
}


class Graph1 extends React.Component {


    constructor(props){
        super(props);
        this.state={
            options:{
                title: 'times. vs light comparison',


                hAxis: {title: 'Time', minValue: 0, maxValue: 15},
                vAxis: {title: 'lux', minValue: 0, maxValue: 15},
                legend: 'none',
                curveType: 'function'
            },
            data:[
                ['Time', 'lux'],
                [ 1,      12],
                [ 2,      5.5],
                [ 3,     14],
                [ 4,      5],
                [ 5,      3.5],
                [ 6,    7]
            ]
        };
    }


    render() {
        return (
            <Chart
                chartType="LineChart"
                data={this.state.data}
                options={this.state.options}
                width="700px"
                height={"400px"}
                legend_toggle
            />
        );
    }
};
export default Graph1;

//height="400px"