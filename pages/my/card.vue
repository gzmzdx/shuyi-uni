<template>
	<view >
		<!-- #ifdef APP-PLUS -->
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit1">快速办证</view>
			</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">快速办证</view>
			</view>
		<!-- #endif -->
		
		<view class="ta">
			</view>
		<view class="tab">
			<input class="inp" placeholder="姓         名" placeholder-style="color:#BBBBBB"  type="text"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="身份证号" placeholder-style="color:#BBBBBB"  type="text"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="密         码" placeholder-style="color:#BBBBBB"  type="password"></input>
		</view>
		<view class="tab">
			<input class="inp" placeholder="确认密码" placeholder-style="color:#BBBBBB"  type="password"></input>
		</view>
		<picker>
			<view class="tab">
				<input class="inp" placeholder="图  书  馆" placeholder-style="color:#BBBBBB"  type="number"></input>
				<!-- #ifdef APP-PLUS -->
				<image class="ima" src="../../static/images/更多.png" style="width: 30rpx; height: 30rpx;"></image>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<image class="ima1" src="../../static/images/更多.png" style="width: 30rpx; height: 30rpx;"></image>
				<!-- #endif -->
			</view>
		</picker>
		<!-- #ifdef APP-PLUS -->
		<button class="btn">
			申请办证
		</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<button class="btn1">
			申请办证
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
			margin-left: 210rpx;
			display: flex;
			font-size: 40rpx;
			width: 40%;
	}
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.ta{
		height: 10rpx;
		background-color: #F1F1F1;
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
	}
	.ima{
		top: -47rpx;
		margin-left: 680rpx;
	}
	.ima1{
		top: 47rpx;
		margin-left: 680rpx;
	}
	.btn{
		width: 80%;
		margin-top: 40rpx;
		color: #FFFFFF;
background: #00AAFF;
	}
	.btn1{
			width: 80%;
			margin-top: 40rpx;
			color: #FFFFFF;
			height: 100rpx;
	background: #00AAFF;
		}
</style>
