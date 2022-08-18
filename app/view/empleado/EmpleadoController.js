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
            if(vista.title !== "Editar empleado"){
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
            }else{
                var id = vista.down("#id").value

                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'empleados/' + id,
                    jsonData: Ext.util.JSON.encode(datos),
                    method: 'PUT',
                    
                    success: function(response, opts){
                        Ext.Msg.alert("Ok", "Empleado editado correctamente", function(){
                            vista.close()
                        })
                    },
                    failure: function(response, opts){
                        console.log('El servidor fallo con el codigo ' + response.status);
                    }
                })
            }
        }
    },

    llenarDatos: function(){
        var vista = this.getView()
        var empleado = vista.store
        console.log(empleado);
        if(empleado){
            vista.setTitle("Editar empleado")
            vista.down("form").getForm().setValues(empleado)
        }
    },

    onEditar: function(grid, rowIndex){
        var empleado = grid.getStore().getAt(rowIndex).data
        var formulario = Ext.create('MiAppSencha.view.empleado.VentanaEmpleado', {
            store: empleado
        })

        formulario.show()
    },

    onEliminar: function(grid, rowIndex){
        var empleado = grid.getStore().getAt(rowIndex).data
        Ext.Msg.confirm("Eliminar empleado", "Seguro que desea eliminar este elemento?", function(respuesta){
            if(respuesta === 'yes'){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'empleados/' + empleado.id,
                    method: 'DELETE',
                    
                    success: function(response, opts){
                        Ext.Msg.alert("Ok", "Empleado eliminado correctamente", function(){
                            Ext.getStore('empleados-listado').reload();
                        })
                    },
                    failure: function(response, opts){
                        console.log('El servidor fallo con el codigo ' + response.status);
                    }
                })
            }         
        })
    },

    reloadStore: function(){
        Ext.getStore('empleados-listado').reload();
    },

    control: {
        actioncolumn:{
            editar: "onEditar",
            eliminar: "onEliminar"
        }
    }
});