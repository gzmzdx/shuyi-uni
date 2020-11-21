<template>
	<view>
		<!-- 头部 -->
		<view class="topall">
			<view class="top">
			<view class="topt">
				<text>我的标签</text>
			</view>
			<view class="topSt">
				<text>贴上标签，让书易更了解你。</text>
			</view>	
			</view>
			<!-- 添加 -->
			<navigator url="readLabelNew">
			<view class="TJ">
				<text>添加</text>
			</view>
			</navigator>
		</view>
		<!-- 中间标签内容 -->
		<view class="mid">
			<view class="midone">
				<view class="midone_nameS">
					<text>xxx文学</text>
				</view>
			</view>
			<view class="midone">
				<view class="midone_nameO">
					<text>文学</text>
				</view>
			</view>
			<view class="midone">
				<view class="midone_nameT">
					<text>文学</text>
				</view>
			</view>
			<view class="midone">
				<view class="midone_nameS">
					<text>语言文学</text>
				</view>
			</view>
			<view class="midone">
				<view class="midone_nameO">
					<text>文学</text>
				</view>
			</view>
			<view class="midone">
				<view class="midone_nameT">
					<text>物理网络文学</text>
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
.topall{
	height: 130rpx;
	border-bottom: 1rpx solid #F4F5F6;
	display: flex;
}
.top{
	/* display: flex; */
}
.topt{
	margin-left: 30rpx;
	margin-top: 30rpx;
	}
.topSt{
	margin-left: 30rpx;
	margin-top: 10rpx;
	color: #666666;
	font-size: 20rpx;
}
.TJ{
	font-size: 32rpx;
	margin-left: 330rpx;
	margin-top: 30rpx;
}
.midone{
	height: 80rpx;
	border-bottom: 1rpx solid #EDEDED;
	
}
.midone_nameO{
	color: #F0AD4E;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_nameT{
	color: #4CD964;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_nameS{
	color: #00BFFF;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
</style>
