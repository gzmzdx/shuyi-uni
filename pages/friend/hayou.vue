<template name="Orders">
	<view>
		<scroll-view class="scroll-list" :scroll-into-view="scrollViewId" scroll-y="true" scroll-with-animation  :style="{height:winHeight + 'px'}">
		    <view v-for="(item,index) in contactList" :key="index" :id="item.letter == '#' ? 'indexed-list-YZ' :'indexed-list-' + item.letter">
		        <view class="letter-title" v-if="item.data&&item.data.length" id="item.letter">{{item.letter}}</view>
		        <view> .......</view>
		    </view>
		</scroll-view>
		<view class="right-menu">
		    <view v-for="(i,index) in Letters" :key="index" @click="jumper(i,index)" :class="jumperIndex == i?'letter-item active':'letter-item'">{{i}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
		        jumperIndex:'A',
		        contactList:[],
		        scrollViewId:'',
		        winHeight: 0,
		        itemHeight: 0,
		        Letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
		    }
		},
		methods: {
			 jumper(event,i){
			        this.jumperIndex = event;
			        let len = this.contactList[i].data.length;
			        if(event == '#'){
			            this.scrollViewId = 'indexed-list-YZ';
			            return
			        }
			        if(len>0){
			            console.log(111);
			            this.scrollViewId = 'indexed-list-' + event;
			        }
			    },
			},
			onLoad(){       
			    let winHeight = uni.getSystemInfoSync().windowHeight;
			    this.itemHeight = winHeight / 26;
			    this.winHeight = winHeight;
		}
	}
</script>

<style>
</style>
