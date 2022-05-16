Ext.define('TextileDashboard.view.search.SearchViewComtroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchviewcontroller',

    search: (e) => {
        Ext.StoreManager.lookup('employeesstore').setFilters(
            (item) => {
                let name = item.getData().name.toLowerCase()
                let last_name = item.getData().last_name.toLowerCase()
                let query = e.getValue().toLowerCase()
                if(name.search(query) !== -1 || last_name.search(query) !== -1)
                    return item
            }
        )
    },

    clear: (e) => {
        let form = e.up()
        console.log(form)
        form.reset({clearInvalid: true})
        
        Ext.StoreManager.lookup('employeesstore').clearFilter()
    }
})