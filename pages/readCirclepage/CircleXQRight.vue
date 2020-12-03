<template name="Orders ">
	<view>
		
		<!-- 管理层 -->
			<view class="GLC">
				<view class="GLCname"><text>管理层(1)</text></view>
				<view class="GLCima">
					<view class="GLCone">
						<view class="GLY">
							<image class="circletp" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx; border-radius: 100%;"></image>
						<view class="qz">
							<image src="../../static/images/quanzhu.png" style="width: 70rpx;height: 70rpx;"></image>
						</view>
						<view class="name">黄蓉</view>
						</view>
					</view>
					
					
				</view>
			</view>
			<!-- 其他成员 -->
			<view class="CY">
				<view class="CYname"><text>其他成员(200)</text></view>
				<view class="cyuan">
					<navigator url="../privateSpace/privateSpace">
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
					</navigator>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
						</view>
						<view class="tr">
							<image class="ima" src="../../static/images/after.jpg" style="width: 120rpx;height: 120rpx;border-radius: 50%;"></image>
							<view class="mz">肖石榴</view>
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
// 成员
.GLCname{
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.GLCima {
	height: 220rpx;
	width: 100%;
	display: inline-flex;
	box-shadow: #F4F5F6 0rpx 18rpx 0rpx 0rpx;
}
.GLY {
	margin-left: 25rpx;
	height: 165rpx;
	display: flex;
	margin-top: 55rpx;
}
.qz{
	margin-top: 20rpx;
	margin-left: 5rpx;
}
.name {
	font-size: 35rpx;
	margin-top: 35rpx;
	align-items: center;
	margin-left: 0rpx;
}

.CYname{
	margin-top: 40rpx;
	margin-left: 20rpx;
}
.cyuan{
	margin-top: 20rpx;
}
.tr {
	height: 165rpx;
	// background-color: red;
	display: flex;
	border-bottom: 1rpx solid #F1F1F1;
	// align-items: center;
	// text-align: center;
}
.ima {
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.mz {
	font-size: 35rpx;
	margin-top: 55rpx;
	align-items: center;
	margin-left: 30rpx;
}
</style>
