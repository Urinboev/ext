Ext.define('TextileDashboard.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
	cls: 'detailview',
	layout: 'vbox',
	style: {
		'background-color': 'white'
	},
	items: [
		{
			xtype: 'searchform'
		},
		{
			xtype: 'addformview',
			flex: 1
		}
	]
})