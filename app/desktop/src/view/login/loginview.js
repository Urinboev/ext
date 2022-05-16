Ext.define('TextileDashboard.view.login.LoginView', {
    extend: 'Ext.Container',
    xtype: 'loginview',

    style:{
        display: 'grid',
        placeItems: 'center'
    },
    items: [
        {
            xtype: 'loginform',
            width: 400
        }
    ]
})