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
			<BgWrapper :show="this.$store.state.showbgwrapper"></BgWrapper>
		</div>
	</v-bar>	 
</template>

<script>
import VBar from 'v-bar'
import FixedHeader from './components/header/header'

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
		BgWrapper
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
</style>
