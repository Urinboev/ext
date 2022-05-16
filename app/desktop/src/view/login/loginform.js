Ext.define("TextileDashboard.view.login.Loginform", {
    xtype: 'loginform',
    extend: "Ext.form.Panel",
    controller: 'logincontroller',

    bodyStyle: {
        background: '#fff',
        padding: '50px',
    },
    // controller: 'loginviewcontroller',
    // title: "Login",
    defaultType: 'textfield',

    items: [
        {
            html: '<h1>Login</h1>',
            style: {
                'width': '100%',
                'text-align': 'center',
            }
        },
        {
            xtype: 'textfield',
            allowBlank: false,
            required: true,
            label: 'User ID',
            name: 'name',
            placeholder: 'Nickname'
        }, {
            xtype: 'passwordfield',
            allowBlank: false,
            required: true,
            label: 'Password',
            name: 'password',
            placeholder: 'password'
        },
        {
            xtype: 'button',
            text: 'LOG IN',
            autoSize: true,
            handler: 'onLogin',
            ui: 'action',
            style: {
                'padding-top': '20px',
                'width': '100%',
                'text-align': 'center',
                'letter-spacing': '1.25px',
                'font-size': '14px',
                'margin': '20px auto'
            }
        }
    ],

    // buttons: [{
    //     text: 'Login',
    //     handler: 'onLogin'
    // }]
})