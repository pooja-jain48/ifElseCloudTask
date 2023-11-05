import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

    highcharts = Highcharts;
    columnConfig: Options | any;
    lineConfig: Options | any;
    pieChartJson: any;
    pieConfig: Options | any;

    constructor() {
        this.pieChartJson = [
            { name: 'Men', y: 35 },
            { name: 'Women', y: 45 },
            { name: 'Electronics', y: 20 },
        ];
    }

    ngOnInit() {
        this.getColumnChart();
        this.getLineChart();
        this.getDonutChartConfig()
    }

    getColumnChart() {
        this.columnConfig = {
            chart: {
                type: 'column',
                width: 450, // Adjust the height to make the graph smaller
                height: 300,
                spacing: [10, 10, 10, 10], // Add spacing on all sides
            },
            title: {
                text: 'Balance Overview',
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
            },
            tooltip: {
                valueSuffix: 'K',
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                },
            },
            series: [
                {
                    type: 'column',
                    name: 'Income',
                    data: [
                        70, 69, 95, 145, 188, 255,
                        222, 260, 233, 183, 139, 96,
                    ],
                },
                {
                    type: 'column',
                    name: 'Borrow',
                    data: [
                        60, 57, 85, 130, 195, 215,
                        172, 210, 143, 233, 179, 200,
                    ],
                },
            ],
        };
    }

    getLineChart() {
        this.lineConfig = {
            chart: {
                type: "line",
                width: 450, // Adjust the height to make the graph smaller
                height: 300,
                spacing: [10, 10, 10, 10], // Add spacing on all sides 
            },
            title: {
                text: "Sales Statistics",
            },
            xAxis: {
                categories: [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                ],
            },
            tooltip: {
                valuePrefix: "$",
                valueSuffix: "K",
            },
            yAxis: {
                title: {
                    text: "Sales Amount ($)",
                },
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    type: "line",
                    name: "Category 1",
                    data: [70, 69, 95, 145, 188, 255, 222, 260],
                },
                {
                    type: "line",
                    name: "Category 2",
                    data: [60, 57, 85, 130, 195, 215, 172, 210],
                },
            ],
        };
    }

    getDonutChartConfig() {
        this.pieConfig = {
            chart: {
                type: 'pie',
                width: 450, // Adjust the height to make the graph smaller
                height: 300,
                spacing: [10, 10, 10, 10], // Add spacing on all sides
            },
            title: {
                text: 'Top Products',
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>',
            },
            plotOptions: {
                pie: {
                    innerSize: '60%',
                    dataLabels: {
                        enabled: false,
                    },
                },
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Distribution',
                    data: this.pieChartJson,
                },
            ],
        };
    }
}
