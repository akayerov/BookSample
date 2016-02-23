Ext.define('BookSample.view.login.Login', { // #1
    extend: 'Ext.window.Window', // #2
    xtype: 'login-dialog', // #3
    autoShow: true, // #4
    height: 200, // #5
    width: 360,
    layout: {
        type: 'fit' // #7
    },
    iconCls: 'fa fa-key fa-lg', // #8
    title: 'Login', // #9
    closeAction: 'hide', // #10
    closable: false, // #11
    draggable: false, // #12
    resizable: false, // #13

    controller: 'login',

    items: [
        {
            xtype: 'form', //#14
            reference: 'formLogin',
            bodyPadding: 15, //#15
            defaults: { //#16
                xtype: 'textfield', //#17
                anchor: '100%', //#18
                labelWidth: 60 //#19
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    listeners: {
                        specialKey: 'onTextFieldSpecialKey'
                    }
                },
                {
                    inputType: 'password', //#20
                    name: 'password',
                    fieldLabel: 'Password',
                    listeners: {
                        specialKey: 'onTextFieldSpecialKey'
                    }
                }
        ]}
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                  xtype: 'tbfill' //#25
                },
                {
                  xtype: 'button', //#26
                  iconCls: 'fa fa-times fa-lg',
                  text: 'Cancel',
                  listeners: {
                       click: 'onButtonClickCancel'
                  }
                },
                {
                  xtype: 'button', //#27
                  formBind: true, //#28
                  iconCls: 'fa fa-sign-in fa-lg',
                  text: 'Submit',
                  listeners: {
                        click: 'onButtonClickSubmit'
                  }
                }
            ]
        }
    ]

});