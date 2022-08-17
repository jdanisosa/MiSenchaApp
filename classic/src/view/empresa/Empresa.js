Ext.define('MiAppSencha.view.empresa.Empresa', {
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'empresa',
    controller: 'empresa',

    leyenda: 'empresa',

    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'grid',
            title: 'Empresas',
            store: { type: 'empresas' },
            columns: [
                { text: 'Id', dataIndex: 'id', align: 'center', flex: 1 },
                { text: 'Nombre', dataIndex: 'nombre', align: 'center', flex: 1 },
                { text: 'Fecha de Inicio', dataIndex: 'fechaInicio', flex: 1, align: 'center', xtype: "datecolumn", format: "m-d-Y" },
                { text: 'Hora de Inicio', dataIndex: 'horaInicio', align: 'center', flex: 1 },
                { text: 'Direccion', dataIndex: 'direccion', align: 'center', flex: 1 },
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