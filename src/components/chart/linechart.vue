<template>
    <div class="column_box" :class="{'col-md-12 col-sm-12 col-xs-12': this.Full, 'col-md-6 col-sm-12 col-xs-12': !this.Full}">
        <div class="column_box_holer">
            <COptions @fullcolumn="FullColumn" ></COptions>
            <highcharts :options="options" ref="highcharts"></highcharts> 
        </div>
    </div>
</template>

<script>
import COptions from './options'

export default {
    name: 'linechart',
    props: {
        title: {
            required: true,
            default: ''
        },
        list: {
            required: true,
            default: []
        },
        labeltext: {
            required: true,
            default: ''
        },
        labelstatus: {
            required: true,
            default: false
        },
        marker: {
            required: true,
            default: false
        },
        type: {
            required: true,
            default: false
        },
        timeline: {
            required: true,
            default: []
        },
        suffix: {
            required: true,
            default:''
        }
    },
    data() {
        return {
            Full: false,
            HighChart: null,
            options: {
                credits: {
                    enabled: false
                },
                chart: {
                    height: (9 / 16 * 100) + '%',
                    type: this.type,
                    reflow: true,
                    className: 'line_chart'
                },
                title: {
                    text: this.title,
                    align: 'right',
                    y: 5
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    pointFormat: '<div class="value">{point.y} '+ this.suffix +'</div>'
                },
                xAxis: {
                    categories: this.timeline,
                    crosshair: true,
                    alternateGridColor: '#fcfbff',
                    lineColor: '#eee'
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    gridLineDashStyle: 'LongDash',
                    lineColor: '#eee'
                },
                plotOptions: {
                    spline: {
                        marker: {
                            enabled: this.marker,
                            fillColor: 'rgba(256, 256, 256, 0)',
                            lineWidth: 5,
                            width: 12,
                            height: 12,
                            lineColor: "#FFFFFF"
                        },
                        dataLabels: {
                            enabled: this.labelstatus,
                            formatter: function () {
                                var isLast = false;
                                if (this.point.x === this.series.data[this.series.data.length - 1].x && this.point.y === this.series.data[this.series.data.length - 1].y) isLast = true;
                                return isLast ? this.y : '';
                            }
                        }
                    },
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    // alert('تاریخ: ' + this.category + ',' + this.y);
                                }
                            }
                        },
                        color: {
                            linearGradient: [0, 0, 0, 250],
                            stops: [
                                [0, '#EC644B'],
                                [1, '#F5D76E']
                            ]
                        },
                        dataLabels: {
                            enabled: true,
                            valueDecimals: 2,
                            valuePrefix: '$',
                            valueSuffix: ' USD'
                        },
                        shadow: {
                            color: '#e5e3ff',
                            width: 8,
                            opacity: 0.3,
                            offsetY: 5
                        },
                        marker:{
                            width: 2,
                            height: 2,
                        },
                        lineWidth: 5
                    }
                },
                series: this.PrepareData()
            }
        }
    },
    components: {
        COptions
    },
    methods: {
        PrepareData: function() {
            if(typeof this.list.series1 !== "undefined"){
                return [{
                    name: this.labeltext,
                    data: this.list.series,
                    showInLegend: true
                },{
                    name: this.labeltext,
                    data: this.list.series1,
                    showInLegend: true,
                    color: {
                        linearGradient: [0, 0, 0, 250],
                        stops: [
                            [0, '#1ebefd'],
                            [1, '#7ff0fa']
                        ]
                    },
                }]
            }else{
                return[{
                    name: this.labeltext,
                    data: this.list.series,
                    showInLegend: true
                }]
            }
        },
        FullColumn: function(status) {
            this.Full = status;
            let chart = this.$refs.highcharts.chart;
            setTimeout(function(){
                chart.reflow()
            },300);
        }
    }
}
</script>

<style>
.column_box {
    margin-bottom:30px;
    transition: width .3s ease;
}

.column_box_holer{
    border-radius: 6px;
    background: #fff;
    padding: 30px;
    position: relative;
    overflow: hidden;
}

.highcharts-title tspan{
    font-family: 'IRANSANS NORMAL'!important;
    font-weight: bold;
}

.highcharts-container svg {
    font-family: "IRANSANS"!important;
    transition: width .3s ease, height .3s ease;
}

.highcharts-axis-labels text {
    font-size: 9px!important;
    fill: #999!important;
}

.highcharts-xaxis-labels text,
.highcharts-data-label text tspan,
.pie_chart .highcharts-legend-item text tspan{
    font-family: 'Number'!important;
}

.highcharts-data-label text tspan{
    font-size:10px!important;
    font-weight: 100!important;
    fill: #666!important;
}

.highcharts-tooltip{
    text-align: right;
}

.highcharts-tooltip span{
    background: rgba(255,255,255,0.85);
    border: 0px solid silver;
    border-radius: 6px;
    box-shadow: -2px 2px 2px 0px rgba(160, 160, 160, 0.39);
    padding: 10px 20px;
    position: relative;
    margin-left: -2px!important;
}

/* .highcharts-tooltip span:after{
    content: '';
    position: absolute;
    bottom: -10px;
    left: calc(50% - 5px);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
} */

.highcharts-tooltip span span{
    color: #999;
    font-size: 10px;
    font-family: 'Number'!important;
    margin-bottom: 5px;
    display: inline-block;
    box-shadow: none;
    border-radius: 0;
    border:0;
    padding: 0;
}

.highcharts-tooltip span span:after{
    display: none;
}

.highcharts-tooltip .value{
    font-family: "IRANSANS BOLD"!important;
    direction: ltr;
}
</style>
