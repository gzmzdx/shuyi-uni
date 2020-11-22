<template>
	<view> 
		<view class="Array">
				<view class="list1">
					<image class="ima" src="../../static/images/me_blue.png" style="width: 110rpx; height: 110rpx;"></image>
					<view class="tabs">
						<view class="tr">
						<view class="tit">爱书的猫</view>
						<view class="btn">LV11</view>
						<view class="te">书圣</view>
						<image class="imag" src="../../static/images/double_right_arrow.png" style="width: 20rpx; height: 20rpx;"></image>
						</view>
						<view class="tex">广州</view>
						<view class="tr">
						<view class="text">个性签名：</view>
					    <view class="text1">书山有路勤为径，学海无涯苦作舟</view>
					</view>
					</view>
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
	.list{
		/* margin-left: -370rpx; */
		height: 120rpx;
		display: flex;
	}
	.tit{
		margin: 30rpx -10rpx;
		font-size: 35rpx;
		color: #333333;
	}
	
	.list1 {
		/* margin-left: -370rpx; */
		height: 190rpx;
		width: 100%;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
		
	}
	
	.ima {
		margin: 40rpx 40rpx;
		border-radius: 50%;
	}
	.imag {
		margin-left: 270rpx;
		margin-top: 60rpx;
	}
	.tr{
		display: flex;
	}
	.btn{
		width: 45rpx;
		height: 22rpx;
		font-size: 15rpx;
		color: #F0AD4E;
		border-radius: 15%;
		margin: 45rpx 20rpx;
		border:1px solid #F0AD4E;
	}
	
	.tex {
		font-size: 25rpx;
		margin-top: -40rpx;
		color: #808080;
	}
	
	.text {
		height: 1rpx;
		width: 250rpx;
		font-size: 25rpx;
		color: #555555;
		margin-top: 10rpx;
	}
	.text1 {
		height: 1rpx;
		/* width: 250rpx; */
		margin-left: -140rpx;
		font-size: 25rpx;
		color: #555555;
		margin-top: 10rpx;
	}
	.tabs{
		width: 550rpx;
	}
	.te{
		font-size: 25rpx;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: #F0AD4E;
		margin: 40rpx -10rpx;
	}
	.li{
		display: flex;
	}
</style>
