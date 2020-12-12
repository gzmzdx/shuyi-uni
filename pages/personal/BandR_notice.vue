<template>
	<view class="all">
		<view class="mid">
			<view class="zt">
				<view class="zt1">预约成功</view>
				<view class="zt2">2017-08-10</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 120rpx;height: 160rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">您预约xxx成功...</view>
					<navigator url=""></navigator>
					<view class="s1">
						查看详情>>
						<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
					</view>
				</view>
			</view>
		</view>
		<view class="mid">
			<view class="zt">
				<view class="zt1">您的订单已发货</view>
				<view class="zt2">2017-08-10</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 120rpx;height: 160rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">您的xxx订单xxx...</view>
					<navigator url="../appointment/logistics">
						<view class="s1">
							查看详情>>
							<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="mid">
			<view class="zt">
				<view class="zt1">包裹已领取</view>
				<view class="zt2">2017-08-10</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 120rpx;height: 160rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">您的xxxxx成功哈哈哈哈哈哈哈哈...</view>
					<navigator url="../appointment/confirm">
						<view class="s1">
							查看详情>>
							<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="mid">
			<view class="zt">
				<view class="zt1">包裹已领取</view>
				<view class="zt2">2017-08-10</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 120rpx;height: 160rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">您xxx成功...</view>
					<navigator url="../appointment/confirm">
						<view class="s1">
							查看详情>>
							<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="mid">
			<view class="zt">
				<view class="zt1">包裹已领取</view>
				<view class="zt2">2017-08-10</view>
			</view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 120rpx;height: 160rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">您xxx成功...</view>
					<navigator url="../appointment/confirm">
						<view class="s1">
							查看详情>>
							<!-- <image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image> -->
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style>
	.all {
		height: 20024rpx;
		margin-top: -20rpx;
		background-color: #F2F2F2;
	}

	.mid {
		height: auto;
		margin: 20rpx 20rpx;
		border-radius: 20rpx;
		border: #FFFFFF 1rpx solid;
		background-color: #FFFFFF;
	}

	.zt {
		height: 60rpx;
	}

	.zt1 {
		width: 60%;
		font-weight: 800;
		font-size: 32rpx;
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.zt2 {
		margin-top: -40rpx;
		text-align: right;
		margin-right: 30rpx;
		color: #999999;
	}

	.zhengti {
		margin-left: 30rpx;
		width: 125rpx;
		/* height: 170rpx; */
	}

	.xq {
		/* margin-left: 30rpx; */
		height: 160rpx;
		/* height: 180rpx; */
		width: 530rpx;
		background-color: #F2F2F2;
	}

	.midwz {
		margin-top: 25rpx;
		margin-left: 10rpx;
		font-size: 30rpx;
		color: #82848a;
	}

	.s1 {
		font-size: 30rpx;
		margin-top: 20rpx;
		height: 35rpx;
		margin-left: 10rpx;
		/* margin-top: -120rpx; */
		/* margin-left: 190rpx; */
		color: #82848a;
		display: flex;
	}

	.s2 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 20rpx;
		align-items: center;
		/* margin-left: 190rpx; */
		color: #999999;
	}

	.s3 {
		font-size: 20rpx;
		height: 35rpx;
		margin-top: 0rpx;
		align-items: center;
		/* margin-left: 190rpx; */
		color: #999999;
	}

	.s4 {
		font-size: 24rpx;
		height: 35rpx;
		margin-top: 10rpx;
		align-items: center;
		/* margin-left: 190rpx; */
		color: #f0ad4e;
	}

	.s5 {
		font-size: 24rpx;
		height: 35rpx;
		margin-top: -32rpx;
		align-items: center;
		margin-left: 110rpx;
		color: #f0ad4e;
	}

	.s6 {
		color: #dd524d;
	}

	/* .s7 {
		height: 35rpx;
		align-items: center;
		width: auto;
		background-color: #000000;
	} */
	.s8 {
		margin-top: 20rpx;
		margin-left: 380rpx;
	}

	.btn1 {
		color: #f8f8f8;
		width: 137rpx;
		height: 55rpx;
		margin-top: -60rpx;
		background-color: #4cd964;
		border-radius: 15rpx;
	}

	.wz {
		font-size: 20rpx;
		margin-top: 5rpx;
		margin-left: 2rpx;
		text-align: center;
		position: absolute;
	}

	/* 滑动删除 */

	.midone {
		/* width: 100%; */
		/* margin: 20 auto; */
		/* border: 1px solid #C0C0C0; */
		/* line-height: 100px; */
		/* text-align: center; */

		display: flex;
		/* width: 100%; */
		height: 180rpx;
		font-size: 30rpx;
		margin-top: 0rpx;
		/* align-items: center; */
		/* background-color: #00BFFF; */
		/* border-bottom: 1rpx solid #EBEBEB; */
	}
</style>
