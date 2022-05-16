Ext.define('TextileDashboard.Application', {
	extend: 'Ext.app.Application',
	name: 'TextileDashboard',
	requires: ['TextileDashboard.*'],
	defaultToken: 'dashboard',
	// stores: ['employeesstore'],

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'

		if(!sessionStorage.getItem('log')) {
			whichView = 'loginview'
		}
		
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
