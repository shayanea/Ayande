<template>
    <div class="column_box col-md-6 col-sm-6 col-xs-12">
        <div class="column_box_holer">
            <highcharts :options="options" ref="highcharts"></highcharts> 
        </div>
    </div>
</template>

<script>
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
            options: {
                credits: {
                    enabled: false
                },
                chart: {
                    height: (9 / 16 * 100) + '%',
                    type: this.type
                },
                title: {
                    text: this.title,
                    align: 'right'
                },
                tooltip: {
                    backgroundColor: "#fff",
                    padding:15,
                    followPointer: true,
                    valueSuffix: this.suffix
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
                                    alert('Category: ' + this.category + ', value: ' + this.y);
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
                legend: {
                    rtl: false
                },
                series: this.PrepareData()
            }
        }
    },
    methods: {
        PrepareData: function() {
            // for(let i = 0; i < )
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
    }
}
</script>

<style>
.column_box {
    margin-bottom:30px;
}

.column_box_holer{
    border-radius: 6px;
    background: #fff;
    padding: 30px;
}

.highcharts-title tspan{
    font-family: 'IRANSANS NORMAL'!important;
    font-weight: bold;
}

.highcharts-container svg {
    font-family: "IRANSANS"!important;
}

.highcharts-axis-labels text {
    font-size: 9px!important;
    fill: #999!important;
}

.highcharts-xaxis-labels text,
.highcharts-data-label text tspan{
    font-family: 'Number'!important;
}

.highcharts-data-label text tspan{
    font-size:10px!important;
    font-weight: 100!important;
    fill: #666!important;
}
</style>
