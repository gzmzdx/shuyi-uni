<template>
	<view>
		<image class="im" src="../../static/images/logo.png" style="width: 200rpx; height: 200rpx;"></image>
		<view class="name">
			<view class="rt">
			<image src="../../static/images/人.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<input class="inp" placeholder="请输入用户名" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view class="name1">
			<view class="rt">
			<image src="../../static/images/密 码.png" style="width: 50rpx;height: 50rpx; "></image>
			</view>
			<input class="inp" placeholder="请输入密码" placeholder-style="color:#BBBBBB"  type="number"></input>
		</view>
		<view>
			<navigator url="../main/main">
		<button class="but">登录</button>
		</navigator>
		<navigator url="register">
		<text class="tex">首次登陆？忘记密码?</text>
		</navigator>
		</view>
		<view class="sj">
			<view class="li"></view>
			<text class="oth">第三方登录</text>
			<view class="li"></view>
		</view>
		<image class="ima" src="../../static/images/QQ.png" style="width: 100rpx; height: 100rpx;"></image>
		<image  class="ima" src="../../static/images/微信.png" style="width: 100rpx; height: 100rpx;"></image>
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
		margin-top: 70rpx;
	}
	.name1{
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
.but{
	margin-top: 80rpx;
	width: 650rpx;
	color: #FFFFFF;
	background-color: #00aaff;
}
.tex{
	font-size: 20rpx;
	margin-left: 480rpx;
	color: #DD524D;
}
.oth{
	margin-top: 10rpx;
	margin-left: 55rpx;
	font-size: 28rpx;
	color: #555555;
}
.li{
	width: 200rpx;
	height: 20rpx;
	margin-top: 10rpx;
	margin-left: 50rpx;
	border-bottom: 1rpx solid #999999;
}
.sj{
	text-align: center;
	margin-top: 70rpx;
	display: flex;
	
}
.ima{
	margin-top: 80rpx;
	margin-left: 180rpx;
	
}
</style>
