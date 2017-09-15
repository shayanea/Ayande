<template>
    <div class="config_list custome_modal" v-if="show">
        <div v-if="stage">
            <div class="popup_header">
                <h2>تنظیمات نمایش</h2>
                <svg version="1.1" id="CloseModal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                </svg>
            </div>
            <form>
                <div class="form-group">
                    <label>تیتر نما</label>
                    <input type="text" class="form-control" v-model="title" />
                </div>
                <div class="form-group" style="position:relative">
                    <label>رنگ پس زمینه</label>
                    <div class="colorpicker_bg" :style="{'background-color': bg.hex}" @click="ShowBgPicker"></div>
                    <click-outside :handler="HideBgPicker">
                        <Chrome v-model="bg" v-if="showbgpicker"></Chrome>
                    </click-outside>
                </div>
                <div class="form-group">
                    <label>مولفه های افقی</label>
                    <div class="btn add_axis" @click="NewAxis">
                        <div class="text">درج مولفه</div>
                        <span class="plus_icon"></span>
                    </div>
                    <div class="axis_item" v-for="(item, index) of axis">
                        {{item}}
                        <span class="remove_axis" @click="Remove(item)"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label>عنوان نما برای ذخیره</label>
                    <input type="text" class="form-control" v-model="name" />
                </div>
                <div class="clearfix"></div>
                <button type="button" class="btn btn-default save" @click="Next">ذخیره ی نما</button>
                <button type="button" class="btn btn-default close" @click="Prev">مرحله قبل</button>
            </form>
        </div>
        <div v-if="!stage">
            <div class="popup_header">
                <h2>درج مولفه افقی(XAXIS)</h2>
                <svg version="1.1" id="CloseModal" @click="Close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                </svg>
            </div>
            <form>
                <div class="form-group">
                    <div class="form-group">
                        <label for="ViewModel">انتخاب فیلد</label>
                        <select class="form-control" id="ViewModel">
                            <option v-for="(item, index) of field" :key="index" :value="item.id">{{item}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group" style="position:relative">
                    <label>رنگ</label>
                    <div class="colorpicker_bg" :style="{'background-color': bg.hex}" @click="ShowBgPicker"></div>
                    <click-outside :handler="HideBgPicker">
                        <Chrome v-model="bg" v-if="showbgpicker"></Chrome>
                    </click-outside>
                </div>
                <div class="form-group">
                    <label>عنوان</label>
                    <input type="text" class="form-control" v-model="xtitle" />
                </div>
                <div class="form-group">
                    <label>ضخامت</label>
                    <select class="form-control" id="ViewModel">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="clearfix"></div>
                <button type="button" class="btn btn-default save" @click="Save">درج مولفه</button>
                <button type="button" class="btn btn-default close" @click="Exit">صرف نظر</button>
            </form>
        </div>
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
            stage: true,
            showbgpicker: false,
            title: '',
            xtitle: '',
            name: '',
            axis:['تعداد مشتری جدید','مانده کل'],
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
            field:['شماره حساب','تاریخ افتتاح حساب','کد مشتری','کد محصول','کد کانال','مبلغ افتتاح حساب','مانده حساب','تاریخ اختتام حساب']
        }
    },
    components: {
        Chrome,
        ClickOutside
    },
    computed: {
        filteredList: function() {
            return this.fields.filter(field => {
                return field.title.toLowerCase().includes(this.searchtext.toLowerCase())
            })
        }
    },
    methods: {
        NewAxis: function () {
            this.stage = false;
            console.log('hi')
        },
        Prev: function() {
            this.$emit('hideconfig', true);
        },
        Next: function() {
            this.$emit('showsubmit', { background: this.bg.hex});
        },
        ShowBgPicker: function() {
            this.showbgpicker = !this.showbgpicker;
        },
        HideBgPicker: function() {
            if (this.showbgpicker) {
                this.showbgpicker = false;
            }
        },
        Close: function() {
            this.$store.commit('ShowCreateView');
            this.$store.commit('ShowBgWrapper');
        },
        Exit: function() {
            this.stage = true;
        },
        Save: function() {
            this.stage = true;
            this.axis.push(this.xtitle);
            this.xtitle = '';
        },
        Remove: function(item) {
            return _.remove(this.axis, item);
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

.config_list .add_axis{
    position: relative;
    color: #fff;
    background: rgb(46, 204, 113);
    padding: 6px 30px 6px 20px;
    float: left;
    outline: none!important;
    box-shadow: none;
    font-size: 13px;
    font-weight: bold;
    margin: 15px auto;
    width: 100%;
    font-weight: bold;
    font-family: "IRANSANS NORMAL";
    transition:  background .3s ease;
}

.config_list .add_axis .text{
    opacity: 1;
    transition: opacity .3s ease, margin-left .3s ease;
}

.config_list .add_axis .plus_icon{
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-60%,-50%);
    height: 12px;
    width: 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 12px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NiA0OTEuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MS44NiA0OTEuODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY1LjE2NywyMTEuNjE0SDI4MC4yNDVWMjYuNjkxYzAtOC40MjQtMTEuNDM5LTI2LjY5LTM0LjMxNi0yNi42OXMtMzQuMzE2LDE4LjI2Ny0zNC4zMTYsMjYuNjl2MTg0LjkyNEgyNi42OSAgICBDMTguMjY3LDIxMS42MTQsMCwyMjMuMDUzLDAsMjQ1LjkyOXMxOC4yNjcsMzQuMzE2LDI2LjY5LDM0LjMxNmgxODQuOTI0djE4NC45MjRjMCw4LjQyMiwxMS40MzgsMjYuNjksMzQuMzE2LDI2LjY5ICAgIHMzNC4zMTYtMTguMjY4LDM0LjMxNi0yNi42OVYyODAuMjQ1SDQ2NS4xN2M4LjQyMiwwLDI2LjY5LTExLjQzOCwyNi42OS0zNC4zMTZTNDczLjU5LDIxMS42MTQsNDY1LjE2NywyMTEuNjE0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
    transition: right .3s ease;
}

.config_list .axis_item{
    display: block;
    padding: 6px;
    text-align: center;
    font-size: 15px;
    background: #ddd;
    color: #222;
    border-radius: 6px;
    margin: 15px auto;
    clear: both;
    position: relative;
}

.config_list .remove_axis{
    position: absolute;
    left: 10px;
    width: 10px;
    height: 10px;
    background-size: 10px;
    background-repeat: no-repeat;
    top: 50%;
    transform: translate(0,-50%);
    cursor: pointer;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iI0Q4MDAyNyIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
}
</style>