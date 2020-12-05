<template>
	<view>
		<!-- 导航栏 -->
		<view class="tr"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit1">图书搜索</view>
			<image class="im"  src="../../static/images/附近的书.定位.icon@2x.png" style="width: 48rpx; height: 48rpx;"></image>
			<navigator url="fujin">
			<view class="tit2">附近的书</view>
			</navigator>
			</view>
			<!-- 搜索框 -->
			<view class="tit">
			
			<view class="titi">
				<view class="h-input">
					<image src="../../static/images/搜索icon@2x.png" class="image"></image>
					<input @input="goToSearch" placeholder="请输入关键字" placeholderStyle="color:#BBBBBB "  type="text"/>
				</view>
				<navigator url="book">
				<view class="tab">搜索</view>
				</navigator>
			</view>
			</view>
			<!-- 热搜内容 -->
			<view class="list">
				<!-- <image class="hot" src="../../static/images/热搜.png"style="width: 40rpx; height: 40rpx;"></image> -->
				<view class="tex">热门搜索</view>
				
			</view>
			<view class="list">
				<view class="tex2">深度学习</view>
				<view class="tex2">财富号历</view>
				<view class="tex2">深度学习</view>
				<view class="tex2">深度学习</view>
			</view>
			<view class="list">
				<view class="tex2">深度学习</view>
				<view class="tex2">深度学习</view>
				
			</view>
			<view class="list1">
				<view class="tex">历史记录</view>
				<image class="more" src="../../static/images/清空删除.icon@2x.png"style="width: 40rpx; height: 40rpx;"></image>
			</view>
			<view class="list">
				<view class="tex2">深度学习</view>
			</view>
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
	.tr{
		height: 70rpx;
		background-color:#6C40F3;
	}
.tab1 {
		display: flex;
		background-color:#6C40F3;
	}
	.tit{
		margin-top: 19rpx;
		/* display: flex; */
		
	}
	.tit1 {
		margin-top: 9rpx;
		color:#FFFFFF ;
		margin-left: 200rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;
	}
	
	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 23rpx;
		margin-left: 10rpx;
	}
	.tit2{
		margin-top: 27rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		margin-left: 0rpx;
		
	}
	.tit3{
		margin-top: 5rpx;
		font-size: 30rpx;
		color: #808080;
		margin-left: 13rpx;
	}
	.tab{
		display: flex;
		margin-left: 20rpx;
		color: #646464;
		font-size: 38rpx;
		margin-top: 8rpx;
		width: 100rpx;
	}
	.ima{
		margin-top: 10rpx;
		margin-left: 10rpx;
	}
	.titi{
		height: 100rpx;
		display: flex;
	}
	.h-input{
		margin-left: 20rpx;
		/* margin-top: 20rpx; */
		width: 600rpx;
		height: 60rpx;
		border-radius: 36rpx;
		background-color: #F1F1F1;
		display: flex;
		flex-direction: row;
	}
	.h-input input{
		margin-left: -70rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		/* align-items: ; */
		display: flex;
		/* outline-width: 100rpx; */
		font-size: 28rpx;
		
	}
	.h-input view{
		width: 90rpx;
		
		
	}
	.image{
		margin-left: 10rpx;
		margin-top: -5rpx;
		width: 65rpx;
		height: 65rpx;
	}
	.list{
		display: flex;
		margin-top: 20rpx;
		height: 60rpx;
	}
	.tex{
		font-size: 42rpx;
		color: #E2E2E2;
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 30%;
	}
	.tex1{
		font-size: 30rpx;
		color: #808080;
		margin-left: 470rpx;
	}
	.hot{
		margin: 8rpx 15rpx;
	}
	.tex2{
		font-size: 32rpx;
		color: #7D7D7D;
		margin-left: 22rpx;
		/* margin-top: 20rpx; */
		border-radius: 20rpx;
		text-align: center;
		align-items: center;
		background-color: #EBEBEB;
		width: 150rpx;
		line-height: 50rpx;
		height: 45rpx;
		-webkit-line-clamp: 1;
	}
	.list1{
		display: flex;
		margin-top: 60rpx;
		height: 60rpx;
		/* -webkit-line-clamp: 2; */
	}
	.tex3{
		font-size: 30rpx;
		color: #808080;
		margin-left: 400rpx;
	}
	.more{
		margin-top:30rpx;
		margin-left: 400rpx;
	}
	
</style>
