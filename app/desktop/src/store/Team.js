Ext.define('TextileDashboard.store.Team', {
    extend: 'Ext.data.Store',
    alias: 'store.teamsstore',

    requires: ['TextileDashboard.model.Teams'],

    model: 'TextileDashboard.model.Teams',
    
    proxy: {        
        type: 'ajax',
        url: 'resources/desktop/teams.json'
    },
    autoSync: true,
    autoLoad: true
})