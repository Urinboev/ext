Ext.define('TextileDashboard.view.dashboard.DashboardView',{
	xtype: 'dashboard',
	cls: 'dashboard',
	controller: {type: 'dashboardviewcontroller'},
	viewModel: {type: 'dashboardviewmodel'},
	requires: [],
	extend: 'Ext.Container',
	scrollable: true,
	layout: 'vbox',

	items: [
		// {
		// 	xtype: 'addformview',
		// },
		{
			xtype: 'employeesview',
			flex: 1,
			bind: {}
		}
	]
});