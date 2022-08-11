Ext.define('MiAppSencha.view.usuario.Usuario', {
    extend: 'Ext.window.Window',

    controller: 'usuarioctr',

    // de apariencia
    title: 'Login',
    height: 200,
    width: 350,

    //de comportamiento
    closable: false,
    draggable: false,
    resizable: false,
    modal: true,

    // del boton
    buttonAlign: 'center',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,

            reference: 'formulario',

            defaults: {
                xtype: 'textfield',
                allowBlank: false,
            },
            
            items: [
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype: 'email'
                },
                {
                    fieldLabel: 'Password',
                    name: 'password',
                    inputType: 'password'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Ingresar',
            iconCls: 'x-fa fa-user-ninja',
            handler: 'hacerLogin'
        }
    ]
})

// classic/src/view/usuario/Usuario.js