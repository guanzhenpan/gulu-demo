module.exports = {
    base:'/gulu-demo/',
    title: 'UI',

    description: '好用的UI框架',
    themeConfig: {
        nav:[
            { text:'主页',link:'/'},
            { text:'文档',link:'/guide'},
            { text:'交流',link:'http://google.com'},
            ],
        sidebar: [
            {
                title:'入门',
                children:[
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title:'按钮',
                children:[
                    '/components/button',
                ]
            },
            {
                title:'输入框',
                children:[
                    '/components/input',

                ]
            },
            {
                title:'栅格',
                children:[
                    '/components/grid',

                ]
            },
            {
                title:'布局',
                children:[
                    '/components/layout',

                ]
            },
            {
                title:'弹出框',
                children:[
                    '/components/popover',

                ]
            },
            {
                title:'标签',
                children:[
                    '/components/tabs',

                ]
            },
            {
                title:'消息提示',
                children:[
                    '/components/toast',

                ]
            },
            {
                title:'折叠面板',
                children:[
                    '/components/collapse',

                ]
            },

        ]
    }
}