import {Chart} from 'react-google-charts';
import React from 'react'
import dayjs from "dayjs"

class Graph2 extends React.Component {
    render() {

        const { humidity_data = [] } = this.props;
        console.log(humidity_data)
        const data = [["Time", "Soil Moisture"]];
        var currentdata = humidity_data.slice(humidity_data.length-48,humidity_data.length)
        var min_data = Math.min(currentdata)-1;
        var max_data = Math.max(currentdata)+1;

        currentdata.forEach((item, index) => {
            data.push([
                dayjs()
                    .subtract(currentdata.length - index - 2, "h")
                    .format("MM-DD HH"),
                item,
            ]);
        });
        const options = {
            title: 'Observed Soil Moisture vs Time',
            // height: "500",
            // height_units:"%",
            // width: "550",
            // heighg_units:"%",
            titleTextStyle: {
                color: "red",
                fontName: 'Times New Roman',
                fontSize: "35",
                bold: true,
            },
            // title: humidity_data,
            hAxis: {title: 'Time',},
            vAxis: {title: 'Soil Moisture', viewWindowMode:'explicit',
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
export default Graph2;

//height="400px"