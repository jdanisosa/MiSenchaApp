Ext.define('MiAppSencha.view.empresa.EmpresaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa',

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.empresa.VentanaEmpresa');
        window.show();
    },

    enviarDatos: function(){
        var vista = this.getView();
        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();
            Ext.Ajax.request({
                url: Ext.manifest.url_backend + 'empresas',
                jsonData: Ext.util.JSON.encode(datos),
                scope: vista,
                success: function(response, opts){
                    Ext.Msg.alert('Ok', 'Empresa creada correctamente', function (){
                        this.close();
                    }, this)
                },
                failure: function(response, opts){
                    console.log('El servidor fallo con el codigo '+ response.status);
                }
            })
        }
    },

    reloadStore: function(){
        Ext.getStore('empresas-listado').reload();
    }
})