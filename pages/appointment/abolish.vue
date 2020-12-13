<template>
	<view class="show">
		<!-- 顶部 -->
		
		<!-- 顶部 -->
		<view class="mid" style="  opacity:1;">
			<view class="midone">
				<!-- #ifndef MP-WEIXIN -->
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx;"></image>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx; margin-top: 15rpx;"></image>
				</view>
				<!-- #endif -->
				<view>
					<view class="book-name">书的名字</view>
					<view class="s1">作者：
						<view class="s6">汪魏青</view>
					</view>
					<view class="s2">出版社：浙江大学出版社</view>
					<view class="s7">
						<view class="s4">广东省立中山图书馆馆藏，广东中山图书馆
						</view>
					</view>
				</view>
			</view>
			
			<view class="s8">
				<!-- 分割线br -->
				<view class="br"></view>
				<view class="dt">
					<view class="tishi">温馨提示：</view>
					<view class="texts">
						进入到线下交易环节的订单将不能取消预约。取消预约将影响您在“书易”的信誉
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<view>
			<button class="confirm-btn" style="margin-top: 600rpx;">确定取消</button>
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<view>
			<button class="confirm-btn">确定取消</button>
		</view>
		<!-- #endif -->
		
		
		
	</view>
</template>

<script></script>

<style>
	
.confirm-btn{
	margin-top: 270rpx;
	color: #FFFFFF;
	background-color: #5E49F5;
	height: 90rpx;
	border-radius: 0;
}
.book-name{
	font-size: 36rpx;
	margin-top: -80rpx;
	color: #333333;
}	
	
.br {
		/* margin-top: 10rpx; */
		/* width: 100%; */
		height: 1rpx;
		background-color: #FF8726;
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
	/* margin-top: 20rpx; */
}
.zt{
	height: 50rpx;
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
	font-size: 20rpx;
	margin-top: 5rpx;
	height:35rpx;
	align-items: center;
	color: #999999;
	display: flex;
}
.s2{
	font-size: 20rpx;
	height:35rpx;
	margin-top: 5rpx;
	align-items: center;
	color: #999999;
}
.s4{
	font-size: 20rpx;
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
	/* display: flex; */
}

.s8{
	background-color: #F7E7C5;
	height: 160rpx;
	opacity:30%;
	/* display: flex; */
}
.dt{
	margin-top: 20rpx;
	margin-left: 30rpx;
	font-size: 30rpx;
	
	
	/* margin-bottom: 20rpx; */
	/* display: flex; */
}

.tishi{
	margin-top: 10rpx;
	margin-left: 30rpx;
	font-size: 30rpx;
	color: #FF8726;
	margin-bottom: 20rpx;
	/* display: flex; */
}
.texts{
	/* margin-top: 20rpx; */
	margin-left: 30rpx;
	font-size: 24rpx;
	color: #FF8726;
	margin-bottom: 20rpx;
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
