Ext.define('MiAppSencha.view.empleado.Empleado',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'empleado',
    leyenda: 'empleado',
    controller: 'empleado',

    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'grid',
            store: {type: 'empleados'},
            title: 'Empleados',
            columns:[
                {text: 'Id', dataIndex: 'id', align: 'center'},
                {text: 'Nombre', dataIndex: 'nombre', align: 'center', flex: 1},
                {text: 'Apellido', dataIndex: 'apellido', align: 'center',  flex: 1},
                {text: 'Email', dataIndex: 'email', align: 'center',  flex: 2},
                {text: 'Direccion', dataIndex: 'direccion', align: 'center',  flex: 1},
                {
                    text: "Acciones",
                    align: "center",
                    xtype: "actioncolumn",

                    items: [{
                        iconCls: 'x-fa fa-edit',
                        tooltip: 'Editar',
                        handler: function(grid, rowIndex){
                            this.fireEvent("editar", grid, rowIndex)
                        }
                    },'->',
                    {
                        iconCls: 'x-fa fa-trash',
                        tooltip: 'Eliminar',
                        handler: function(grid, rowIndex){
                            this.fireEvent("eliminar", grid, rowIndex)
                        }
                    }]
                }
            ]
        }
    ]
});