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
                series: this.list
            }
        }
    },
    components: {
        COptions
    },
    methods: {
        PrepareData: function() {
            // if(typeof this.list.series1 !== "undefined"){
            //     return [{
            //         name: this.labeltext,
            //         data: this.list.series,
            //         showInLegend: true
            //     },{
            //         name: this.labeltext,
            //         data: this.list.series1,
            //         showInLegend: true,
            //         color: {
            //             linearGradient: [0, 0, 0, 250],
            //             stops: [
            //                 [0, '#1ebefd'],
            //                 [1, '#7ff0fa']
            //             ]
            //         },
            //     }]
            // }else{
                let array = []

                return [this.list]
            // }
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
</style>
