<template>
	<view class="show">
		<!-- 顶部 -->
		
		<!-- 顶部 -->
		<view class="mid" style=" background-color: #F8F8F8;  opacity:1;">
			<view class="zt">
				<view class="zt1">
					订单编号：
				</view>
				<view style="color: #808080;">156487912</view>
			</view>
			<!-- 分割线br -->
			<view class="br"></view>
			<view class="midone">
				<view class="">
					<image class="imag" src="../../static/images/ap.jpg" style="width: 206rpx; height: 258rpx;"></image>
				</view>
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
				<view class="dt">
					<view>承运快递：</view>
					<view style="color: #808080;">
						顺丰速运
					</view>
				</view>
			</view>
			<!-- 分割线br -->
			<view class="br"></view>
		</view>
		
		
		
		
	</view>
</template>

<script></script>

<style>
	
.book-name{
	font-size: 36rpx;
	margin-top: -80rpx;
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

/* #ifdef MP-WEIXIN */
.imag{
	margin-left:30rpx;
	margin-top: 1rpx;
}
/* #endif */
/* #ifndef MP-WEIXIN */
.imag{
	margin-left:30rpx;
}
/* #endif */
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
