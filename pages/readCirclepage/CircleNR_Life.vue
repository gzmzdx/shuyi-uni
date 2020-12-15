<template name="Logistic">
	<view>
		<view class="underL">
			<!-- 第一条心得 -->
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="Ttitle">
							<view class="Ntitle">
								<view class="name">爱丽丝</view>
								<view class="dj">
								<view class="vip">LV.11</view>	
								</view>
							</view>
							<view class="time">2020-08-09 14:10</view>	
						</view>
						</view>
					<navigator url="./readExperience">
					<view class="zy">
						<text>
							《预见未来》哈哈哈哈哈哈哈哈哈hhhhhhhhh哈哈哈哈哈哈哈哈哈哈哈灌灌灌帆帆帆帆烦烦烦哈哈哈哈哈哈哈哈哈哈后哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好好...
						</text>
					</view>
					<view class="tab">
						<view class="imgs">
							<image class="img" src="../../static/images/书1.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书3.jpg" style="width: 220rpx; height: 240rpx;"></image>
							<image class="img" src="../../static/images/书2.jpg" style="width: 220rpx; height: 240rpx;"></image>
						</view>
					</view>
					</navigator>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<!-- 第二条心得 -->
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="Ttitle">
							<view class="Ntitle">
								<view class="name">爱丽丝爱吃鱼</view>
								<view class="dj">
								<view class="vip">LV.11</view>	
								</view>
							</view>
							<view class="time">2020-08-09 14:10</view>	
						</view>
						</view>
					<view class="zy"><text>《来》今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text></view>
					<view class="book">
						<view class="bookone"><image class="booktp" src="../../static/images/书2.jpg" style="width: 130rpx; height: 180rpx;"></image></view>
						<view class="bookn"><text class="bookname">最强帝国副瑞士</text></view>
						<view class="zzn"><text class="zzname">雷迪</text></view>
					</view>
				</view>
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
					</view>
				</view>
			</view>
			<view class="show">
				<view class="showone">
					<view class="person">
						<view class="tou">
							<image src="../../static/images/头像2.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view class="Ttitle">
							<view class="Ntitle">
								<view class="name">爱丽丝爱吃鱼</view>
								<view class="dj">
								<view class="vip">LV.11</view>	
								</view>
							</view>
							<view class="time">2020-08-09 14:10</view>	
						</view>
						</view>
					<view class="zy"><text>今 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</text></view>
				</view>
		
				<view class="showtwo">
					<view class="dz">
						<image class="wave" src="../../static/images/zan.png"></image>
						<text id="t">9999</text>
					</view>
					<view class="pl">
						<image class="wave" src="../../static/images/pinglun.png" style="width: 38rpx;height: 36rpx;"></image>
						<text id="t">1.3w</text>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/* 中间 */
.underL {
	line-height: 150rpx;
	/* 设置行高*/
}

.show {
	height: auto;
	margin-top: 40rpx;
	color: #f1f1f1;
	/* background-color: #000000; */
}

.showone {
	/* color: #999999; */
	height: auto;
	margin-top: 10rpx;
	border-radius: 50rpx;
	/* background-color: #0066CC; */
}

.person {
	line-height: 20rpx;
	display: flex;
	height: 100rpx;
}
.tou{
	margin-top: 0rpx;
	margin-left: 20rpx;
}
.Ttitle{
	height: 50rpx;
}
.Ntitle{
	display: flex;
	}
.name {
	height: 30rpx;
	color: #00aaff;
	margin-top: 20rpx;
	font-size: 30rpx;
	margin-left: 20rpx;
}
.dj{
	color: #f0ad4e;
	font-size: 25rpx;
	border-radius: 10rpx;
	border: 1rpx solid #f0ad4e;
	height: 35rpx;
	margin-top: 12rpx;
	width: 80rpx;
	margin-left: 10rpx;
}
.vip {
	margin-top: 6rpx;
	text-align: center;
}
.bn {
	height: 100%;
	margin-top: 0rpx;
}
.time {
	font-size: 20rpx;
	margin-top: 10rpx;
	margin-left: 18rpx;
	color: #C0C0C0;
	/* background-color: #4CD964; */
}

.zy {
	margin-top: 10rpx;
	line-height: 40rpx;
	margin-left: 25rpx;
	margin-right: 20rpx;
	font-size: 28rpx;
	font-weight: 300rpx;
	color: #555555;
}
.tab {
	height: 250rpx;
	/* background-color: #000000; */
	margin: 10rpx 10rpx;
}
.book {
	height: 240rpx;
	margin: 20rpx 30rpx;
	/* background-color: #007AFF; */
	box-shadow: #f1f1f1 0rpx 0rpx 10rpx 5rpx;
	border-radius: 8rpx;
}
.booktp {
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.bookn {
	margin-top: -260rpx;
	margin-left: 200rpx;
	font-size: 40rpx;
	color: #333333;
}
.zzn {
	font-size: 32rpx;
	color: #333333;
	margin-top: -100rpx;
	margin-left: 200rpx;
}
.imgs {
	display: flex;
	width: 95%;
	margin-left: 20rpx;
	margin-top: 10rpx;
}
.img {
	size: 100%;
	margin: 10rpx 12rpx;
}

.showtwo {
	display: flex;
	background-color: #ffffff;
	border-top: none;
	height: 80rpx;
	align-items: center;
	box-shadow: #f1f1f1 0rpx 8rpx 0rpx 8rpx;
}

.wave {
	z-index: 3;
	right: 0;
	bottom: 0;
	opacity: 0.725;
	height: 40rpx;
	width: 40rpx;
	padding-top: 10rpx;
	margin-top: 50rpx;
	/* animation: wave 10s linear infinite; */
}

.dz {
	margin-left: 450rpx;
	display: flex;
}

.pl {
	margin-left: 80rpx;
	display: flex;
}
#t {
	font-size: 25rpx;
	color: #bbbbbb;
	margin-left: 5rpx;
	margin-top: 10rpx;
}
</style>
