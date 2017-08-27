<template>
    <div class="config_list custome_modal" v-if="show">
        <div class="popup_header">
            <h2>تنظیمات نمایش</h2>
        </div>
        <form @submit.prevent="Next">
            <div class="form-group" style="position:relative">
                <label>رنگ پس زمینه</label>
                <div class="colorpicker_bg" :style="{'background-color': bg.hex}" @click="ShowBgPicker"></div>
                <click-outside :handler="HideBgPicker">
                    <Chrome v-model="bg" v-if="showbgpicker"></Chrome>
                </click-outside>
            </div>
            <div class="form-group" style="position:relative">
                <label>رنگ پس زمینه</label>
                <div class="colorpicker_bg" :style="{'background-color': border.hex}" @click="ShowBorderBgPicker"></div>
                <click-outside :handler="HideBorderBgPicker">
                    <Chrome v-model="border" v-if="showborderbgpicker"></Chrome>
                </click-outside>
            </div>
            <div class="form-group">
                <label>اندازه بردر</label>
                <select class="form-control" v-model="selectedborder">
                    <option v-for="(item, index) of borders" :key="index" :value="item.value">{{item.value}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>y Axis</label>
                <select class="form-control" v-model="selectedx">
                    <option v-for="(item, index) of getfields" :key="index" :value="item">{{item}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>x Axis</label>
                <select class="form-control" v-model="selectedy">
                    <option v-for="(item, index) of getfields" :key="index" :value="item">{{item}}</option>
                </select>
            </div>
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-default save">مرحله بعد</button>
            <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
        </form>
    </div>
</template>

<script>
import ClickOutside from 'onclick-outside'
import { Chrome } from 'vue-color'

export default {
    name: 'config',
    props: {
        show: {
            required: true,
            default: false
        },
        active: {
            required: true,
            default: null
        },
        model: {
            required: true,
            default: []
        }
    },
    data() {
        return {
            showbgpicker: false,
            showborderbgpicker: false,
            bg: {
                hex: '#194d33',
                hsl: {
                    h: 150,
                    s: 0.5,
                    l: 0.2,
                    a: 1
                },
                hsv: {
                    h: 150,
                    s: 0.66,
                    v: 0.30,
                    a: 1
                },
                rgba: {
                    r: 25,
                    g: 77,
                    b: 51,
                    a: 1
                },
                a: 1
            },
            border: {
                hex: '#194d33',
                hsl: {
                    h: 150,
                    s: 0.5,
                    l: 0.2,
                    a: 1
                },
                hsv: {
                    h: 150,
                    s: 0.66,
                    v: 0.30,
                    a: 1
                },
                rgba: {
                    r: 25,
                    g: 77,
                    b: 51,
                    a: 1
                },
                a: 1
            },
            selectedborder: null,
            selectedx: null,
            selectedy: null,
            borders: [{
                id: 0,
                value: 1
            },
            {
                id: 1,
                value: 2
            }, {
                id: 2,
                value: 3
            }, {
                id: 3,
                value: 4
            }, {
                id: 4,
                value: 5
            }, {
                id: 5,
                value: 6
            }, {
                id: 6,
                value: 7
            }, {
                id: 7,
                value: 8
            }, {
                id: 8,
                value: 9
            }, {
                id: 9,
                value: 10
            }],
            fields: [
                {
                    id: 0,
                    items: ['شماره حساب', 'تاریخ افتتاح حساب', 'کد مشتری', 'کد محصول', 'کد کانال', 'مبلغ افتتاح حساب', 'مانده حساب',
                        'تاریخ اختتام حساب']
                },
                {
                    id: 1,
                    items: ['کد مشتری', 'کد ملی', 'تاریخ ایجاد', 'کد کانال ایجاد کننده', 'نوع مشتری', 'شماره تلفن همراه', 'پست الکترونیکی',
                        'تحصیلات', 'شغل', 'حق برداشت', 'درصد برداشت ']
                },
                {
                    id: 2,
                    items: ['کد ملی', 'تابعیت', 'نام', 'نام خانوادگی', 'جنسیت', 'نام پدر', 'تاریخ تولد', 'سریال شناسنامه', 'سری شناسنامه'
                        , 'استان محل تولد', 'شهرستان محل تولد', 'شماره حوزه ثبت', 'تاریخ فوت']
                },
                {
                    id: 3,
                    items: ['کد مشتری', 'نوع آدرس', 'استان', 'شهرستان', 'خیابان اصلی', 'شرح آدرس', 'پلاک', 'طبقه', 'واحد', 'شماره تماس ثابت']
                },
                {
                    id: 4,
                    items: ['کد محصول', 'کد نوع محصول', 'تاریخ ایجاد', 'تاریخ شروع اعتبار', 'تاریخ پایان اعتبار', 'مبلغ کل اعتبار محصول',
                        'تعداد کل سهام محصول', 'حداقل سهم', 'حداقل مبلغ']
                },
                {
                    id: 5,
                    items: ['کد نوع محصول', 'عنوان نوع محصول', 'پرداخت سود', 'درصد سود', 'نوع سوددهی', 'سهام', 'مبلغ سهم به ریال',
                        'مبلغ سهم به دلار', 'اعتبار دارد؟', 'تاریخ ایجاد']
                },
                {
                    id: 6,
                    items: ['کد کانال', 'عنوان کانال', 'کد نوع کانال', 'کد موقعیت جغرافیایی', 'کد کانال سطح بالاتر', 'رتبه کانال']
                },
                {
                    id: 7,
                    items: ['کد نوع کانال', 'عنوان نوع کانال', 'وضعیت کانال']
                }],
            x: [],
            y: []
        }
    },
    components: {
        Chrome,
        ClickOutside
    },
    computed: {
        getfields: function() {
            let array = this.fields.filter(item => {
                return item.id == this.active
            });
            return array[0].items;
        }
    },
    methods: {
        Prev: function() {
            this.$emit('hideconfig', true);
        },
        Next: function() {
            this.$emit('showsubmit', { background: this.bg.hex, bordercolor: this.border.hex, bordersize: this.selectedborder, x: this.selectedx, y: this.selectedy });
        },
        ShowBgPicker: function() {
            this.showbgpicker = !this.showbgpicker;
        },
        ShowBorderBgPicker: function() {
            this.showborderbgpicker = !this.showborderbgpicker;
        },
        HideBgPicker: function() {
            if (this.showbgpicker) {
                this.showbgpicker = false;
            }
        },
        HideBorderBgPicker: function() {
            if (this.showborderbgpicker) {
                this.showborderbgpicker = false;
            }
        }
    }
}
</script>

<style>
.vc-chrome {
    direction: ltr;
    position: absolute;
    left: 0;
    top: 70px;
    z-index: 99;
}
</style>