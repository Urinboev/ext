
 Ext.define('TextileDashboard.view.chartsview.ChartsView', {
    extend: 'Ext.Container',
    xtype: 'chartsview',
    cls: 'chartsview',
    controller: {type: 'chartscontroller'},
    viewModel: {type: 'chartsviewmodel'},

    layout: 'vbox',
	scrollable: true,

    items:[
        {
            xtype: 'panel',
            title: 'Pie Chart'
        },
        {
            xtype: 'piechartview',
            flex: 1,
        },
        {
            xtype: 'panel',
            title: 'Area Chart'
        },
        {
            xtype: 'areachart',
        },
        // {
        //     xtype: 'barchartview',
        //     flex: 1,
        // }
    ]

});
