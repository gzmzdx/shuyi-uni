<template>
	<view>
	<view class="top">
		<view class="topone">
			<navigator url="readCircleXQ">
			<image src="../../static/images/after.jpg" style="width: 120rpx; height: 120rpx;border-radius: 10rpx;"></image>
			</navigator>
			<view class="wz">
				<view class="biaoti">
					三味书屋
				</view>
				<view class="xbiaoti">
					<span>成员 2000</span>
					<span>圈文2.9w</span>
				</view>
			</view>
		</view>
		<button class="bt" @click="cl">退出</button>
	</view>	
	<view class="mid">
				<view class="container">
					<scroll-view 
					class="scroll-container" 
					scroll-x 
					scroll-with-animation 
					v-if="brands.length > 1" 
					:scroll-into-view="'s' + currentIndex">
						<view :class="['scroll-item', { active: index == currentId }]" 
						:id="'s' + index" 
						v-for="(item, index) in brands"
						:key="index" 
						@tap="handleScroll(index)">
						{{ item }}
							<view class="bottom-border" v-if="index == currentId">
								<!-- 底部蓝色短border -->
							</view>
						</view>
					</scroll-view>
				</view>
				
				<!--圈文-->
				<view v-if="currentId===1">
					<Orders></Orders>
				</view>
				<!-- 公告-->
				<view v-else>
					<Logistic></Logistic>
				</view>	
			</view>
	<!-- 发布 -->
	<navigator url="../index/publish">
	<button class="btn" style="background-color: #6C40F3;"><image class="btnima" src="../../static/images/添加.icon.png" style="width: 50rpx;height: 50rpx;"></image></button>
	</navigator>
	</view>
</template>

<script>
	import Logistic from '../readCirclepage/CircleNR_Life.vue'
	import Orders from '../readCirclepage/CircleNR_Right.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'圈文',
					'公告',
				]
			};
		},

		onLoad: function() {},
		components: {
			// Fail,
			Orders,
			// Trade,
			Logistic,
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")        
		},
		methods: {
			handleScroll(index) {
				this.currentId = index;
				console.log(this.currentId)
			},
			cl(){
				uni.showModal({
					title:'提示',
					content:'是否退出该圈子',
					success:function (res) {
						if(res.confirm){
							console.log('确认');
						}
						else if (res.cancel){
							console.log('取消');
						}
					}
				});
			}
		},
	}

</script>

<style lang="scss" scoped>
	/* 顶部内容 */
.top{
}
.topone{
	margin-left: 30rpx;
	margin-top: 40rpx;
	display: flex;
}
.wz{
	margin-top: 15rpx;
}
.biaoti{
	margin-left: 20rpx;
	font-size: 32rpx;
}
.xbiaoti span{
	color: #333333;
	margin-left: 20rpx;
	font-size: 25rpx;
}
.bt{
	width: 120rpx;
	border-radius: 45rpx;
	color: #ffffff;
	font-size: 22rpx;
	/* margin-left: 200rpx; */
	margin-right: 30rpx;
	margin-top: -90rpx;
	background-color: #00BFFF;
}
.mid{
	// background-color: ;
	margin-top: 50rpx;
}
// tab切换
.scroll-container {
    // box-sizing: border-box;
    padding-left: 30upx;
    white-space: nowrap;
    height: 90upx;
    background: #fff;
	border-top: 0upx solid #EEEEEE;
    border-bottom: 5upx solid #EEEEEE;
    .scroll-item {
      text-align: center;
      display: inline-block;
      padding: 0 145upx;
      line-height: 70upx;
      font-size: 32upx;
      font-weight: 400;
      color: #1e1e1e;

      &.active {
        display: inline-block;
        font-weight: bold;
        color: #00BFFF;
        font-size: 32upx;
      }
    }

    .bottom-border {
      margin: 0 auto;
      width: 55upx;
      height: 5upx;
	  background: #00BFFF;
      border-radius: 5upx;
	  border: 1upx;
    }
  }
  // 发布
  .btn{
  	background-color: #5251F5;
  	position:fixed;
  	bottom: 10rpx;
	margin-left: 640rpx;
  	width:100rpx;
	height: 100rpx;
  	border-radius: 100%;
  }
 .btnima{
	 margin-left: -4rpx;
	 margin-top: 25rpx;
 } 
</style>
