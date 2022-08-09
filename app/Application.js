/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MiAppSencha.Application', {
    extend: 'Ext.app.Application',

    name: 'MiAppSencha',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function(){
        var login = Ext.create('Ext.window.Window', {

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
                    handler: function(){
                        login.close();
                    }
                }
            ]
        });

        login.show();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
