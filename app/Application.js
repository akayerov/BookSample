/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('BookSample.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BookSample',
    views: [
//        'login.Login'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],
    init: function () {
        console.log('launch1')
        var me = this; // #1
        me.splashscreen = Ext.getBody().mask( // #2
            'LoadingN', 'splashscreen'
        );
        me.splashscreen.addCls('splashscreen')
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },
    launch: function () {
        // TODO - Launch the application
//        var task = new Ext.util.DelayedTask(function() { // #1
//            Ext.getBody().unmask(); // #2
//        });
//        task.delay(2000); // #3
        var me = this; // #1

        me.splashscreen.fadeOut({
            duration: 2000,
            remove:true
        });
//Fade out the icon and message

        me.splashscreen.next().fadeOut({
            duration: 1000,
            remove:true,
            listeners: { // #1
                afteranimate: function(el, startTime, eOpts ){//#2
                    console.log('launch'); // #3
                    Ext.widget('login-dialog');
                }
            }
        });

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
