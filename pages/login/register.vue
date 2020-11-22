<template>
	<view>
		<image class="im" src="../../static/images/logo.png" style="width: 200rpx; height: 200rpx;"></image>
		<view class="name">
			<view class="rt">
			<image src="../../static/images/人.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<input class="inp" placeholder="请输入电话号码" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view class="name">
			<view class="rt">
			<image src="../../static/images/密 码.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<input class="inp" placeholder="请输入密码" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view class="name">
			<view class="rt">
			<image src="../../static/images/确认密码.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<input class="inp" placeholder="确认密码" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view class="name">
			<view class="rt">
			<image src="../../static/images/验证码.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<view class="yanz">
			<input class="inp" placeholder="输入验证码" placeholder-style="color:#BBBBBB"  type="number"></input>
			<button class="tex">获取验证码</button>
			</view>
		</view>
		<button class="btn">注册</button>
		<navigator url="login">
			<view class="tex2">已有账号，去登录</view>
		</navigator>
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
	.im{
		margin-left: 280rpx;
		margin-top: 90rpx;
	}
.name{
		width: 80%;
		height: 70rpx;
		border-bottom: 1rpx solid #C8C7CC;
		margin-left: 70rpx;
		margin-top: 40rpx;
	}
	.rt{
		width: 70rpx;
		margin: 10rpx 10rpx;
		border-right: 1rpx solid #C8C7CC;
	}
.inp{
	width: 50%;
	margin-left: 100rpx;
	margin-top: -60rpx;
}
.yanz{
	display: flex;
}
.tex{
	margin-top: -70rpx;
	font-size: 25rpx;
	margin-left: 50rpx;
	color: #007AFF;
	width: 200rpx;
	height: 55rpx;
	border-radius: 0%;
	text-align: center;
	background-color: #F1F1F1;
}
.btn{
	width: 80%;
	margin-top: 50rpx;
	background-color: #00AAFF;
	color: #FFFFFF;
}
.tex2{
	font-size: 20rpx;
	margin-left: 480rpx;
	margin-top: 20rpx;
	color: #DD524D;
	width: 200rpx;
}
</style>
