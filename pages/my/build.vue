<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">创建个人图书馆</view>
			</view>
			<!-- 内容 -->
			<view class="tr"></view>
			<view class="tex"><input @input="goToSearch" placeholder="图书馆名称"   type="text"/></view>
			<picker>
			<view class="tab">
				<input class="inp" @input="goToSearch" placeholder="图书馆类型"  type="number"></input>
				<image class="ima" src="../../static/images/更多.png" style="width: 30rpx; height: 30rpx;"></image>
			</view>
			</picker>
			<view class="jian">图书馆简介 :</view>
			<textarea class="tex1" placeholder="" ></textarea>
			<view class="jian">选择图书馆成员</view>
			<view class="tr"></view>
			<view class="list">
				<image src="../../static/images/add_more2.png" style="width: 90rpx; height: 90rpx;"></image>
			</view>
			<view class="tr"></view>
			<view class="jian">上传图书馆背景图：</view>
			<view class="tr"></view>
			<view class="tup">
				<image class="image" src="../../static/images/add_more2.png" style="width: 120rpx; height: 120rpx;"></image>
			</view>
	<button class="btn" >
		创建
	</button>
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
.tab1 {
	margin-top: 69rpx;
		display: flex;
	}
	.tit1 {
		margin-top: 19rpx;
		color: #555555 ;
		margin-left: 15rpx;
		font-size: 45rpx;
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
	.tex input{
		margin-left: 20rpx;
		width: 450rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 36rpx;
		margin-top: 20rpx;
	}
	.btn{
		margin-top: 100rpx;
		width: 80%;
		background-color: #00AAFF;
		color: #FFFFFF;
	}
	.tab{
		height: 100rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		border-bottom: 3rpx solid #F1F1F1;
	}
		.inp{
			/* text-align: center; */
			height: 80rpx;
			margin-left: 20rpx;
			font-size: 36rpx;
		}
		.ima{
			top: -60rpx;
			margin-left: 680rpx;
		}
		.tex1{
			margin: 10rpx 20rpx;
			font-size: 34rpx;
			font-family: 'Courier New', Courier, monospace;
			width: 95%;
			-moz-box-shadow:2px 2px 10px #F1F1F1;
			-webkit-box-shadow:2px 2px 10px #F1F1F1;
			box-shadow:2px 2px 10px #F1F1F1;
		}
		.jian{
			height: 50rpx;
			margin: 10rpx 20rpx;
			font-size: 36rpx;
			color: #808080;
			/* border-bottom: 3rpx solid #F1F1F1; */
		}
		.tr{
			height: 10rpx;
			background-color: #F8F8F8;
		}
		.list{
			height: 100rpx;
		}
		.tup{
			margin: 10rpx 20rpx;
			width: 200rpx;
			height: 200rpx;
			-moz-box-shadow:2px 2px 10px #F1F1F1;
			-webkit-box-shadow:2px 2px 10px #F1F1F1;
			box-shadow:2px 2px 10px #F1F1F1;
		}
		.image{
			margin-left: 35rpx;
			margin-top: 30rpx;
		}
</style>
