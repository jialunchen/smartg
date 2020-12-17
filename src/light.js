import {Chart} from 'react-google-charts';
import React from 'react'
import dayjs from "dayjs"
import {blue} from "@material-ui/core/colors";

class Graph1 extends React.Component {
    render() {

        const { humidity_data = [] } = this.props;
        console.log(humidity_data)
        const data = [["Time", "lux"]];
        var currentdata = humidity_data.slice(humidity_data.length-48,humidity_data.length);
        var min_data = Math.min(currentdata)-1;
        var max_data = Math.max(currentdata)+1;
        console.log(min_data)

        currentdata.forEach((item, index) => {
            data.push([
                dayjs()
                    .subtract(currentdata.length - index - 2, "h")
                    .format("MM-DD HH"),
                item,
            ]);
        });
        const options = {
            title: 'Observed Light vs Time',
            // height: "500",
            // height_units:"%",
            // width: "550",
            // heighg_units:"%",
            titlePosition: "anchorOriginTopCenter",
            titleTextStyle: {
                color: "red",
                fontName: 'Times New Roman',
                fontSize: "35",
                bold: true,
                                    },
            // title: humidity_data,
            hAxis: {title: 'Time', minValue: 0, maxValue: 15},
            vAxis: {title: 'lux', viewWindowMode:'explicit',
                viewWindow:{
                    max:max_data,
                    min:min_data,
                }},
            legend: 'none',
            curveType: 'function'

        };
        // const data = [
        //     ['Time', 'lux'],
        //     [ 1,      12],
        //     [ 2,      5.5],
        //     [ 3,     14],
        //     [ 4,      5],
        //     [ 5,      3.5],
        //     [ 6,    7],
        // ];

        return (
            <Chart
                chartType="LineChart"
                data={data}
                options={options}
                width= {700}
                height= {400}
                legend_toggle
            />
        );
    };
}
export default Graph1;

//height="400px"