/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('BookSample.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BookSample',

    stores: [
        // TODO: add global / shared stores here
    ],
    init: function () {
        var me = this; // #1
        me.splashscreen = Ext.getBody().mask( // #2
            'Loading (Загрузка) application...', 'splashscreen'
        );
    },
    launch: function () {
        // TODO - Launch the application
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
