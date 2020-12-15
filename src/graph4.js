import {Chart} from 'react-google-charts';
import React from 'react'
import dayjs from "dayjs"

class Graph4 extends React.Component {
    render() {

        const { humidity_data = [] } = this.props;
        console.log(humidity_data)
        const data = [["Time", "Moisture"]];
        //var currentdata = humidity_data.slice(humidity_data.length-24,humidity_data.length)
        var currentdata = humidity_data
        var min_data = Math.min(currentdata)-1;
        var max_data = Math.max(currentdata)+1;

        currentdata.forEach((item, index) => {
            data.push([
                dayjs()
                    .add( index +1, "h")
                    .format("MM-DD HH"),
                item,
            ]);
        });
        const options = {
            title: 'Predicted Moisture vs Time',
            // title: humidity_data,
            hAxis: {title: 'Time',},
            vAxis: {title: 'Moisture', viewWindowMode:'explicit',
                viewWindow:{
                    max:max_data,
                    min:min_data,
                }},
            legend: 'none',
            curveType: 'function'

        };
        return (
            <Chart
                chartType="LineChart"
                data={data}
                options={options}
                width= {"700px"}
                height={"400px"}
                legend_toggle
            />
        );
    };
}
export default Graph4;

//height="400px"