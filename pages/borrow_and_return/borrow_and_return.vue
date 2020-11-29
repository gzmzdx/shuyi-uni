<template>
	<view>
	<view class="top">
	<view class="header-input">
		<input @input="goToSearch" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
		<view>
			<image class="image" src="../../static/images/search_icon.png">
			</image>
		</view>
	</view>
	</view>
	<view class="show">
		<view class="mid">
			<view class="zt"><view class="zt1">广州图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
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
							<navigator url="abolish">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--线下面对面交易中开始-->
			<view class="zt"><view class="zt1">广东图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
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
							<navigator url="abolish">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--线下面对面交易中结束-->

			<!--线下物流配送中开始-->
			<view class="zt"><view class="zt1">广东XXX图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
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
							<navigator url="abolish">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--线下物流配送中结束-->

			<!--预约失败开始-->
			<view class="zt"><view class="zt1">广州XX图书馆</view></view>
			<view class="midone">
				<view class="zhengti">
					<image class="imag" src="../../static/images/书2.jpg" style="width: 125rpx; height: 170rpx;"></image>
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
							<navigator url="abolish">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--预约失败结束-->
		</view>
		<view class="bt"><button style="background-color: #00BFFF;">刷新</button></view>
	</view>
	</view>
</template>

<script></script>

<style>
/* 搜索框 */
.top{
		// background-color: #007AFF;
		height: 90rpx;
		box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx;
	}
	.header-input {
	    margin-left: 28rpx;
	    margin-top: 20rpx;
	    width: 694rpx;
	    height: 66rpx;
	    border-radius: 36rpx;
	    background-color: rgba(255,255,255,255);
	    // border: 1rpx solid #E3E3E3;
	    display: flex;
	    flex-direction: row;
		box-shadow: #007AFF 1rpx 1rpx 5rpx 1rpx;
	} 
	.header-input input {
	    margin-left: 31rpx;
	    width: 564rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    /* border-right: 1rpx solid #dfdfdf; */
	    font-size: 28rpx;
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 20rpx;
	    margin-top: 11rpx;
	    width: 55rpx;
	    height: 55rpx;
	}
.show {
	/* margin-bottom: auto; */
	/* background-color: #0066CC; */
	width: auto;
	height: auto;
}
.bt {
	margin-top: 1045rpx;
}
.mid {
	margin-top: 20rpx;
	width: 100%;
	height: 200rpx;
}
.zt1 {
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 30rpx;
	line-height: center;
	margin-top: 25rpx;
}
.zt {
	border-bottom: 1rpx solid #bbbbbb;
	margin-top: -5rpx;
	height: 60rpx;
	color: #bbbbbb;
}
.midone {
	width: 100%;
	height: 200rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	align-items: center;
	border-bottom: 1rpx solid #bbbbbb;
}
.zhengti {
	display: flex;
	width: 100%;
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
	margin-top: -120rpx;
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
	background-color: #4CD964;
	border-radius: 15rpx;
}

.wz {
	font-size: 20rpx;
	margin-top: 5rpx;
	margin-left: 2rpx;
	text-align: center;
	position: absolute;
}
.wz1 {
	font-size: 16rpx;
	margin-top: 8rpx;
	margin-left: 20rpx;
	text-align: center;
	position: absolute;
}
.shumu {
	margin-left: 180rpx;
	font-size: 25rpx;
	margin-top: -130rpx;
	color: #999999;
	width: 120rpx;
	display: block;
}
.shumuone {
	margin-left: 180rpx;
	font-size: 25rpx;
	color: #999999;
	/* background-color: #4CD964; */
}
.shumutwo {
	margin-left: 250rpx;
	font-size: 20rpx;
	color: #00bfff;
	margin-top: -30rpx;
	/* background-color: #F0AD4E; */
}
.shumuthree {
	margin-top: 10rpx;
	font-size: 25rpx;
	color: #f0ad4e;
	margin-left: 180rpx;
}
</style>
