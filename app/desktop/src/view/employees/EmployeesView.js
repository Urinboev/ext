Ext.define('TextileDashboard.view.employees.EmployeesView', {
    extend: 'Ext.grid.Grid',
    xtype: 'employeesview',
    cls: 'employees',
    title: 'Employees',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'employeescontroller'},
    store: {type: 'employeesstore'},
    // groupFooter: {
    //     xtype: 'gridsummaryrow'
    // },
    grouped: true,
    plugins: {
        // rowedit: {
        //     autoConfirm: false
        // }

        grideditable: {
            triggerEvent: 'childdoubletap',
            enableDeleteButton: true,
            formConfig: {
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'last_name',
                        label: 'Last Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'phone',
                        label: 'Phone'
                    },
                    {
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
                        label: 'Field'
                    },
                    // {
                    //     xtype: 'selectfield',
                    //     options: [{
                    //         text: 'working',
                    //         value: 'working'
                    //     }, {
                    //         text: 'Not Working',
                    //         value: 'notWorking'
                    //     }],
                    //     name: 'status',
                    //     label: 'Status'
                    // }
                ]
            }, // See more below

            defaultFormConfig: {
                xtype: 'formpanel',
                scrollable: true,
                items: [{
                    xtype: 'fieldset'
                }]
            },

            toolbarConfig: {
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    // ui: 'decline',
                    text: 'Cancel',
                    align: 'left',
                    action: 'cancel'
                }, {
                    xtype: 'button',
                    // ui: 'confirm',
                    text: 'Submit',
                    align: 'right',
                    action: 'submit',
                    failure: "up.onChange"
                }]
            },
        }
    },
    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            editable: false,
            width: 40,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Last Name',
            dataIndex: 'last_name',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            // width: 100,
            flex: 1,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Field',
            dataIndex: 'field',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Status',
            dataIndex: 'status',
            editable: false,
            width: 150,
            renderer: function (value, record) {
                if (value) {
                    return 'Working';
                }
                return 'Not working';
            },
        },
        {
            text: 'Registered',
            dataIndex: 'created_at',
            editable: false,
            width: 150,
            renderer: function (value, record) {
                let date = new Date(value)
                return date.toLocaleDateString()
            },
        }
    ],
})