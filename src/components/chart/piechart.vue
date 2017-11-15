<template>
    <div class="column_box" :class="{'col-md-12 col-sm-12 col-xs-12': this.Full, 'col-md-6 col-sm-12 col-xs-12': !this.Full}">
        <div class="column_box_holer">
            <highcharts :options="options" ref="highcharts"></highcharts> 
        </div>
    </div>
</template>

<script>
import COptions from './options'

export default {
    name: 'piechart',
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
                colors: ['#FFF176', '#FFD54F', '#FFB74D', '#FF8A65', '#FFEB3B', '#FFC107', '#FF9800',
                '#FF5722', '#FBC02D', '#FFA000', '#F57C00'],
                chart: {
                    height: (9 / 16 * 100) + '%',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: this.type,
                    className: 'pie_chart'
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
                    pointFormat: '<div class="value">{point.y}</div>'
                },
                legend: {
                    align: 'right',
                    padding: 3,
                    itemMarginTop: 5,
                    itemMarginBottom: 5,
                    itemStyle: {
                        lineHeight: '14px'
                    }
                },
                plotOptions: {
                    pie: {
                        borderWidth: 0,
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>',
                            connectorColor: 'silver',
                            style: {
                                color: '#000'
                            }
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: this.labeltext,
                    data: this.list.series
                }]
            }
        }
    },
    components: {
        COptions
    },
    mounted() {
        this.HighChart = this.$refs.highcharts;
    },
    methods: {
        FullColumn: function(status) {
            this.Full = status;
        }
    }
}
</script>

<style>

</style>
