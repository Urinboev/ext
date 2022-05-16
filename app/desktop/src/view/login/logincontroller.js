Ext.define('TextileDashboard.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.logincontroller',

	onLogin: function() {
        var form = this.getView();
		
        if (form.validate()) {
			form.submit({
                url: 'http://laravelapiapp.atwebpages.com/api/users',
				success: function(form, action) {
					sessionStorage.setItem('log', action.token)
					location.reload();
				},
                failure: (form, result) => {
                    let status = result.status
                    if(status == 404) {
                        Ext.Msg.alert('Login Failure', 'The username not found');
                    } else{
                        Ext.Msg.alert('Login Failure', 'The password provided is invalid.');
                    }
                }
            });
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
        }
    }
});
