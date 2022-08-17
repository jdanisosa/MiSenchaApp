Ext.define('MiAppSencha.view.empleado.EmpleadoController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.empleado',

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.empleado.VentanaEmpleado');
        window.show();
    },

    enviarDatos: function(){
        var vista = this.getView();
        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();
            Ext.Ajax.request({
                url: Ext.manifest.url_backend + 'empleados',
                jsonData: Ext.util.JSON.encode(datos),
                scope: vista,
                success: function(response, opts){
                    Ext.Msg.alert('Ok','Empleado creado correctamente,', function(){
                        this.close();
                    },this);
                },
                failure: function(response, opts){
                    console.log('El servidor fallo con el codigo ' + response.status);
                }
            })
        }
    },

    reloadStore: function(){
        Ext.getStore('empleados-listado').reload();
    }
});