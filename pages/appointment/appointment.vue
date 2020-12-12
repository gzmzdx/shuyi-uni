<template>
	<view class="show">
		<!-- 顶部 -->
		
		<!-- 顶部 -->
		<view class="mid" >
			<view class="zt" style=" background-color: #F8F8F8;  opacity:1;">
				<view class="zt1">
					线下物流配送中
				</view>
				<!-- <view style="color: #808080;">156487912</view> -->
			</view>
			
			<view class="midone">
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx;"></image>
				</view>
				<view>

					<view class="book-name">大数据与机器学习</view>

					<view class="s1">预约时间：
						<view class="s6">2018-08-20</view>
					</view>
					<view class="s2">持书人：
						<view class="">省中山图书馆</view>
					</view>
					<view class="s7">
						<view class="s4">应还时间：无
							<!-- <view class="">无</view> -->
						</view>
					</view>
					<view class="s2">当前状态：
						<view class="">线下交易中，物流配送中</view>
					</view>
					<view class="btns">
						<view class="one">
							<view  style="margin-left: 10rpx; margin-top: 5rpx;">联系持有人</view>
						</view>
						<view class="two">
							<view  style="margin-left: 20rpx; margin-top: 5rpx;">确认收货</view>
						</view>
						<view class="three">

							<navigator url="./logistics">
							<view  style="margin-left: 20rpx; margin-top: 5rpx;">查看物流</view>
							</navigator>

						</view>
					</view>
				</view>
			</view>
			
			<!-- 分割线br -->
			<view class="br"></view>
			
			
			<view class="midone">
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx;"></image>
				</view>
				<view>
					<view class="book-name">书的名字</view>
					<view class="s1">预约时间：
						<view class="s6">2018-08-20</view>
					</view>
					<view class="s2">持书人：
						<view class="">省中山图书馆</view>
					</view>
					<view class="s7">
						<view class="s4">应还时间：无
							<!-- <view class="">无</view> -->
						</view>
					</view>
					<view class="s2">当前状态：
						<view class="">线下交易中，物流配送中</view>
					</view>
					<view class="btns">
						<view class="one">
							<view  style="margin-left: 10rpx; margin-top: 5rpx;">联系持有人</view>
						</view>
						<view class="two1">
							<view  style="margin-left: 20rpx; margin-top: 5rpx;">确认收货</view>
						</view>
						<view class="three">
							<view  style="margin-left: 20rpx; margin-top: 5rpx;">查看物流</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 线上预约中 -->
			<view class="zt" style=" background-color: #F8F8F8;  opacity:1;">
				<view class="zt1">
					线上预约中
				</view>
				<!-- <view style="color: #808080;">156487912</view> -->
			</view>
			<view class="midone">
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx;"></image>
				</view>
				<view>
					<view class="book-name">书的名字</view>
					<view class="s1">预约时间：
						<view class="s6">2018-08-20</view>
					</view>
					<view class="s2">持书人：
						<view class="">省中山图书馆</view>
					</view>
					<view class="s7">
						<view class="s4">应还时间：无
							<!-- <view class="">无</view> -->
						</view>
					</view>
					<view class="s2">当前状态：
						<view class="">线下交易中，物流配送中</view>
					</view>
					<view class="btns">
						<view class="one">
							<view  style="margin-left: 20rpx; margin-top: 5rpx;">取消预约</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 分割线br -->
			<view class="br"></view>
			
		</view>
	</view>
</template>
<!-- <script></script> -->

<style>
	
.book-name{
	font-size: 36rpx;
	margin-top: -20rpx;
	color: #333333;
}	
	
.br {
		margin-top: 10rpx;
		/* width: 100%; */
		height: 1rpx;
		background-color: #EEEEEE;
	}
.show{
	/* margin-bottom: auto; */
	width: auto;
	height: auto;
	/* background-color: #F8F8F8; */
}
.mid {	
	/* margin-top:20rpx; */
	width: 100%;
	height: 480rpx;
}
.zt1{
	color: #555555;
	font-size: 26rpx;
	margin-left: 30rpx;
	line-height: center;
	color: #646464;
}
.zt{
	height: 70rpx;
	display: flex;
	align-items: center;
	
}
.midone {
	width: 90%;
	height: 300rpx;
	font-size: 30rpx;
	margin-top: 20rpx;
	align-items: center;
	display: flex;
}

.imag{
	margin-left:30rpx;
}

.s1{
	font-size: 24rpx;
	margin-top: 5rpx;
	height:35rpx;
	align-items: center;
	color: #999999;
	display: flex;
}
.s2{
	font-size: 24rpx;
	height:35rpx;
	margin-top: 5rpx;
	align-items: center;
	color: #999999;
	display: flex;
}
.btns{
	font-size: 24rpx;
	height:35rpx;
	margin-top: 20rpx;
	align-items: center;
	color: #999999;
	display: flex;
	
}
.one{
	background-color: #EBEBEB;
	height: 45rpx;
	width: 140rpx;
	border-radius: 22rpx;
	opacity:1;
}
.two{
	background-color: #5E49F5;
	color: #FFFFFF;
	height: 45rpx;
	width: 140rpx;
	margin-left: 20rpx;
	border-radius: 22rpx;
	opacity:1;
}

.two1{
	background-color: #EBEBEB;
	/* color: #FFFFFF; */
	height: 45rpx;
	width: 140rpx;
	margin-left: 20rpx;
	border-radius: 22rpx;
	opacity:100%;
}

.three{
	background-color: #EBEBEB;
	height: 45rpx;
	width: 140rpx;
	margin-left: 20rpx;
	border-radius: 22rpx;
	opacity:1;
}

.s4{
	font-size: 24rpx;
	height:35rpx;
	margin-top: 5rpx;
	align-items: center;
	color: #999999;
}

.s6{
	color: #999999;
	
}

.s7{
	height:35rpx;
	align-items: center;
	width: auto;
	display: flex;
}

.s8{
	
	display: flex;
}
.dt{
	margin-top: 20rpx;
	margin-left: 30rpx;
	font-size: 26rpx;
	color: #555555;
	margin-bottom: 20rpx;
	display: flex;
}
.ti{
	color: #999999;
	margin-top: 30rpx;
	font-size: 23rpx;
	margin-left: 230rpx;
}



.wz{
	font-size: 28rpx;
	margin-top: 8rpx;
	height: 90rpx;
	
}
.shumu {
	font-size: 25rpx;
	margin-top: -130rpx;
	color:   #999999;
	width: 120rpx;
	display: block;
}
.shumuone{
	font-size: 25rpx;
	color: #999999;
	/* background-color: #4CD964; */
}
.shumutwo{
	margin-left: 250rpx;
	font-size: 20rpx;
	color:  #999999;
	margin-top: -30rpx;
}
.shumuthree{
	margin-top: 10rpx;
	font-size: 25rpx;
	color: #999999;
}

</style>
