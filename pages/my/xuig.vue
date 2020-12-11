<template>
	<view>
		<!-- 导航栏 -->
		<!-- #ifdef APP-PLUS -->
		<view class="ta"></view>
			<view class="tab1" style="width: 100%; height: 90rpx;">
				<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
				<view class="tit1">修改借书卡</view>
				</view>
				<!-- 内容 -->
				<view class="tr"></view>
				<view class="tex"><input @input="goToSearch" placeholder="借书证号"   type="text"/></view>
				<view class="tex"><input @input="goToSearch" placeholder="身份证号"   type="text"/></view>
				<view class="tex"><input @input="goToSearch" placeholder="图书馆"   type="text"/></view>
				<view class="tex"><input @input="goToSearch" placeholder="密码"   type="password"/></view>
		<button class="btn" >
			提交
		</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="ta"></view>
			<view class="tab1" style="width: 100%; height: 90rpx;">
				<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
				<view class="tit2">修改借书卡</view>
				</view>
				<!-- 内容 -->
				<view class="tr"></view>
				<view class="tex1"><input @input="goToSearch" placeholder="借书证号"   type="text"/></view>
				<view class="tex1"><input @input="goToSearch" placeholder="身份证号"   type="text"/></view>
				<view class="tex1"><input @input="goToSearch" placeholder="图书馆"   type="text"/></view>
				<view class="tex1"><input @input="goToSearch" placeholder="密码"   type="password"/></view>
		<button class="btn1" >
			提交
		</button>
		<!-- #endif -->
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
.ta{
			height: 70rpx;
			background-color:#6C40F3;
		}
	.tab1 {
			display: flex;
			background-color:#6C40F3;
		}
	.tit1 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 210rpx;
			display: flex;
			font-size: 40rpx;
	}
	.tit2 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 200rpx;
			display: flex;
			font-size: 40rpx;
			width: 60%;
	}
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.tr{
		height: 10rpx;
		background-color: #F8F8F8;
	}
	.tex{
		height: 80rpx;
		border-bottom: 1rpx solid #F1F1F1;
		color: #8F8F94;
		
	}
	.tex1{
		height: 80rpx;
		border-bottom: 1rpx solid #F1F1F1;
		color: #8F8F94;
		
	}
	.tex input{
		margin-left: 20rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
		margin-top: 20rpx;
	}
	.tex1 input{
		margin-left: 20rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
		margin-top: 20rpx;
	}
	.btn{
		margin-top: 200rpx;
		width: 80%;
		background-color: #DD524D;
		color: #FFFFFF;
	}
	.btn1{
		margin-top: 200rpx;
		width: 80%;
		height: 100rpx;
		background-color: #DD524D;
		color: #FFFFFF;
	}
</style>
