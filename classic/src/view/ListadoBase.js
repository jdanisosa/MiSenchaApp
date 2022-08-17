Ext.define('MiAppSencha.view.ListadoBase',{
    extend: 'Ext.Panel',
    layout: 'border',
    xtype: 'listado',

    constructor: function(config){
        Ext.apply(this,config);

        Ext.apply(this, {
            tbar: [
                {
                    text: 'Agregar '+this.leyenda,
                    iconCls: "x-fa fa-plus",
                    handler: 'mostrarFormulario'
                }
            ],
        });

        this.callParent();
    }
});