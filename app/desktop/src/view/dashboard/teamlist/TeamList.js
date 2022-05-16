Ext.define('TextileDashboard.view.dashboard.TeamList', {
    extend: 'Ext.grid.Grid',
    xtype: 'teamlist',
    title: 'Teams',

    store: {type: 'teamsstore'},


    columns: [
        {
            text: 'Teams',
            dataIndex: 'name',
            flex: 1
        }
    ],

    listeners: {
        select: (grid, record) => {
            if(record[0].data.field !== 'all'){
                if(Ext.StoreManager.lookup('employeesstore').getFilters().items[0]){
                    // remove filter
                    Ext.StoreManager.lookup('employeesstore').removeFilter(Ext.StoreManager.lookup('employeesstore').getFilters().items[0])
                    // add new filter
                    Ext.StoreManager.lookup('employeesstore').setFilters({property: 'field', value: record[0].data.field})
                    
                } else
                    Ext.StoreManager.lookup('employeesstore').setFilters({property: 'field', value: record[0].data.field})
            } else
                Ext.StoreManager.lookup('employeesstore').removeFilter(Ext.StoreManager.lookup('employeesstore').getFilters().items[0])
                
            console.log(Ext.StoreManager.lookup('employeesstore').getFilters())
            // console.log(record[0].data.field)
        }
    }

})