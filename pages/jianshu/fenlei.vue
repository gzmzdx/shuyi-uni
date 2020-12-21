<template>
	<view>
		<view class="fenl" mode="aspectFill" @click="ShowHidden=!ShowHidden">
			<image class="im" src="../../static/images/分类.png" style="width: 45rpx; height: 45rpx;"></image>
			<!-- <view class="tit1">分类</view> -->
		</view>
		<!-- 弹出下拉筛选框 -->
		<view class="Array" v-if="ShowHidden">
			<view class="ty">
				<view :class="['type',type==1&&'type_active']" mode="aspectFill" @click="type=1">通俗分类</view>
				<view :class="['type',type==2&&'type_active']" mode="aspectFill" @click="type=2">中图法分类</view>
			</view>
			<view class="d4"></view>
			<view class="side">

				<nav class="nav1" v-if="type==1">
					<ul>
						<li>小说作品</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>品质生活</li>
						<view class="liBottomBorder"></view>
						<li>两性情感</li>
						<view class="liBottomBorder"></view>
						<li>人文社科</li>
						<view class="liBottomBorder"></view>
						<li>成功励志</li>
						<view class="liBottomBorder"></view>
						<li>经济管理</li>
						<view class="liBottomBorder"></view>
						<li>文学作品</li>
						<view class="liBottomBorder"></view>
						<li>文化艺术</li>
						<view class="liBottomBorder"></view>
						<li>自然科学</li>
						<view class="liBottomBorder"></view>
						<li>亲子少儿</li>
						<view class="liBottomBorder"></view>
						<li>计算机</li>
						<view class="liBottomBorder"></view>
						<li>培训考试</li>
					</ul>
				</nav>
				<nav class="nav2" v-else="type==2">
					<ul>
						<li>A 马克思主义</li>
						<view class="liBottomBorder"></view>
						<li>B 人文社科</li>
						<view class="liBottomBorder"></view>
						<li>C 社会科学总论</li>
						<view class="liBottomBorder"></view>
						<li>D 政治.法制</li>
						<view class="liBottomBorder"></view>
						<li>E 军事</li>
						<view class="liBottomBorder"></view>
						<li>F 经济</li>
						<view class="liBottomBorder"></view>
						<li>G 文化.科学.教育.体育</li>
						<view class="liBottomBorder"></view>
						<li>H 语言.文学</li>
						<view class="liBottomBorder"></view>
						<li>I 文学</li>
						<view class="liBottomBorder"></view>
						<li>J 艺术</li>
						<view class="liBottomBorder"></view>
						<li>K 历史</li>
						<view class="liBottomBorder"></view>
						<li>N 自然科学总论</li>
						<view class="liBottomBorder"></view>
						<li>O 数理科学与化学</li>
						<view class="liBottomBorder"></view>
						<li>P 天文学.地球科学</li>
						<view class="liBottomBorder"></view>
						<li>Q 生物科学</li>
						<view class="liBottomBorder"></view>
						<li>R 医药.卫生</li>
						<view class="liBottomBorder"></view>
						<li>S 农业科学</li>
					</ul>
				</nav>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ShowHidden: false,
				type: 1,
			}
		},
		methods: {
			//点击页面事件，隐藏需要隐藏的区域
			HiddenClick() {
				this.ShowHidden = false
				this.type = 1
			},
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.ty {
		display: flex;
	}

	.type {
		text-align: center;
		padding: 25rpx;
		width: 250rpx;
		height: 100rpx;
		background-color: #555555;
		font-size: 34rpx;
		&_active{
			color:#636363;
			background-color: #FFFFFF;
		}
	}

	.Array {
		width: 440rpx;
		position: absolute;
		// height: 100%;
		background-color: #F8F8F8;
		right: 0rpx;
		// margin-top: 20rpx;
		z-index: 99;
	}

	.side {
		width: 350rpx;
		line-height: 75rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	
	}

	.liBottomBorder {
		/* border-bottom: 1rpx solid #007AFF; */
		border: 1rpx solid #C8C7CC;
		margin-top: 20rpx;
	}

	.d4 {
		width: 0rpx;
		height: 0rpx;
		margin-left: 150rpx;
		margin-top: -20rpx;
		border-width: 20rpx;
		border-color: transparent #007AFF transparent transparent;
		transform: rotate(90deg);
	}

	.im{
			margin-top: 10rpx;
			width: 60rpx;
			height: 60rpx;
			margin-left: 40rpx;
		}

	.tit1 {
		margin-top: 15rpx;
		color: #808080;
		margin-left: 10rpx;
		font-size: 36rpx;
	}

	.fenl {
		display: flex;
	}
</style>
