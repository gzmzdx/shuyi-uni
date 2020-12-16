<template>
	<view>
			<view class="tq"></view>
		<view class="container">
			<view class="top">
				<view class="tab" style="width: 100%; height: 90rpx;">
					<navigator url="friends_rank">
					<image @click="back" class="back" src="../../static/images/通讯录.排行.icon.png" style="width: 70rpx; height: 70rpx;"></image>
					</navigator>
					<view class="tit2"><scroll-view 
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
					</view>
					<!-- 底部蓝色短border -->
				</view>
			</scroll-view></view>
					<navigator url="./friendSearch">
					<image class="shua1" src="../../static/images/Fsearch.png" style="width: 45rpx; height: 45rpx;"></image>
					</navigator>
					<!-- <navigator url="../myinfomation/myinfomation">
					<image class="shua1" src="../../static/images/通讯录.编辑.icon.png" style="width: 40rpx; height: 40rpx;"></image>
					</navigator> -->
				</view>
			
			</view>
			
				<!-- <view v-if="currentId===1">
					<Orders></Orders>
				</view>
				<view v-else>
					<Trade></Trade>
				</view> -->
			<Trade :user="currentId===1?user1:user2"></Trade>
		</view>
	</view>
</template>
<script>
	import Orders from '../friend/hayou.vue'
	import Trade  from '../friend/Ganzhu.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'关注',
					'好友',
				],
				currentIndex:1,
				user1:[{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"张三"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"1"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"2"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"3"
				},{
					url:"com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"4"
				}],
				user2:[{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"0"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"1"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"2"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"D"
				},{
					url:"com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"Agjygjy"
				}]
			};
		},

		onLoad: function() {},
		components: {
			// Fail,
			Orders,
			Trade,
			// Logistic,
		},
		onNavigationBarButtonTap(e) {
		    console.log("success")        
		},
		methods: {
			handleScroll(index) {
				this.currentId = index;
				console.log(this.currentId)
			},
		},
	}

</script>
<style lang="scss" scoped>
	.tq{
			height: 80rpx;
			background-color:#6C40F3;
		}
	.tab {
			display: flex;
			background-color:#6C40F3;
		}
	.tit2 {
			margin-top: 20rpx;
			// color:#FFFFFF ;
			text-align: center;
			margin-left: 55rpx;
			/* display: flex; */
			// font-size: 40rpx;
			width: 65%;
		
		}
		.back {
			margin-top: 15rpx;
			margin-left: 10rpx;
		}
		.shua1 {
			margin-top: 28rpx;
			margin-left: 55rpx;
	
		}
	
.top{
	height: 95rpx;
	background-color:#6C40F3;
	text-align: center;
}
.scroll-container {
    // box-sizing: border-box;
	// text-align: center;
    // padding-left: 300upx;
	margin-left: 120rpx;
    // white-space: nowrap;
	// background-color: #18B566;
    height: 50upx;
    background: #fff;
	border-radius: 70rpx;
	width: 265rpx;
	border: #FFFFFF 5rpx solid;
	// border-top: 15upx solid #EEEEEE;
    // border-bottom: 15upx solid #EEEEEE;
    .scroll-item {
      text-align: center;
      display: inline-block;
      padding: 0rpx 30upx;
	  // margin-left: 50rpx;
      line-height: 60rpx;
      font-size: 32upx;
      font-weight: 90;
	  // border: #000000 5rpx solid;
	  // background-color: #007AFF;
	  // border-radius: 5rpx;
      // color: #1e1e1e;

      &.active {
        display: inline-block;
        font-weight: bold;
        color: #FFFFFF;
		width: 140rpx;
		height: 50rpx;
		border-radius: 50rpx;
		background-color: #6C40F3;
        font-size: 32upx;
      }
    }

    .bottom-border {
      margin: 0 auto;
      width: 50upx;
      height: 5upx;
	  // background-color: #007AFF;
	  // background: #00BFFF;
      // border-radius: 5upx;
	  // border: 1upx;
    }
  }
  
</style>