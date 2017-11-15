<template>
	<v-bar wrapper="wrapper"
	vBar="custome_scrollbar_y"
	vBarInternal=""
	hBar=""
	hBarInternal=""
	@top="handleScroll">
		<div id="app">
			<FixedHeader></FixedHeader>
			<router-view></router-view>

			<CreateModel></CreateModel>
        	<CreateView></CreateView>
			<BgWrapper :show="this.$store.state.showbgwrapper"></BgWrapper>
		</div>
	</v-bar>	 
</template>

<script>
import VBar from 'v-bar'
import FixedHeader from './components/header/header'

import CreateView from './components/view/popup'
import CreateModel from './components/model/popup'
import BgWrapper from './components/global/bgwrapper'

export default {
	name: 'app',
	data() {
		return {

		}
	},
	components:{
		VBar,
		FixedHeader,
		BgWrapper,
		CreateView,
		CreateModel
	},
	mounted () {
		if(window.navigator.userAgent.indexOf("Mac") == -1){
			var main = document.getElementById("app");
			main.className += " window";
		}
	},
	methods: {
        handleScroll (top) {
			if(top>= 30){
				this.$store.commit('ScrollEvent',true);
			}else{
				this.$store.commit('ScrollEvent',false);
			}
        }
	}
}
</script>

<style>
.wrapper{
	height: 100%;
	width: 100%;
}

#app.window{
	padding-right: 0!important;
}
</style>
