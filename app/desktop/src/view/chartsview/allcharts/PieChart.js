Ext.define('TextileDashboard.view.chartsview.allcharts.PieChartView', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'piechartview',

    store: {
        fields: ['name', 'count'],
        data: [
            {name : 'Working', count: 50},
            {name : 'Total', count: 67}
        ]
    },
    series: [{
        type: 'pie',
        xField: 'count',
        label: {
            field: 'name',
            display: 'rotate'
        },
        donut: 0,
        style: {
            miterLimit: 10,
            lineCap: 'miter',
            lineWidth: 0
        }
    }]
})