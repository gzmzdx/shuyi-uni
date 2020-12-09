<template>
	<view> 
	<!-- #ifdef APP-PLUS -->
	<view class="Array">
			<view class="list1">
				<image class="ima" src="../../static/images/me_blue.png" style="width: 80rpx; height: 80rpx;"></image>
				<view class="tabs">
					<view class="tr">
					<view class="tit">爱读书的</view>
					<view class="btn">LV11</view>
					<view class="te">书圣</view>
					<image class="imag" src="../../static/images/double_right_arrow.png" style="width: 20rpx; height: 20rpx;"></image>
					</view>
					<view class="tr">
				</view>
				</view>
			</view>
		</view>
	<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="Array">
				<view class="list2">
					<image class="ima" src="../../static/images/me_blue.png" style="width: 80rpx; height: 80rpx;"></image>
					<view class="tabs">
						<view class="tr">
						<view class="tit">爱读书的</view>
						<view class="btn">LV11</view>
						<view class="te">书圣</view>
						<image class="imag" src="../../static/images/double_right_arrow.png" style="width: 20rpx; height: 20rpx;"></image>
						</view>
						<view class="tr">
					</view>
					</view>
				</view>
			</view>
		<!-- #endif -->
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
		margin-top: 50rpx;
		font-size: 35rpx;
		font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
		color: #333333;
		width: 160rpx;
		height: 60rpx;
	}
	
	.list1 {
		/* margin-left: -370rpx; */
		height: 130rpx;
		margin-top: 10rpx;
		width: 100%;
		border-bottom: 3rpx solid #F1F1F1;
		border-top:3rpx solid #F1F1F1 ;
		display: flex;
	}
	.list2 {
		height: 130rpx;
		/* margin-top: 10rpx; */
		width: 100%;
		/* border-bottom: 3rpx solid #F1F1F1; */
		/* border-top:3rpx solid #F1F1F1 ; */
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
		/* align-items: center; */
		color: #F0AD4E;
		border-radius: 15%;
		margin: 15rpx 20rpx;
		margin-top: 60rpx;
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
		margin-left: -170rpx;
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
		margin: 30rpx -10rpx;
		margin-top: 56rpx;
	}
	.li{
		display: flex;
	}
</style>
