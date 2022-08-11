Ext.define('MiAppSencha.model.Empresa',{
    extend:'Ext.data.Model',

    fields: [
        {name:"id", type: 'int'},
        "nombre",
        {name: "fechaInicio", type: 'date', format: 'd-m-Y'},
        "horaInicio",
        "direccion"
    ]
});