Ext.define('MiAppSencha.store.Empleados',{
    extend: 'Ext.data.Store',
    alias: 'store.empleados',
    storeId: 'empleados-listado',

    proxy:{
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'empleados',

        reader:{
            type: 'json'
        }
    },

    autoLoad: true
});