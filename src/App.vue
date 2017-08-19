<template>
	<v-bar wrapper="wrapper"
	vBar="custome_scrollbar_y"
	vBarInternal=""
	hBar=""
	hBarInternal=""
	@top="handleScroll">
		<div id="app">
			<!-- your content -->
			<router-view></router-view> 	
		</div>
	</v-bar>	 
</template>

<script>
import VBar from 'v-bar'

export default {
	name: 'app',
	data() {
		return {

		}
	},
	components:{
		VBar
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
