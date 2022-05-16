Ext.define('TextileDashboard.view.dashboard.addForm.FormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formviewcontroller',


    launch: () => {
        console.log(Ext)
    },

    addEmployee: (e) => {
        // console.log(e.up().up().validate())
        let form = e.up().up()
        let values = form.getValues()
        if (form.validate()) {
            
            let employee = Ext.create('TextileDashboard.model.Employees', {
                name: values.name,
                last_name: values.last_name,
                phone: values.phone,
                field: values.field,
            })
            employee.save({
                failure: function(record, operation) {
                    console.log('fail')
                },
                success: function(record, operation) {
                    console.log('saved')
                    form.reset({clearInvalid: true})
                    Ext.StoreManager.lookup('employeesstore').reload()
                    Ext.Msg.alert('Registration Completed', 'You\'ve just registered new employee');
                }
            })
            
        }
        else {
            Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
        }
    },

    clearForm: (e) => {
        let form = e.up().up()
        form.reset({clearInvalid: true})
    }
})