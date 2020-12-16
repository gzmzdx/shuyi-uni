<template>
	<view>
		<view class="tq"></view>
		<view class="container">
			<view class="top">
				<view class="tab" style="width: 100%; height: 90rpx;">
					<navigator url="friends_rank">
						<image @click="back" class="back" src="../../static/images/通讯录.排行.icon.png" style="width: 70rpx; height: 70rpx;"></image>
					</navigator>
					<view class="tit2">
						<scroll-view class="scroll-container" scroll-x scroll-with-animation v-if="brands.length > 1" :scroll-into-view="'s' + currentIndex">
							<view :class="['scroll-item', { active: index == currentId }]" :id="'s' + index" v-for="(item, index) in brands"
							 :key="index" @tap="handleScroll(index)">
								{{ item }}
								<view class="bottom-border" v-if="index == currentId">
								</view>
							</view>
						</scroll-view>
					</view>
					<navigator url="./friendSearch">
						<image class="shua1" src="../../static/images/Fsearch.png" style="width: 45rpx; height: 45rpx;"></image>
					</navigator>
				</view>
			</view>
		</view>
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :index="item" />
				<view class="list-cell"  v-for="(item1,index1) in (currentId===1?user1:user2).filter(u=>u.username.startsWith(item))"  :key="index1">
					<u-avatar :src="item1.url"></u-avatar>
					{{item1.username}}
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentId: '',
				/* 控制被选中 */
				brands: [
					'关注',
					'好友',
				],
				currentIndex: 1,
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
				],
				user1:[{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"VBDF"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"AAAA"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"ABBB"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"BAAA"
				},{
					url:"com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"BCCC"
				}],
				user2:[{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"ADDD"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"DDDS"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"ASD"
				},{
					url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"D"
				},{
					url:"com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2974706256,1511610652&fm=11&gp=0.jpg",
					username:"Agjygjy"
				}]
			}
		},
		methods: {
			handleScroll(index) {
				this.currentId = index;
				console.log(this.currentId)
			},
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.tq {
		height: 80rpx;
		background-color: #6C40F3;
	}

	.tab {
		display: flex;
		background-color: #6C40F3;
	}

	.tit2 {
		margin-top: 20rpx;
		text-align: center;
		margin-left: 55rpx;
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

	.top {
		height: 95rpx;
		background-color: #6C40F3;
		text-align: center;
	}

	.scroll-container {
		margin-left: 120rpx;
		height: 50upx;
		background: #fff;
		border-radius: 70rpx;
		width: 265rpx;
		border: #FFFFFF 5rpx solid;

		.scroll-item {
			text-align: center;
			display: inline-block;
			padding: 0rpx 30upx;
			line-height: 60rpx;
			font-size: 32upx;
			font-weight: 90;

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
		}
	}

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
