Ext.define('TextileDashboard.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employeesstore',
    storeId: 'employeesstore',

    requires: ['TextileDashboard.model.Employees'],

    model: 'TextileDashboard.model.Employees',
    
    // groupField: 'field',
    autoSync: true,
    autoLoad: true
})