<template name="Logistic">
	<view>
		<view class="mid">
			<view class="zt"><view class="zt1">广东图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<!-- <view class="midwz">致敬老师</view> -->
					<view class="s1">
						预约时间：2017-11-08
						<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">
							当前状态：
							<view class="s5">等待持书人还书</view>
						</view>
						<view class="s8">
							<navigator url="../appointment/abolish">
								<button class="btn1"><view class="wz">取消预约</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--预约成功开始-->
			<view class="zt"><view class="zt1">广州图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">
						预约时间：2017-11-08
						<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">
							当前状态：
							<view class="s5">交易成功</view>
						</view>
						<view class="s8">
								<button class="btn5"><view class="wz">删除记录</view></button>
						</view>
					</view>
				</view>
			</view>

			<view class="zt"><view class="zt1">广东图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
					<view class="midwz">致敬老师</view>
				</view>
				<view>
					<view class="s1">
						预约时间：2017-11-08
						<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view>
					<view class="s2">上一位借书人：爱哭的猫</view>
					<view class="s7">
						<view class="s3">上一次还书期：2017-09-10</view>
						<view class="s4">
							当前状态：
							<view class="s5">等待持书人还书</view>
						</view>
						<view class="s8">
							<navigator url="../appointment/abolish">
								<button class="btn1"><view class="wz">取消预约</view></button>
							</navigator>
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
		return {};
	},
	methods: {}
};
</script>

<style>
.mid {
	/* margin-top:30rpx; */
	width: 100%;
	height: auto;
	/* background-color: #007AFF; */
	/* box-shadow: #808080 1rpx 1rpx 15rpx 1rpx; */
}
.zt {
	/* height: 40rpx; */
	border-bottom: solid 1rpx;
	/* border-top:solid 1rpx; */
	margin-top: -5rpx;
	height: 60rpx;
	color: #bbbbbb;
}
.zt1 {
	color: #f0ad4e;
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
	border-bottom: 1rpx solid #e3e3e3;
}
.zhengti {
	display: flex;
	width: 100%;
	margin-left: 30rpx;
}
.imag {
	margin-left: 30rpx;
}
.midwz {
	font-size: 28rpx;
	height: 35rpx;
	margin-top: -5rpx;
	align-items: center;
	margin-left: 30rpx;
	width: auto;
	/* background-color:  #333333; */
}
.s1 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: -130rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
	display: flex;
}
.s2 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s3 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #999999;
}
.s4 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: 0rpx;
	align-items: center;
	margin-left: 190rpx;
	color: #f0ad4e;
}
.s5 {
	font-size: 20rpx;
	height: 35rpx;
	margin-top: -26rpx;
	align-items: center;
	margin-left: 100rpx;
	color: #555555;
}
.s6 {
	color: #dd524d;
}

.s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
	/* display: flex; */
}

.s8 {
	text-align: center;
}
.btn1 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #00bfff;
	border-radius: 15rpx;
}
.btn3 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #4cd964;
	border-radius: 15rpx;
}
.wz {
	font-size: 16rpx;
	margin-top: 8rpx;
	/* width: 137rpx; */
	margin-left: 5rpx;
	text-align: center;
	position: absolute;
}
.btn5 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
	margin-right: 20rpx;
	margin-top: -60rpx;
	background-color: #dd524d;
	border-radius: 15rpx;
	text-align: center;
}
.wz1 {
	font-size: 16rpx;
	margin-top: 8rpx;
	/* width: 137rpx; */
	margin-left: 20rpx;
	text-align: center;
	position: absolute;
}
</style>
