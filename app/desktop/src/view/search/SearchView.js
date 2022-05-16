Ext.define('TextileDashboard.view.search.SearchView', {
    extend: 'Ext.form.Panel',
    xtype: 'searchform',
    controller: {type: 'searchviewcontroller'},

    layout: { type: 'hbox', align: 'middle'},

    items: [
        {
            xtype: 'searchfield',
            iconCls: 'x-fa fa-search',
            name: 'search',
            ui: 'solo',
            shadow: 'true',
            placeholder: 'Search',
            flex: 1,
            margin: '15 0',
            clearable: false,
            listeners: {
                keydown: 'search'
            }
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa-eraser',
            shadow: 'true',
            ui: 'action round',
            height: 32,
            margin: '0 0 0 10',
            handler: 'clear'
        }
    ]
})