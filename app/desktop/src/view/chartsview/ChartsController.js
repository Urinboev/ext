Ext.define('TextileDashboard.view.chartsview.ChartsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.chartscontroller',

    onRefresh: function() {
        var store = this.lookup('chart').getStore();

        store.generateData(store.getNumRecords());
    }
})