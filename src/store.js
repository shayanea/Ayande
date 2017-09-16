import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    sidenotification: false,
    profile: {
        name: 'آیت حسینی',
        image: '',
        notification: 3,
        notificationlist: [
            {
                "title": '',
                "desc": 'دشبورد گزارش‌های مالی ۱۳۹۵ با شما به اشتراک گزاشته شده از طرف محمد هادی واعضی.',
            },
            {
                "title": '',
                "desc": 'دشبورد گزارش‌های مالی ۱۳۹۵ با شما به اشتراک گزاشته شده از طرف محمد هادی واعضی.'
            },
            {
                "title": '',
                "desc": 'دشبورد گزارش‌های مالی ۱۳۹۵ با شما به اشتراک گزاشته شده از طرف محمد هادی واعضی.'
            }, {
                "title": '',
                "desc": 'دشبورد گزارش‌های مالی ۱۳۹۵ با شما به اشتراک گزاشته شده از طرف محمد هادی واعضی.'
            }
        ]
    },
    pin: [
        {
            id: 0,
            active: false,
            name: 'گزارش عملکرد سپرده آینده سـاز',
            multiusers: true
        }, {
            id: 1,
            active: false,
            name: 'گزارش سپرده سالیانه',
            multiusers: false
        }, {
            id: 2,
            active: false,
            name: 'عملکرده ماهانه شعب',
            multiusers: false
        }
    ],
    users:[
        {
            id: 0,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱'
        },{
            id: 1,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۲'
        },{
            id: 2,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۳'
        },{
            id: 3,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۴'
        },{
            id: 4,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۶'
        },{
            id: 5,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۷'
        },{
            id: 6,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۸'
        },{
            id: 7,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۹'
        },{
            id: 8,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۱۰'
        },{
            id: 9,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۱۱'
        },{
            id: 10,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۱۲'
        },{
            id: 11,
            email: 'test@gmail.com',
            fullname: 'پوریا شریفی',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username:'کاربر ۱۳'
        }
    ],
    roles: [
        {
            id: 0,
            role: 'نقش ۱'
        }, {
            id: 1,
            role: 'نقش ۲'
        }, {
            id: 2,
            role: 'نقش ۳'
        }, {
            id: 3,
            role: 'نقش ۴'
        }
    ],
    views:[
        {
            id:0,
            title:'کاربر روند کل مانده سپرده آینده ساز'
        },{
            id:1,
            title:'کاربر روند تعداد سپرده آینده ساز'
        },{
            id:2,
            title:'کاربر مبلغ سپرده در دسته بندی های مبلغی'
        }
    ],
    models:[
        {
            id: 0,
            title:'شماره حساب'
        },
        {
            id: 1,
            title: 'تاریخ افتتاح حساب'
        },
        {
            id: 2,
            title: 'کد مشتری'
        },
        {
            id: 3,
            title: 'کد محصول'
        },
        {
            id: 4,
            title: 'کد کانال'
        },
        {
            id: 5,
            title: 'مبلغ افتتاح حساب'
        },
        {
            id: 6,
            title: 'مانده حساب'
        },
        { 
            id: 7,
            title:'تاریخ اختتام حساب'
        }
    ]
}

const mutations = {
    OpenSideNotification: function (state) {
        state.sidenotification = !state.sidenotification;
    }
}

export default new Vuex.Store({
    state,
    mutations
})