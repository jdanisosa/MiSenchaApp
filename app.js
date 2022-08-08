/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MiAppSencha.Application',

    name: 'MiAppSencha',

    requires: [
        // This will automatically load all classes in the MiAppSencha namespace
        // so that application classes do not need to require each other.
        'MiAppSencha.*'
    ],

    // The name of the initial view to create.
    mainView: 'MiAppSencha.view.main.Main'
});
