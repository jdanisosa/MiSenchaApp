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

    // launch: function(){
    //     var login = Ext.create('MiAppSencha.view.usuario.Usuario');

    //     login.show();
    // },

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
