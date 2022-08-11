Ext.define('MiAppSencha.store.Empresas',{
    extend: 'Ext.data.Store',

    alias: 'store.empresas',
    model: 'MiAppSencha.model.Empresa',
    proxy: {
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'empresas',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});