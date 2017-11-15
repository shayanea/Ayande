<template>
    <div class="column_box" :class="{'col-md-12 col-sm-12 col-xs-12': this.Full, 'col-md-6 col-sm-12 col-xs-12': !this.Full}">
        <div class="column_box_holer">
            <COptions @fullcolumn="FullColumn" ></COptions>
            <highcharts :options="options" ref="highcharts"></highcharts> 
        </div>
    </div>
</template>

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
        type: {
            required: true,
            default: false
        },
        xAxis: {
            required: true,
            default: []
        },
        stacking: {
            required: true,
            default: null
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
                    type: 'column',
                    height: (9 / 16 * 100) + '%',
                    reflow: true,
                    className: 'line_chart'
                },
                title: {
                    text: this.title,
                    align: 'right',
                    y: 5
                },
                xAxis: {
                    categories: this.xAxis,
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
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    shared: true,
                    pointFormat: '<div class="value">{series.name}: {point.y}'+ this.suffix +'</div>'
                },
                plotOptions: {
                    column: {
                        stacking: this.stacking
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
                        // color: {
                        //     linearGradient: [0, 0, 0, 250],
                        //     stops: [
                        //         [0, '#EC644B'],
                        //         [1, '#F5D76E']
                        //     ]
                        // },
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
