Ext.define('TextileDashboard.view.chartsview.allcharts.AreaCharts', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'areachart',

    // requires: [
    //     'Ext.chart.series.Area'
    // ],
    store: {
        fields: ['name', 'count'],
        data: [
            {name : 'Working', count: 50},
            {name : 'Total', count: 67}
        ]
    },

    axes: [
        {
            type: 'numeric3d',
            position: 'left',
            title: {
                text: 'count',
                fontSize: 15
            },
            fields: 'count'
        },
        {
            type: 'category3d',
            position: 'bottom',
            title: {
                text: 'name',
                fontSize: 15
            },
            fields: 'name'
        },

    ],

    series: [{
        type: 'bar3d',
        subStyle: {
            fill: ['#0A3F50', '#30BDA7',]
        },
        xField: 'name',
        yField: 'count',
        label: {
            field: 'count',
            display: 'inside',
            orientation: 'horizontal'
        },
        highlight: true,
        // tooltip{
        //     renderer: 'on'
        // }
    }]

})