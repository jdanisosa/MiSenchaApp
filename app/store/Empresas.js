Ext.define('MiAppSencha.store.Empresas',{
    extend: 'Ext.data.Store',
    storeId: 'empresas-listado',
    alias: 'store.empresas',
    model: 'MiAppSencha.model.Empresa',
    requires: ['Ext.data.proxy.JsonP'],
    proxy: {
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'empresas',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});