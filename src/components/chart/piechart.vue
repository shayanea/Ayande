<template>
    <div class="column_box col-md-6 col-sm-6 col-xs-12">
        <div class="column_box_holer">
            <highcharts :options="options" ref="highcharts"></highcharts> 
        </div>
    </div>
</template>

<script>
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
                colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    height: (9 / 16 * 100) + '%',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: this.type
                },
                title: {
                    text: this.title,
                    align: 'right'
                },
                tooltip: {
                    backgroundColor: "#fff",
                    padding:15,
                    pointFormat: '{series.name} : <b> {point.percentage:.1f}</b>'
                },
                
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            connectorColor: 'silver'
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
    }
}
</script>

<style>

</style>
