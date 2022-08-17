Ext.define('MiAppSencha.view.FormBase',{
    extend: 'Ext.window.Window',

    modal: true,
    draggable: false,
    resizable: false,
    height: 300,
    width: 400,
    
    buttonAlign: 'center',
    xtype: 'ventana',

    buttons: [
        {
            text: 'Enviar',
            handler: 'enviarDatos'
        }
    ],

    listeners: {
        close: 'reloadStore',
        show: 'llenarDatos'
    }

});