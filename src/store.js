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
    users: [
        {
            id: 0,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱'
        }, {
            id: 1,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۲'
        }, {
            id: 2,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۳'
        }, {
            id: 3,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۴'
        }, {
            id: 4,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۶'
        }, {
            id: 5,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۷'
        }, {
            id: 6,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۸'
        }, {
            id: 7,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۹'
        }, {
            id: 8,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱۰'
        }, {
            id: 9,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱۱'
        }, {
            id: 10,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱۲'
        }, {
            id: 11,
            email: 'test@gmail.com',
            firstname: 'پوریا',
            lastname: 'شریفی',
            active: true,
            createdate: '۱۲ مهر ۱۳۹۵',
            lastlogin: '۲۲ شهریور ۱۳۹۵',
            username: 'کاربر ۱۳'
        }
    ],
    roles: [
        {
            id: 0,
            name: 'UserManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true        
        }, {
            id: 1,
            name: 'ReportManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 2,
            name: 'ModelsManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 3,
            name: 'Administrator',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 4,
            name: 'UserManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 5,
            name: 'ReportManage',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 6,
            name: 'ModelsManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 7,
            name: 'Administrator',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 8,
            name: 'UserManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 9,
            name: 'ReportManage',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 10,
            name: 'ModelsManager',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }, {
            id: 11,
            name: 'Administrator',
            description: 'مدیر کاربران سیستم',
            createdate: '۱۷ دی ۱۳۹۵',
            active: true
        }
    ],
    access: [
        {
            id: 0,
            title: "مدیریت دسته ها پ گروه های گزارش ها و نماها",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        },
        {
            id: 1,
            title: "مدیریت دشبورد ها",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        },
        {
            id: 2,
            title: "مدیریت مدل های داده",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        },
        {
            id: 3,
            title: "مدیریت نماها",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        },
        {
            id: 4,
            title: "مدیریت کاربران",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        },
        {
            id: 5,
            title: "مدیریت نقش ها",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        }, {
            id: 6,
            title: "مدیریت اطلاعات پایه",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        }
        , {
            id: 7,
            title: "مدیریت تنظیمات سیستم",
            property: {
                view: false,
                add: false,
                edit: false,
                remove: false
            }
        }
    ],
    views: [
        {
            id: 0,
            title: 'کاربر روند کل مانده سپرده آینده ساز'
        }, {
            id: 1,
            title: 'کاربر روند تعداد سپرده آینده ساز'
        }, {
            id: 2,
            title: 'کاربر مبلغ سپرده در دسته بندی های مبلغی'
        }
    ],
    models: [
        {
            id: 0,
            title: 'شماره حساب'
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
            title: 'تاریخ اختتام حساب'
        }
    ],
    nodetype:[
        {
            id: 0,
            title: 'گره اصلی'
        },
        {
            id: 1,
            title: 'گره ارتباطی'
        }
    ],
    nodeparent: [
        {
            id: 0,
            title: 'گره شماره ۱'
        },
        {
            id: 1,
            title: 'گره شماره ۲'
        },
        {
            id: 2,
            title: 'گره شماره ۳'
        },
        {
            id: 3,
            title: 'گره شماره ۴'
        }
    ],
    similarnode: [
        {
            id: 0,
            title: 'دسته بندی شماره ۱'
        },
        {
            id: 1,
            title: 'دسته بندی شماره ۲'
        },
        {
            id: 2,
            title: 'دسته بندی شماره ۳'
        },
        {
            id: 3,
            title: 'دسته بندی شماره ۴'
        },
        {
            id: 4,
            title: 'دسته بندی شماره ۵'
        }
    ],
    report: [
        {
            id: 0,
            title: 'گزارش عملکرد حساب آینده سـاز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 1,
            title: 'گزارش عملکرد حساب صندوق',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 2,
            title: 'ورودی کل حساب آینده ساز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 3,
            title: 'روند رشد حساب آینده ساز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 4,
            title: 'گزارش عملکرد حساب آینده سـاز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 5,
            title: 'گزارش عملکرد حساب صندوق',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 6,
            title: 'ورودی کل حساب آینده ساز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 7,
            title: 'روند رشد حساب آینده ساز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 8,
            title: 'گزارش عملکرد حساب آینده سـاز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 9,
            title: 'گزارش عملکرد حساب صندوق',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        },
        {
            id: 10,
            title: 'ورودی کل حساب آینده ساز',
            createdate: '۱۲ مهر ۱۳۹۵',
            lastupdate: '۲۲ شهریور ۱۳۹۵',
        }
    ],
    editroleobj: null,

    showbgwrapper: false,
    showcreateview: false,
    showcreatemodal: false,
    custome_model: null,
}

const mutations = {
    OpenSideNotification: function (state) {
        state.sidenotification = !state.sidenotification;
    },
    ShareRoleObjForEdit: function (state, item) {
        state.editroleobj = item;
    },

    ShowCreateModel: function(state) {
        state.showcreatemodal = !state.showcreatemodal;
    },
    ShowCreateView: function(state) {
        state.showcreateview = !state.showcreateview;
    },
    ShowBgWrapper: function(state) {
        state.showbgwrapper = !state.showbgwrapper;
    }
}

export default new Vuex.Store({
    state,
    mutations
})