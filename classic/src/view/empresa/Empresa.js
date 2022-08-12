Ext.define('MiAppSencha.view.empresa.Empresa', {
    extend: 'Ext.Panel',
    layout: 'border',
    xtype: 'empresa',
    controller: 'empresa',

    tbar: [
        {
            //xtype: "button",
            text: "Agregar empresa",
            iconCls: "x-fa fa-plus",
            handler: 'mostrarFormulario'
        }
    ],

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
                { text: 'Fecha de Inicio', dataIndex: 'fechaInicio', flex: 1, align: 'center', xtype: "datecolumn", format: "d-m-Y" },
                { text: 'Hora de Inicio', dataIndex: 'horaInicio', align: 'center', flex: 1 },
                { text: 'Direccion', dataIndex: 'direccion', align: 'center', flex: 1 },
            ]
        }
    ]
});