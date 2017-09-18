<template>
	<v-bar wrapper="wrapper"
	vBar="custome_scrollbar_y"
	vBarInternal=""
	hBar=""
	hBarInternal=""
	@top="handleScroll">
		<div id="app">
			<!-- your content -->
			<FixedHeader></FixedHeader>
			<router-view></router-view> 	
		</div>
	</v-bar>	 
</template>

<script>
import VBar from 'v-bar'
import FixedHeader from './components/header/header'

export default {
	name: 'app',
	data() {
		return {

		}
	},
	components:{
		VBar,
		FixedHeader
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
