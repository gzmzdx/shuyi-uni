<template>
	<view class="all">
		<!-- 头部 -->
		<view class="topall">
			<view class="top">
				<view class="topt"><text>添加标签</text></view>
				<view class="topSt"><text>贴上标签，让书易更懂你。</text></view>
			</view>
			<!-- 添加 -->
			<view class="wc"><text>完成</text></view>
		</view>
		<!-- 中间 -->
		<!-- <view class="mid">
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
		</view> -->
		<view class="mid">
			<view v-for="(i,index) in info" :kye=index class="tag1">
				 <u-tag :text="i.content" @click="tagClick" :border-color="color[index]"  :bgColor="bg" :color="color[index]"/>
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
			data() {
				return {
					bg:"#ffffff", //标签背景颜色
					i:1, 
					info:[],
					color:[
						"#00ff00",
						"#aaaaff",
						"#ff557f",
						"#00ffff",
						"#00ff00",
						"#55aaff",
						"#ff00ff",
						"#aaff00",
						"#00ff00",
						"#55ffff",
						"#ffaa7f",
						"#aaffff"
					]
				}
			},
			
			onLoad() {
				uni.request({
					url:getApp().globalData.URL+'api/tag',
					method:'GET',
					header: {
						 'content-type': 'application/json;charset=UTF-8' // 默认值
					   },
					success:res =>{
						console.log("分页后台传来的",res.data.content)
						this.info = res.data.content
						},
					fail: (res) => {
						// showModal(){
						// 	 uni.showToast({
						// 		title: "网络错误！",
						// 		icon: 'none'
						// 	 })
						// },
					}
				})
			},
			methods: {
				//点击标签切换标签颜色
				tagClick(index) {
					this.i = this.i+1
					if(this.i %2==0){
						this.bg = "#c8c8c8"
					}else{
						this.bg = "#ffffff";
					}
				}
			}
		}
</script>

<style lang="scss" scoped>
.tag {
	border: solid 0.2px;
	border-radius: 5px;
}
.all {
	width: 100vw;
	height: 100vh;
	background-color: #fafafa;
}
/* 头部 */
.topall {
	height: 130rpx;
	border-bottom: 1rpx solid #f4f5f6;
	display: flex;
}
.top {
	/* display: flex; */
}
.topt {
	margin-top: 20rpx;
	margin-left: 30rpx;
	font-size: 46rpx;
}
.topSt {
	margin-left: 30rpx;
	margin-top: 10rpx;
	color: #666666;
	font-size: 25rpx;
}
.wc {
	font-size: 32rpx;
	margin-left: 300rpx;
	margin-top: 30rpx;
}
/* 中间内容 */
.mid {
	margin: 20rpx 10rpx;
	display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content: flex-start
}
.mid view{
	padding: 7rpx;
}
.biankuan {
}
.bq {
	/* height: 500rpx; */
	/* border: #E3E3E3 1rpx solid; */
	/* text-align: center; */
	/* align-items: center; */
	/* border-radius: 10rpx;
	margin: 30rpx 10rpx;
	font-size: 32rpx;
	color: #00BFFF;
	background-color: #FFFFFF; */
}
</style>
