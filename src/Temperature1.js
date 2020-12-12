import React, { Component } from 'react';
// 引入 ECharts 主模块
//import echarts from 'echarts/lib/echarts';
import echarts from 'echarts'
//
//import  'echarts/lib/chart/line';

const temp = {"temps":[50.0,52.52441295442369,52.72789228047704,50.4233600241796,47.72959251407622,47.12322717601059,49.161753505403226,51.970959796156365,52.96807473987015,51.23635545572527,48.36793666733189,47.00002938034789,48.39028124599869,51.26050111047992,52.97182206708461,51.95086352047135,49.1362900500048,47.11580752436133,47.74703825968497,50.449631628988854,52.73883575218288,52.50996691560817,49.97344607212879,47.46133878747449]}
//const temp = {"temps":[1,2,3,4,5,6,7,8]}

class Echarts  extends Component {
    componentDidMount() {
        // 基于准备好的dom，set echarts
        var myChart = echarts.init(document.getElementById('main'));
        //
        myChart.setOption({
            title: {
                text: 'temperature by the time',
                subtext: 'Example ',
                left: 'center'

            },
            legend: {
                data: ['temp'],
                right: '10%',
                top: "30",
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '10%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title:'save as image'
                    }
                }
            },

            xAxis: {
                //type: 'category',
                //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                //interval: 'auto',
                type: 'category',
                axisLabel : {
                    formatter: '{value} time'
                },
                name: 'time',
                nameLocation: 'middle',
                nameGap: 30

            },
            yAxis: {
                type: 'value',
                axisLabel : {
                    formatter: '{value} °F'
                },
                name: 'Temperature',
                nameLocation: 'middle',
                nameGap: 50


            },
            series: [{
                //data: [520, 932, 901, 1934, 1290, 1330, 1320],
                name: 'temp',
                data: temp["temps"],
                type: 'line'
            }]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 800, height: 400 }}></div>
        );
    }
}
export default Echarts ;