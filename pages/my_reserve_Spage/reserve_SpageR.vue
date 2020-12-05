<template name="Orders">
	<view>
		<view class="mid">
				<!--预约中开始-->
		<view class="zt">
			<view class="zt1">
				爱书的猫
			</view>
			
		</view>
		<view class="midone">
			
			<view class="zhengti">
				<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
				<view class="midwz">致敬老师</view>
				
			</view>
			<view >
				<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
					<view class="s6">1.2km</view>
				</view>
				<view class="s2">上一位借书人：爱哭的猫</view>
				<view class="s7">
					<view class="s3">上一次还书期：无</view>
					<view class="s4">当前状态：
						<view class="s5">预约失败，交易终止</view>
					</view>
					<view class="s8">
						<button class="btn5"><view class="wz1">删除</view></button>
					</view>
				</view>
			</view>
		</view>
			<!--预约成功开始-->
			<view class="zt">
				<view class="zt1">
					爱书的猫
				</view>
				
			</view>
			<view class="midone">
				
				<view class="zhengti">
					<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
					
				</view>
				<view >
					<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：无</view>
						<view class="s4">当前状态：
							<view class="s5">预约失败，交易终止</view>
						</view>
						<view class="s8">
							<button class="btn5"><view class="wz1">删除</view></button>
						</view>
					</view>
				</view>
			</view>
			<!--预约失败开始-->
			<view class="zt">
				<view class="zt1">
					爱书的猫
				</view>
				
			</view>
			<view class="midone">
				
				<view class="zhengti">
					<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
					
				</view>
				<view >
					<view class="s1">预约时间：2017-11-08 <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：无</view>
						<view class="s4">当前状态：
							<view class="s5">预约失败，交易终止</view>
						</view>
						<view class="s8">
							<button class="btn5"><view class="wz1">删除</view></button>
						</view>
					</view>
				</view>
			</view>
			<!--预约失败结束-->
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
.mid {
		/* margin-top:30rpx; */
		width: 100%;
		height: auto;
		/* background-color: #007AFF; */
		/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
	}
	.zt{
		/* height: 40rpx; */
		border-bottom:solid 1rpx;
		/* border-top:solid 1rpx; */
		margin-top: -5rpx;
		height: 60rpx;
		color: #BBBBBB;
	}
	.zt1{
		color: #F0AD4E;
		font-size: 28rpx;
		margin-left: 30rpx;
		line-height: center;
		margin-top: 25rpx;
	}
	.midone {
		width: 100%;
		height: 200rpx;
		font-size: 30rpx;
		margin-top: 35rpx;
		align-items: center;
		border-bottom: 1rpx solid #E3E3E3;
	}
	.zhengti {
		display: flex;
		width: 100%;
		margin-left:30rpx;
	}
	.imag{
		margin-left:30rpx;
	}
	.midwz {
		font-size: 28rpx;
		height:35rpx;
		margin-top: -5rpx;
		align-items: center;
		margin-left: 30rpx;
		width: auto;
		/* background-color:  #333333; */
	}
	.s1{
		font-size: 20rpx;
		height:35rpx;
		margin-top: -130rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
		display: flex;
	}
	.s2{
		font-size: 20rpx;
		height:35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}
	.s3{
		font-size: 20rpx;
		height:35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #999999;
	}
	.s4{
		font-size: 20rpx;
		height:35rpx;
		margin-top: 0rpx;
		align-items: center;
		margin-left: 190rpx;
		color: #F0AD4E;
	}
	.s5{
		font-size: 20rpx;
		height:35rpx;
		margin-top: -26rpx;
		align-items: center;
		margin-left: 100rpx;
		color: #555555;
	}
	.s6{
		color: #DD524D;
		
	}
	
	.s7{
		height:35rpx;
		align-items: center;
		width: auto;
		/* display: flex; */
	}
	
	.s8{
		text-align: center;
	}
	.btn1{
		color: #F8F8F8;
		width: 137rpx;
		height: 55rpx;
		margin-right: 20rpx;
		margin-top: -60rpx;
		background-color: #00BFFF;
		border-radius: 15rpx;
		}
		.btn3{
				color: #F8F8F8;
				width: 137rpx;
				height: 55rpx;
				margin-right: 20rpx;
				margin-top: -60rpx;
				background-color: #4CD964;
				border-radius: 15rpx;
				}
		.wz{
			font-size: 16rpx;
			margin-top: 8rpx;
			/* width: 137rpx; */
			margin-left: 5rpx;
			text-align: center;
			position: absolute;
		}
		.btn5{
			color: #F8F8F8;
			width: 137rpx;
			height: 55rpx;
			margin-right: 20rpx;
			margin-top: -60rpx;
			background-color: #DD524D;
			border-radius: 15rpx;
			text-align: center;
			}
	.wz1{
		font-size: 16rpx;
		margin-top: 8rpx;
		/* width: 137rpx; */
		margin-left: 20rpx;
		text-align: center;
		position: absolute;
	}	
</style>
