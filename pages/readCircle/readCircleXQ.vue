<template>
	<view>
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
		
		<view v-if="currentId===1">
			<Orders></Orders>
		</view>
		<!--预约-->
		
		
		<!--交易-->
		<view v-else>
			<Trade></Trade>
		</view>
		<!--物流配送-->
	</view>
</template>

<script>
	import Orders from '../readCirclepage/CircleXQRight.vue'
	import Trade  from '../readCirclepage/CircleXQLife.vue'
	export default {
		data() {
			return {
				currentId:'',/* 控制被选中 */
				brands:[
					'信息',
					'成员',
				]
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
.scroll-container {
    // box-sizing: border-box;
    padding-left: 30upx;
    white-space: nowrap;
    height: 90upx;
    background: #fff;
	border-top: 15upx solid #EEEEEE;
    border-bottom: 15upx solid #EEEEEE;
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
</style>
