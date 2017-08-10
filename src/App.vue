<template>
	<v-bar wrapper="wrapper"
	vBar=""
	vBarInternal=""
	hBar=""
	hBarInternal="">
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
	}
}
</script>

<style>
/* @import url('./assets/bootstrap.min.css'); */
.wrapper{
	height: 100%;
	width: 100%;
}
</style>
