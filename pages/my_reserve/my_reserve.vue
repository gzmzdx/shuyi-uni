<template>
	<view>
	<view class="top">
	<view class="header-input">
		<input @input="goToSearch" placeholder="输入书名查找" placeholderStyle="color:#BBBBBB" type="text"></input>
		<view>
			<image class="image" src="../../static/images/search_icon.png">
			</image>
		</view>
	</view>
	</view>
	
			
		<view class="show">
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
			
			<!--评论-->
			<view v-if="currentId===1">
				<Orders></Orders>
			</view>
			<!-- 点赞 -->
			<view v-else>
				<Logistic></Logistic>
			</view>	
		</view>
		
				
	
	
	
	</view>
</template>

<script>
	import Logistic from '../my_reserve_Spage/reserve_SpageL.vue'
	import Orders from '../my_reserve_Spage/reserve_SpageR.vue'
	// import Logistic from '../components/logistic.vue'
	// import Orders from '../components/orders.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'预约成功',
					'预约失败',
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
		},
	}

</script>

<style lang="scss" scoped>
	.top{
		/* background-color: #007AFF; */
		height: 90rpx;
		box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx;
	}
	.header-input {
	    margin-left: 28rpx;
	    margin-top: 20rpx;
	    width: 694rpx;
	    height: 66rpx;
	    border-radius: 36rpx;
	    background-color: rgba(255,255,255,255);
	    // border: 1rpx solid #E3E3E3;
	    display: flex;
	    flex-direction: row;
		box-shadow: #007AFF 1rpx 1rpx 5rpx 1rpx;
	} 
	.header-input input {
	    margin-left: 31rpx;
	    width: 564rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    /* border-right: 1rpx solid #dfdfdf; */
	    font-size: 28rpx;
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 20rpx;
	    margin-top: 11rpx;
	    width: 55rpx;
	    height: 55rpx;
	}
	// tab切换
	.scroll-container {
	    // box-sizing: border-box;
	    padding-left: 20upx;
	    white-space: nowrap;
	    height: 90upx;
	    background: #fff;
		border-top: 0upx solid #EEEEEE;
	    border-bottom: 10upx solid #EEEEEE;
	    .scroll-item {
	      text-align: center;
	      display: inline-block;
	      padding: 0 125upx;
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
</style>
