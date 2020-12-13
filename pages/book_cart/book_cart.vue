<template>
	<!-- 商品列表 -->
	<view class="pd-20 goods-list">
		<view class="tis" v-if="goodsList.length==0">购物车是空的哦~</view>
		<view class="my-10 pd-20 row" v-for="(row, index) in goodsList" :key="index">
			<!-- 商品 -->
			<view class="top-firm-info">
				<view class="">
					<checkbox color="#8a17c6" :checked="row.selectedAll" @click="firmSelectedAll(index)" />
				</view>
				<!-- 图书馆名称 -->
				<view class="firm-box">
					<text class="firm-name">{{row.firmName}}</text>
					<cmd-icon type="chevron-right" size="14" color="#888"></cmd-icon>
				</view>
			</view>
			<!-- 企业商品列表 -->
			<view class="firm-goods-list" v-for="(goods, i) in row.goods">
				<view class="">
					<checkbox color="#8a17c6" :checked="goods.selected" @click="selectedSole(index, i)" />
				</view>
				<image class="goods-img" :src="goods.img"></image>
				<view class="right-goods-box">
					<view class="goods-name">{{goods.name}}</view>
					<view class="my-10 goods-spec"><text class="text">{{goods.spec}}</text></view>
					<view class="price-number-box">
						<view class="red-price">￥{{goods.price}}</view>
						<view class="number-box">
							<text class="number-sub" @click="sub(index,i)">-</text>
							<text class="number-num">{{goods.number}}</text>
							<text class="number-add" @click="add(index,i)">+</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 在其他端显示底部 -->
		<!-- #ifndef MP-WEIXIN -->
		<view style="width:100% ;height: 174rpx; background-color: #F2F2F2;"></view>
		<view class="footer1">
			<view class="check-box">
				<checkbox color="#8a17c6" :disabled="!goodsList.length" :checked="isSelectedAllRow" @click="selectedAllRow" />
			</view>
			<view class="goods-remove" v-if="selectedAllRowLength" @click="removeGoodsEvent">删除</view>
			<view class="right-box">
				<text class="total-cost">总价格<text class="red-price">￥{{sumPrice}}</text></text>
				<!-- <navigator url="../borrow/borrow"> -->
					<text class="account">确定借入<text v-if="selectedAllRowLength">({{selectedAllRowLength}})</text></text>
				<!-- </navigator> -->
			</view>
			
		</view>
		<!-- #endif -->
		
		
		<!-- 在微信小程序中显示 -->
		<!-- #ifndef H5 -->
		<!-- 脚部菜单 -->
		<view style="width:100% ;height: 26rpx; background-color: #F2F2F2;"></view>
		<view class="pd-20 footer">
			<view class="check-box">
				<checkbox color="#8a17c6" :disabled="!goodsList.length" :checked="isSelectedAllRow" @click="selectedAllRow" />
			</view>
			<view class="goods-remove" v-if="selectedAllRowLength" @click="removeGoodsEvent">删除</view>
			<view class="right-box">
				<text class="total-cost">总价格<text class="red-price">￥{{sumPrice}}</text></text>
				<!-- <navigator url="../borrow/borrow"> -->
					<text class="account">确定借入<text v-if="selectedAllRowLength">({{selectedAllRowLength}})</text></text>
				<!-- </navigator> -->
			</view>
		</view>
		<!-- <view style="width:100% ;height: 26rpx; background-color: #F2F2F2;"></view> -->
		<!-- #endif -->
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				goodsList: [
					{
						firmId: 101,
						firmName: '锦绣图书馆',
						selectedAll: false,
						goods: [
							{
								id: 1,
								img: '../../static/images/photo.gif',
								name: '冰与火之歌',
								spec: ' 《冰与火之歌》是美国作家乔治.马丁创作的长篇小说，该书以荒谬的风格...',
								price: 27.5,
								number: 1,
								selected: false
							}, {
								id: 2,
								img: '../../static/images/photo.gif',
								name: '冰与火之歌',
								spec: '《冰与火之歌》是美国作家乔治.马丁创作的长篇小说，该书以荒谬的风格...',
								price: 9.5,
								number: 2,
								selected: false
							}
						]
					}, {
						firmId: 102,
						firmName: 'GeekFun',
						selectedAll: false,
						goods: [
							{
								id: 3,
								img: '../../static/images/photo.gif',
								name: '冰与火之歌',
								spec: '《冰与火之歌》是美国作家乔治.马丁创作的长篇小说，该书以荒谬的风格...',
								price: 17.5,
								number: 1,
								selected: false
							}
						]
					}
				],
				isSelectedAllRow: false, // 全选所有商品
				selectedAllRowList: [],
				selectedAllRowLength: 0,
				sumPrice: '0.00' // 总价格
			}
		},
		methods: {
			sub(m,n){
				if(this.goodsList[m].goods[n].number <= 1){
					return
				}
				this.goodsList[m].goods[n].number--
				this.sumTotalPrice()
			},
			add(m,n) {
				this.goodsList[m].goods[n].number++
				this.sumTotalPrice()
			},
			// 选择单个商品 m 父  n 子
			selectedSole (m, n) {
				this.goodsList[m].goods[n].selected = !this.goodsList[m].goods[n].selected
				// 循环设置父全选 如果全部选中  则父全选选中 否则 不选中
				for (let i = 0; i < this.goodsList[m].goods.length; i++) {
					if(this.goodsList[m].goods[i].selected) {
						this.goodsList[m].selectedAll = true
					} else {
						this.goodsList[m].selectedAll = false
						break
					}
				}
				this.computeSelectedAll()
				this.sumTotalPrice()
			},
			// 全选企业所有商品
			firmSelectedAll (index) {
				this.goodsList[index].selectedAll = !this.goodsList[index].selectedAll
				for (let i = 0; i < this.goodsList[index].goods.length; i++) {
					this.goodsList[index].goods[i].selected = this.goodsList[index].selectedAll
				}
				this.computeSelectedAll()
				this.sumTotalPrice()
			},
			// 全选所有行
			selectedAllRow() {
				this.isSelectedAllRow = this.goodsList.length ? !this.isSelectedAllRow : false
				let len = this.goodsList.length
				for (let i = 0; i < len; i++) {
					this.goodsList[i].selectedAll = this.isSelectedAllRow
					for (let j = 0; j < this.goodsList[i].goods.length; j++) {
						this.goodsList[i].goods[j].selected = this.goodsList[i].selectedAll
					}
				}
				this.sumTotalPrice()
			},
			// 判断全部商品选择
			computeSelectedAll() {
				for (let i = 0; i < this.goodsList.length; i++) {
					if(this.goodsList[i].selectedAll) {
						this.isSelectedAllRow = true
					} else {
						this.isSelectedAllRow = false
						break
					}
				}
			},
			// 合计总价格
			sumTotalPrice() {
				// 获取选择信息
				this.getSelectedInfoList()
				this.sumPrice = 0
				this.selectedAllRowLength = 0
				for (let i = 0; i < this.selectedAllRowList.length; i++) {
					for (let j = 0; j < this.selectedAllRowList[i].goods.length; j++) {
						this.sumPrice += this.selectedAllRowList[i].goods[j].price*this.selectedAllRowList[i].goods[j].number
					}
					this.selectedAllRowLength += this.selectedAllRowList[i].goods.length
				}
				this.sumPrice = this.sumPrice.toFixed(2)
			},
			getSelectedInfoList() {
				let len = this.goodsList.length
				this.selectedAllRowList = []
				for (let i = 0; i < len; i++) {
					if(this.goodsList[i].selectedAll) {
						this.selectedAllRowList.push(this.goodsList[i])
					} else {
						for (let j = 0; j < this.goodsList[i].goods.length; j++) {
							if(this.goodsList[i].goods[j].selected) {
								this.selectedAllRowList.push(this.copyTowArr(i, j))
							} else {
								continue
							}
						}
					}
				}
			},
			// 二位数组复制
			copyTowArr(m, n) {
				let arr = {}
				for (let key in this.goodsList[m]) {
					arr[key] = this.goodsList[m][key]
				}
				arr.goods = []
				arr.goods.push(this.goodsList[m].goods[n])
				return arr
			},
			// 删除数据从对象中
			deleteDataFromObj () {
				let itemArr = []
				for (let i = 0; i < this.goodsList.length; i++) {
					let item = []
					let len = Object.keys(JSON.stringify(this.goodsList[i].goods)).length
					for (let j = 0; j < this.selectedAllRowList.length; j++) {
						for (let k = 0; k < this.selectedAllRowList[j].goods.length; k++) {
							let addr = JSON.stringify(this.goodsList[i].goods).indexOf(JSON.stringify(this.selectedAllRowList[j].goods[k]))
							if(addr > 1) {
								for (let x in this.goodsList[i].goods) {
									let len1 = Object.keys(JSON.stringify(this.goodsList[i].goods[x])).length
									let num = addr - len1 - 1
									if(num < 0) {
										break
									} else { item.push(num) }
								}
							} else {
								item.push(addr - 1)
							}
						}
					}
					itemArr.push(item)
				}
				for (let i = itemArr.length - 1; i >= 0 ; i--) {
					let towArr = itemArr[i]
					for (let x = towArr.length; x > 0; x--) {
						console.log(towArr[x-1])
						if(towArr[x-1] > -1) {
							this.goodsList[i].goods.splice(towArr[x-1], 1)
						} else { continue }
					}
					if(!this.goodsList[i].goods.length) {
						this.goodsList.splice(i, 1)
					}
				}
				this.selectedAllRowList = []
				this.isSelectedAllRow = false
				this.computeSelectedAll()
				this.sumTotalPrice()
			},
			// 将商品移出购物出
			removeGoodsEvent() {
				uni.showLoading()
				// 请求接口写在此位置
				this.deleteDataFromObj()
				setTimeout(function () {
					uni.hideLoading()
				}, 800)
			}
		}
	}
</script>
<style lang="scss" scoped>
/deep/checkbox .wx-checkbox-input,
/deep/uni-checkbox .uni-checkbox-input {
	border-radius: 50% !important;
	height: 32rpx;
	width: 32rpx;
	margin-top: -8rpx;
	vertical-align: middle;
}
/deep/uni-checkbox .uni-checkbox-input,
/deep/uni-checkbox .wx-checkbox-input {
	border-color: #d1d1d1;
}
/deep/uni-checkbox:not([disabled]) .uni-checkbox-input,
/deep/uni-checkbox:not([disabled]) .uni-checkbox-input:hover,
/deep/checkbox:not([disabled]) .wx-checkbox-input,
/deep/checkbox:not([disabled]) .wx-checkbox-input:hover {
	border-color: #d1d1d1;
}
/deep/uni-checkbox:not([disabled]) .uni-checkbox-input.uni-checkbox-input-checked:hover,
/deep/checkbox:not([disabled]) .wx-checkbox-input.uni-checkbox-input-checked:hover {
	border-color: #8a17c6;
}
/deep/uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked,
/deep/checkbox .wx-checkbox-input.wx-checkbox-input-checked {
	border-color: #8a17c6;
}
/deep/uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before,
/deep/checkbox .wx-checkbox-input.wx-checkbox-input-checked:before{
	font-size: 28rpx;
}
.red-price {
	color: #F0250F;
}
.goods-list{
	font-size: 36rpx;
	color: #333333;
	.row{
		// border-radius: 20rpx;
		box-shadow: 0rpx 5rpx 20rpx rgba(#000, .1);
		.top-firm-info {
			display: flex;
			height: 70rpx;
			line-height: 60rpx;
			background-color: #F2F2F2;
			.firm-box{
				margin-left: 10rpx;
				.firm-name{
					font-weight: 600;
					font-size: 26rpx;
					color: #646464;
				}
			}
		}
		.firm-goods-list {
			display: flex;
			align-items: center;
			padding: 32rpx 0 32rpx 10rpx;
			border-bottom: 1rpx #F1F1F1 solid;
			.goods-img{
				width: 150rpx;
				height: 188rpx;
				// border-radius: 10rpx;
			}
			.right-goods-box{
				flex: 1;
				margin-left: 20rpx;
				.goods-name{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					line-height: 40rpx;
				}
				.goods-spec{
					.text{
						padding: 0 10rpx;
						border-radius: 10rpx;
						color: #999999;
						font-size: 24rpx;
						
					}
				}
				.price-number-box{
					display: flex;
					line-height: 46rpx;
					justify-content: space-between;
					.number-box{
						.number-sub,
						.number-num,
						.number-add{
							display: inline-block;
							min-width: 40rpx;
							text-align: center;
							border: 2rpx solid #ccc;
						}
						.number-sub{
						}
						.number-num{
							min-width: 60rpx;
							border-left-style: none;
							border-right-style: none;
						}
						.number-add{}
					}
				}
			}
		}
	}
}
.footer {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	// margin-bottom: 10rpx;
	height: 74rpx;
	line-height: 60rpx;
	display: flex;
	justify-content: space-between;
	.goods-remove{
		border: solid 2rpx #f06c7a;
		color: #FAFAFA;
		padding: 0 30rpx;
		height: 74rpx;
		width: 158;
		// border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FF3D3D;
	}
	.right-box{
		.total-cost{}
		.account{
			display: inline-block;
			margin-left: 20rpx;
			padding: 0 10rpx;
			min-width: 140rpx;
			// border-radius: 40rpx;
			text-align: center;
			color: #fff;
			background-color: #574ef5;
			height: 74rpx;
			width: 158;
		}
	}
}



.footer1 {
	// height: 74rpx;
	line-height: 60rpx;
	display: flex;
	// margin-top: 150rpx;
	justify-content: space-between;
	.goods-remove{
		border: solid 2rpx #f06c7a;
		color: #FAFAFA;
		padding: 0 30rpx;
		height: 74rpx;
		width: 158;
		// border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FF3D3D;
	}
	.right-box{
		.total-cost{}
		.account{
			display: inline-block;
			margin-left: 20rpx;
			padding: 0 10rpx;
			min-width: 140rpx;
			// border-radius: 40rpx;
			text-align: center;
			color: #fff;
			background-color: #574ef5;
			height: 74rpx;
			width: 158;
		}
	}
}
</style>