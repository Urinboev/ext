Ext.define('TextileDashboard.model.Employees', {
    // extend: 'TextileDashboard.model.Base',
    extend: 'Ext.data.Model',
    alias: 'model.employeesmodel',

    fields: [
        'id','name', 'last_name', 'phone', 'field', 'status', 'created_at'
    ],

    proxy: {        
        type: 'rest',
        url: 'http://laravelapiapp.atwebpages.com/api/employees'
    },
    
})

// Ext.define('TextileDashboard.view.employees.EmployeesStore', {
//     extend: 'Ext.data.Store',
//     alias: 'store.employeesstore',
//     fields: [
//         'id','name', 'last_name', 'phone', 'field', 'status', 'created_at'
//     ],
//     groupField: 'field',
//     proxy: {
//         type: 'rest',
//         url: 'http://localhost:8000/api/employees'

//     },
//     autoSync: true,
//     autoLoad: true
// })