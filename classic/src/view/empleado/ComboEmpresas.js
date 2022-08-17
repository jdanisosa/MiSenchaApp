Ext.define('MiAppSencha.view.empleado.ComboEmpresas',{
    extend: 'Ext.form.ComboBox',

    xtype: 'comboempresas',
    fieldLabel: 'Empresa',
    store: {type: 'empresas'},
    displayField: 'nombre',
    valueField: 'id'
});