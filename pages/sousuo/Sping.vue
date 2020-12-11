<template>
	<view>
		<view class="Array">
		<view class="list1">
			<image class="ima" src="../../static/images/封面.png" style="width: 150rpx; height: 200rpx;"></image>
			<view class="tabs">
				<view class="li">
				<view class="name">书名....</view>
				<navigator url="../Bdetail/Bdetail">
				</navigator>
				</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">最近书评 ：2020-09</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden:false,
			}
		},
		methods: {
			HiddenClick(){
				this.ShowHidden=false
		},
		titClick(){
			this.ShowHidden=!this.ShowHidden;
		}
	},
	}
</script>

<style>
.tit1{
		margin: 30rpx 55rpx; 
		width: 80rpx;
	}
	.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}
	.tit{
		margin: 30rpx 55rpx;
	}
	
	.list1 {
		height: 300rpx;
		width: 100%;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}
	
	.ima {
		margin: 40rpx 40rpx;
	}
	
	.name {
		margin-top: 30rpx;
		font-size: 40rpx;
		width: 30%;
	}
	
	.tex {
		font-size: 28rpx;
		margin-top: 10rpx;
		color: #808080;
	}
	
	.tex1 {
		height: 1rpx;
		width: 450rpx;
		margin-top: 15rpx;
		background-color: #C0C0C0;
	}
	.tabs{
		width: 500rpx;
	}
	.te{
		font-size: 28rpx;
		color: #8F8F94;
		margin-left: 300rpx;
		margin-top: 35rpx;
	}
	.li{
		display: flex;
	}
</style>
