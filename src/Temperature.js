import {Chart} from 'react-google-charts';
import React from 'react'

class Graph2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            options:{
                title: 'moisture vs. time comparison',
                hAxis: {title: 'Time', minValue: 0, maxValue: 15},
                vAxis: {title: 'Moisture', minValue: 0, maxValue: 15},
                legend: 'none',
                curveType: 'function'
            },
            data:[
                ['Age', 'Weight'],
                [ 1,      40],
                [ 2,      80],
                [ 3,     50],
                [ 4,      30],
                [ 5,      50],
                [ 6,    80]
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
                height="400px"
                legend_toggle
            />
        );
    }
};
export default Graph2;