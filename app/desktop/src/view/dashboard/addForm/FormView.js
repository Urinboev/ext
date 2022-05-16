Ext.define('TextileDashboard.view.dashboard.addForm.FormView', {
    extend: 'Ext.form.Panel',
    xtype: 'addformview',
    controller: {type: 'formviewcontroller'},
    store: {type: 'employeesstore'},
    collapsible: 'top',
    collapsed: true,
    titleCollapse: true,
    
    title: 'Add Employee',

    requires: [
        'Ext.layout.HBox',
        'Ext.panel.Collapser'
    ],

    bodyPadding: 20,
    margin: '0 0 20 0',
    autoSize: true,

    layout: 'vbox',

    items: [
        // {
        // xtype: 'container',
        // flex: 1,
        // margin: '0 5 0 0',
        // autoSize: true,
        // items: [
            {
                xtype: 'textfield',
                label: 'First Name',
                name: 'name',
                required: true
            }, {
                xtype: 'textfield',
                label: 'Phone',
                name: 'phone',
                required: true
            },
    //     ]
    // },
    // {
    //     xtype: 'container',
    //     flex: 1,
    //     margin: '0 0 0 5',
    //     autoSize: true,
    //     items: [
            {
                xtype: 'textfield',
                label: 'Last Name',
                name: 'last_name',
                required: true
            }, {
                xtype: 'selectfield',
                options:[
                    {
                        text: 'Tikuvchi',
                        value: 'tikuvchi'
                    },
                    {
                        text: 'Dazmolchi',
                        value: 'dazmolchi'
                    },
                    {
                        text: 'Dizayner',
                        value: 'dizayner'
                    },
                    {
                        text: 'Bichuvchi',
                        value: 'bichuvchi'
                    }
                ],
                name: 'field',
                label: 'Field',
                required: true
            }
    //     ]
    // }
    ],

    buttons: [
        {
            text: 'Save',
            handler: 'addEmployee'
        },
        {
            text: 'Clear',
            handler: 'clearForm'
        }
    ]

})