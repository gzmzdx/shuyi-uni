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
		<view class="mid">
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
			<view v-if="show" :class="[disabled ? 'u-disabled' : '', 'u-size-' + size, 'u-shape-' + shape, 'u-mode-' + mode + '-' + type]" class="u-tag" :style="[customStyle]" @tap="clickTag">{{ text }}<view class="u-icon-wrap" @tap.stop>
					<u-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" name="close" class="u-close-icon" :style="[iconStyle]"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
		name: 'u-tag',
		// 是否禁用这个标签，禁用的话，会屏蔽点击事件
		props: {
			// 标签类型info、primary、success、warning、error
			type: {
				type: String,
				default: 'primary'
			},
			disabled: {
				type: [Boolean, String],
				default: false
			},
			// 标签的大小，分为default（默认），mini（较小）
			size: {
				type: String,
				default: 'default'
			},
			// tag的形状，circle（两边半圆形）, square（方形，带圆角），circleLeft（左边是半圆），circleRight（右边是半圆）
			shape: {
				type: String,
				default: 'square'
			},
			// 标签文字
			text: {
				type: [String, Number],
				default: '哈哈哈'
			},
			
			// 背景颜色，默认为空字符串，即不处理
			bgColor: {
				type: String,
				default: ''
			},
			// 标签字体颜色，默认为空字符串，即不处理
			color: {
				type: String,
				default: 'skyblue'
			},
			// 镂空形式标签的边框颜色
			borderColor: {
				type: String,
				default: ''
			},
			// 关闭按钮图标的颜色
			closeColor: {
				type: String,
				default: ''
			},
			// 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
			index: {
				type: [Number, String],
				default: ''
			},
			// 模式选择，dark|light|plain
			mode: {
				type: String,
				default: 'plain'
			},
			// 是否可关闭
			closeable: {
				type: Boolean,
				default: false
			},
			// 是否显示
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			customStyle() {
				let style = {};
				// 文字颜色（如果有此值，会覆盖type值的颜色）
				if(this.color) style.color = this.color;
				// tag的背景颜色（如果有此值，会覆盖type值的颜色）
				if(this.bgColor) style.backgroundColor = this.bgColor;
				// 如果是镂空型tag，没有传递边框颜色（borderColor）的话，使用文字的颜色（color属性）
				if(this.mode == 'plain' && this.color && !this.borderColor) style.borderColor = this.color;
				else style.borderColor = this.borderColor;
				return style;
			},
			iconStyle() {
				if(!this.closeable) return ;
				let style = {};
				if(this.size == 'mini') style.fontSize = '20rpx';
				else style.fontSize = '22rpx';
				if(this.mode == 'plain' || this.mode == 'light') style.color = this.type;
				else if(this.mode == 'dark')  style.color = "#ffffff";
				if(this.closeColor) style.color = this.closeColor;
				return style;
			},
			// 关闭图标的颜色
			closeIconColor() {
				// 如果定义了关闭图标的颜色，就用此值，否则用字体颜色的值
				// 如果上面的二者都没有，如果是dark深色模式，图标就为白色
				// 最后如果上面的三者都不合适，就返回type值给图标获取颜色
				let color = '';
				if(this.closeColor) return this.closeColor;
				else if(this.color) return this.color;
				else if(this.mode == 'dark') return '#ffffff';
				else return this.type;
			}
		},
		methods: {
			// 标签被点击
			clickTag() {
				// 如果是disabled状态，不发送点击事件
				if(this.disabled) return ;
				this.$emit('click', this.index);
			},
			// 点击标签关闭按钮
			close() {
				this.$emit('close', this.index);
			}
		}
	}
</script>
<style lang="scss" scoped>
	// @import "../../libs/css/style.components.scss";
	
	.u-tag {
		box-sizing: border-box;
		align-items: center;
		border-radius: 6rpx;
		/* #ifndef APP-NVUE */
		display: inline-block;
		/* #endif */
		line-height: 1;
		margin: 10rpx 10rpx;
	}
	
	.u-size-default {
		font-size: 22rpx;
		padding: 12rpx 22rpx;
	}
	
	.u-size-mini {
		font-size: 20rpx;
		padding: 6rpx 12rpx;
	}

	.u-mode-light-primary {
		background-color: $u-type-primary-light;
		color: $u-type-primary;
		border: 1px solid $u-type-primary-disabled;
	}
	
	.u-mode-light-success {
		background-color: $u-type-success-light;
		color: $u-type-success;
		border: 1px solid $u-type-success-disabled;
	}
	
	.u-mode-light-error {
		background-color: $u-type-error-light;
		color: $u-type-error;
		border: 1px solid $u-type-error-disabled;
	}
	
	.u-mode-light-warning {
		background-color: $u-type-warning-light;
		color: $u-type-warning;
		border: 1px solid $u-type-warning-disabled;
	}
	
	.u-mode-light-info {
		background-color: $u-type-info-light;
		color: $u-type-info;
		border: 1px solid $u-type-info-disabled;
	}
	
	.u-mode-dark-primary {
		background-color: $u-type-primary;
		color: #FFFFFF;
	}
	
	.u-mode-dark-success {
		background-color: $u-type-success;
		color: #FFFFFF;
	}
	
	.u-mode-dark-error {
		background-color: $u-type-error;
		color: #FFFFFF;
	}
	
	.u-mode-dark-warning {
		background-color: $u-type-warning;
		color: #FFFFFF;
	}
	
	.u-mode-dark-info {
		background-color: $u-type-info;
		color: #FFFFFF;
	}
	
	.u-mode-plain-primary {
		background-color: #FFFFFF;
		color: $u-type-primary;
		border: 1px solid $u-type-primary;
	}
	
	.u-mode-plain-success {
		background-color: #FFFFFF;
		color: $u-type-success;
		border: 1px solid $u-type-success;
	}
	
	.u-mode-plain-error {
		background-color: #FFFFFF;
		color: $u-type-error;
		border: 1px solid $u-type-error;
	}
	
	.u-mode-plain-warning {
		background-color: #FFFFFF;
		color: $u-type-warning;
		border: 1px solid $u-type-warning;
	}
	
	.u-mode-plain-info {
		background-color: #FFFFFF;
		color: $u-type-info;
		border: 1px solid $u-type-info;
	}
	
	.u-disabled {
		opacity: 0.55;
	}

	.u-shape-circle {
		border-radius: 100rpx;
	}
	
	.u-shape-circleRight {
		border-radius:  0 100rpx 100rpx 0;
	}

	.u-shape-circleLeft {
		border-radius: 100rpx 0 0 100rpx;
	}
	
	.u-close-icon {
		margin-left: 14rpx;
		font-size: 22rpx;
		color: $u-type-success;
	}
	
	.u-icon-wrap {
		display: inline-flex;
		transform: scale(0.86);
	}
	
	
	// 
.all {
	height: 2024rpx;
	width: 100%;
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
	margin: 30rpx 30rpx;
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
