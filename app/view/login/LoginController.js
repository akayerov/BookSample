/**
 * Created by a_kayerov on 17.02.2016.
 */
Ext.define('BookSample.view.login.LoginController', { // #1
    extend: 'Ext.app.ViewController', // #2
    alias: 'controller.login', // #3
    onTextFieldSpecialKey: function(field, e, options){
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    onTextFieldKeyPress: function(field, e, options){ }, // #5
    onButtonClickCancel: function(button, e, options){
        console.log('login cancel'); // #1
//        this.lookupReference('formLogin').reset();
        form = this.lookupReference('formLogin');
        form.reset();
    }, // #6
    onButtonClickSubmit: function(button, e, options){
        console.log('login submit'); // #1
        var me = this;
        if (me.lookupReference('formLogin').isValid()){ // #1
            me.doLogin(); // #2
        }
    }, // #7
    doLogin: function() {
        var me = this,
        form = me.lookupReference('formLogin');
        this.getView().mask('Authenticating... Please wait...');
        form.submit({
            clientValidation: true, // #3
              url: 'php/security/login.php', // #4
            scope: me, // #5
            success: 'onLoginSuccess', // #6
            failure: 'onLoginFailure'  // #7
        });
    },
    onLoginFailure: function(form, action) {
        console.log('login LoginFailure');
        this.getView().unmask();
        var result = Ext.JSON.decode(action.response.responseText, true); //#3
        if (!result){ //#4
            result = {};
            result.success = false;
            result.msg = action.response.responseText;
        }
        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID: //#5
                Ext.Msg.show({
                    title:'Error!',
                    msg: 'Form fields may not be submitted with invalid values',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                break;
            case Ext.form.action.Action.CONNECT_FAILURE: //#6
                Ext.Msg.show({
                    title:'Error!',
                    msg: 'Form fields may not be submitted with invalid values',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                break;
            case Ext.form.action.Action.SERVER_INVALID: //#7
                Ext.Msg.show({
                    title:'Error!',
                    msg: result.msg, //#8
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
        }
    }, // #9
    onLoginSuccess: function(form, action) {
        console.log('login LoginSuccess');
        this.getView().unmask();
        this.getView().close(); //#1
        Ext.create('BookSample.view.main.Main'); //#2
    } // #10
});

