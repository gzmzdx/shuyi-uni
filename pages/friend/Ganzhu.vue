<template name="Logistic">
	<view>
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :use-slot="true">
					<text class="anchor-text">{{item}}</text>
				</u-index-anchor>
				<view class="list-cell" v-for="(item1,index) in user.filter(u=>u.username.startsWith(item))" :key="index">
					<u-avatar :src="item1.url"></u-avatar>
					{{item1.username}}
				</view>
			</view>
		</u-index-list>
	</view>
</template>
<script>
export default {
		props:{
			user:{
				type: Array,
				default:()=>[]
			}
		},
		data() {
			return {
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z", "#"
				]
			}
		},
		onPageScroll(e) {
			console.log(111)
			this.scrollTop = e.scrollTop;
		},
		methods:{
		}
	}
</script>
<style lang="scss" scoped>
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
