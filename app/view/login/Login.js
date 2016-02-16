Ext.define('Packt.view.login.Login', { // #1
    extend: 'Ext.window.Window', // #2
    xtype: 'login-dialog', // #3
    autoShow: true, // #4
    height: 170, // #5
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

    items: [
        {
            xtype: 'form', //#14
            bodyPadding: 15, //#15
            defaults: { //#16
                xtype: 'textfield', //#17
                anchor: '100%', //#18
                labelWidth: 60 //#19
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User'
                },
                {
                    inputType: 'password', //#20
                    name: 'password',
                    fieldLabel: 'Password'
                }
        ]}
    ]
});