<template>
	<view>
		<view class="td"></view>
		<view class="tit">爱读书的猫</view>
		<view class="tr">
			<view class="tex">图书馆类型:</view>
			<view class="tex1">文学类</view>
		</view>
		<view class="tr">
			<view class="tex">创建时间:</view>
			<view class="tex1">2020-10-11</view>
		</view>
		<view class="tr">
			<view class="tex">创建人:</view>
			<view class="tex1">猫</view>
		</view>
		<view class="td"></view>
		<view class="tit">图书馆简介</view>
		<view class="tex2">爱读书的猫是一个文学类图书的个人图书馆</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.tit{
	margin: 20rpx 30rpx;
	font-size: 37rpx;
}
.tr{
	display: flex;
}
.tex{
	margin: 5rpx 30rpx;
	color: #555555;
	font-size: 30rpx;
	font-family: 'Courier New', Courier, monospace;
}
.tex1{
	margin: 5rpx -10rpx;
	color: #555555;
	font-size: 30rpx;
	font-family: 'Courier New', Courier, monospace;
}
.td{
	margin-top: 10rpx;
	height: 4rpx;
	background-color: #F8F8F8;
	width:95%;
	margin-left: 15rpx;
}
.tex2{
	margin: 5rpx 20rpx;
	color: #555555;
	font-size: 30rpx;
	height: 300rpx;
	width: 95%;
	font-family: 'Courier New', Courier, monospace;
}
</style>
