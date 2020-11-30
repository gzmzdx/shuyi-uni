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
			<!-- <view class="zt"><view class="zt1">广州图书馆</view></view> -->
			<view class="midone">
				<view class="zhengti">
					<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
				</view>
				<view class="xq">
					<view class="midwz">致敬老师</view>
					<!-- <view class="s1">
						预约时间：2017-7-08
						<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
						<view class="s6">1.2km</view>
					</view> -->
					<view class="s2">借入时间：2017-08-10</view>
					<view class="s7">
						<view class="s3">还书时间：2017-09-10</view>
						<view class="s4">
							<!-- 当前状态： -->
							配送方式：
							<!-- 书易配送 -->
							<!-- 物流配送 -->
							<!-- 读者自提 -->
							<view class="s5">书易配送</view>
						</view>
						<view class="s8">
							<navigator url="./borrow_and_returnXQ">
								<button class="btn1"><view class="wz">查看详情</view></button>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<!--下一个开始-->
				<!-- <view class="zt"><view class="zt1">广州图书馆</view></view> -->
				<view class="midone">
					<view class="zhengti">
						<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
					</view>
					<view class="xq">
						<view class="midwz">致敬老师</view>
						<!-- <view class="s1">
							预约时间：2017-7-08
							<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
							<view class="s6">1.2km</view>
						</view> -->
						<view class="s2">借入时间：2017-08-10</view>
						<view class="s7">
							<view class="s3">还书时间：2017-09-10</view>
							<view class="s4">
								<!-- 当前状态： -->
								配送方式：
								<!-- 书易配送 -->
								<!-- 物流配送 -->
								<!-- 读者自提 -->
								<view class="s5">物流配送</view>
							</view>
							<view class="s8">
								<navigator url="./borrow_and_returnXQ">
									<button class="btn1"><view class="wz">查看详情</view></button>
								</navigator>
							</view>
						</view>
					</view>
				</view>
			<!-- 下一个 -->
				<!-- <view class="zt"><view class="zt1">广州图书馆</view></view> -->
				<view class="midone">
					<view class="zhengti">
						<image src="../../static/images/书1.jpg" style="width: 140rpx;height: 180rpx;"></image>
					</view>
					<view class="xq">
						<view class="midwz">致敬老师</view>
						<!-- <view class="s1">
							预约时间：2017-7-08
							<image style="width: 30rpx; height: 30rpx;" src="../../static/images/dingwei.png"></image>
							<view class="s6">1.2km</view>
						</view> -->
						<view class="s2">借入时间：2017-08-10</view>
						<view class="s7">
							<view class="s3">还书时间：2017-09-10</view>
							<view class="s4">
								<!-- 当前状态： -->
								配送方式：
								<!-- 书易配送 -->
								<!-- 物流配送 -->
								<!-- 读者自提 -->
								<view class="s5">读者自提</view>
							</view>
							<view class="s8">
								<navigator url="./borrow_and_returnXQ">
									<button class="btn1"><view class="wz">查看详情</view></button>
								</navigator>
							</view>
						</view>
					</view>
				</view>
			<!-- 下一个 -->
			
			<!-- 下一个 -->
			
			<!-- 刷新 -->
		<!-- <view class="bt"><button style="background-color: #00BFFF;">刷新</button></view> -->
	</view>
	</view>
</template>

<script></script>

<style>
/* 搜索框 */
.top{
		/* background-color: #007AFF; */
		height: 90rpx;
		border-bottom: 1rpx solid #EBEBEB;
		/* box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx; */
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
	margin-bottom: auto; 
	width: auto;
	height: auto;
}
.bt {
	/* margin-top: 1045rpx; */
}

.zt1 {
	color: #f0ad4e;
	font-size: 28rpx;
	margin-left: 30rpx;
	/* line-height: center; */
	/* margin-top: 25rpx; */
}
.zt {
	border-bottom: 1rpx solid #EBEBEB;
	/* margin-top: -5rpx; */
	height: 60rpx;
	color: #bbbbbb;
}
.midone {
	display: flex;
	/* width: 100%; */
	height: 210rpx;
	font-size: 30rpx;
	margin-top: 35rpx;
	/* align-items: center; */
	/* background-color: #00BFFF; */
	border-bottom: 1rpx solid #EBEBEB;
}
.zhengti {
	margin-left: 30rpx;
	width: 125rpx;
	height: 170rpx;
	/* background-color: #0066CC; */
}
.xq{
	margin-left: 40rpx;
	height: 180rpx;
	width: 500rpx;
}
.midwz {
	font-size: 28rpx;
}
.s1 {
	font-size: 20rpx;
	height: 35rpx;
	/* margin-top: -120rpx; */
	align-items: center;
	/* margin-left: 190rpx; */
	color: #999999;
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

.s7 {
	height: 35rpx;
	align-items: center;
	width: auto;
}

.s8 {
	margin-top: 20rpx;
	margin-left: 380rpx;
}

.btn1 {
	color: #f8f8f8;
	width: 137rpx;
	height: 55rpx;
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
</style>
