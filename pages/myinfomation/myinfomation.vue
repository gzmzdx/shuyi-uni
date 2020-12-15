<template>
	<view class="all">
		<form @submit="formSubmit" >
		<view class="top" >
			<view class="topone">头像</view>
			<view><image class="image" :src="head_img" style="width:120rpx;height: 120rpx;border-radius: 100%;":loading="loading" :disabled="disabled" @click="upImg()" ></image></view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">昵称 :</view>
			<view class="midone_r"><input name="nickname" :value="info.nickname" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid" v-show="isShow">
			<view class="midone">手机 :</view>
			<view class="midone_r"><input name="phoneNum" :value="info.phone" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid" >
			<view class="midone">隐藏手机号 :</view>
			<view class="midone_TP">
				<switch checked @change="switchChange" />
			</view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">邮箱 :</view>
			<view class="midone_r"><input name = "email" :value="info.email" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">常用地址 :</view>
			<view class="midone_r" v-text="info.detail_address"></view>
		</view>
		<view class="br2"></view>
		<view class="mid">
			<view class="midone">职业 :</view>
			<view class="midone_r"><input name = "occupation" :value="info.occupation" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">职称 :</view>
			<view class="midone_r"><input name="professional" :value="info.professional" /></view>
		</view>
		<view class="br1"></view>
		<view class="mid">
			<view class="midone">学历 :</view>
			<view class="midone_r"><input name="education" :value="info.education" /></view>
		</view>
		<view class="br3"></view>
		<view class="x">
			<button form-type="submit" class="bc">保存</button>
		</view>
		</form>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				percent:0,
				loading:false,
				disabled:false,
				isShow:true,//是否隐藏电话号码
				openId:1 ,//暂时是1
				info:{},//读者信息
				token:'token',
				head_img:'',//头像
				info:{
					openId:1
				}
				
			};
		},
		onLoad() {
			this.getReaderInfo();
		},
	 methods : {
		 //获取读者信息
		 getReaderInfo(){
		 	var that = this;
		 	uni.request({
		 		 // url:getApp().globalData.URL +'api/reader/app?id='+that.openId,
		 		 url:getApp().globalData.URL +'reader/app',
		 		 data:{
		 			 id:that.openId,
		 			 token:that.token,
		 		 },
		 		 header: {
		 		     'content-type': 'application/json;charset=UTF-8' // 默认值
		 		   },
		 		 method:'GET',
		 		 success:res =>{
		 			that.info=res.data;
					that.head_img = res.data.avatar
		 			}
		 	})
		 },
		 //是否隐藏电话号码
		 switchChange: function (e) {
			 this.isShow = e.target.value;
		 },
		 formSubmit:function(e){
			var that = this
			let tmp = JSON.stringify(e.detail.value)
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var formdata = e.detail.value
			// 数据校验
			let reg_tel = /(^$)|(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/
			let reg_email = /(^$)|^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/ 
			//结果标记
			let sign_tel = RegExp(reg_tel).test(formdata.phoneNum);	
			let sign_email = RegExp(reg_email).test(formdata.email);
			if(!sign_tel){
				this.showModal("请检查电话号码格式");
			}else if(!sign_email){
				this.showModal('请检查电子邮箱格式')
			}else{
				uni.request({
					url:getApp().globalData.URL +'reader/app?openId='+that.openId+'&headImg='+that.head_img,
					data: tmp,
					method: "PUT",
					success:(res)=> {
						console.log('idhjeiofhiuhfi',res)
						if(res.statusCode==200){
							this.showModal("更改信息成功了！")
						}else{
							this.showModal("更改信息失败了！")
						}
					},
					fail:(res)=>{
						this.showModal("网络错误！")
					}
				})
			}
			
		},
		 //上传图片
		 upImg(){
		 	var that = this;
		 	uni.chooseImage({
		 	    success: (chooseImageRes) => {
		 	        const tempFilePaths = chooseImageRes.tempFilePaths;
		 	        uni.uploadFile({
		 	            url: getApp().globalData.URL +'imgUpload/upload', //仅为示例，非真实的接口地址
		 	            filePath: tempFilePaths[0],
		 	            name: 'multipartFile',
		 	            formData: {
		 	                'user': 'test'
		 	            },
		 	            success: (uploadFileRes) => {
		 					var datas=JSON.parse(uploadFileRes.data);
		 					if(datas.errno==0){
								this.showModal("头像已上传！")
		 						that.head_img = getApp().globalData.Link+"upload/图片/" + datas.data[0];
		 					}else{
								this.showModal("图片上传失败了！")
		 						}
		 					},
						fail:(res)=>{
							this.showModal("网络错误！")
						}
		 	        });
		 	    }
		 	});
		 },
		 //提示框
		 showModal(val){
			 uni.showToast({
			 	title: val,
			 	icon: 'none'
			 });
		 },
	 },
	}
</script>

<style>
.all{
	background-color: #FFFFFF;
}
.top {
	height: 110rpx;
	/* background-color: #BBBBBB; */
	border-bottom: 1rpx solid #F1F1F1;
}
.topone {
	/* background-color: #007AFF; */
	width: 20%;
	margin-left: 30rpx;
	margin-top: 55rpx;
	/* border-bottom: 1rpx solid #bbbbbb; */
}
.topthree {
	margin-top: -90rpx;
	margin-left: 705rpx;
	/* background-color:  #FF0000; */
}
.image {
	margin-left: 580rpx;
	margin-top: -67rpx;
}
.imag {
	/* margin-left: 700rpx; */
	/* margin-top: -600rpx; */
}
.mid {
	/* background-color: #F0AD4E; */
	height: 60rpx;
	/* border-bottom: 1rpx solid #F1F1F1; */
}
.midone {
	/* background-color: #2C405A; */
	width: 40%;
	font-size: 30rpx;
	margin-top: 30rpx;
	margin-left: 30rpx;
}
.midone_r {
	/* background-color:  #4CD964; */
	margin-top: -40rpx;
	text-align: right;
	margin-right: 50rpx;
	color: #D2D2D2;
}
.midone_r input{
	font-size: 30rpx;
}
.midone_TP{
	margin-top: -50rpx;
	text-align: right;
	margin-right: 50rpx;
}
.mid_two {
	/* background-color: #F0AD4E; */
	height: 280rpx;
	/* border-bottom: 1rpx solid #bbbbbb; */
}
.midtwo {
	/* background-color: #2C405A; */
	width: 40%;
	margin-top: 40rpx;
	margin-left: 30rpx;
}
.midtwo_r {
	/* background-color:  #4CD964; */
	margin-top: 30rpx;
	text-align: left;
	margin-left: 30rpx;
}
.bc{
		color: #FFFFFF;
		font-size: 28rpx;
		margin-top: 100rpx;
		width: 500rpx;
		background-color: #00BFFF;
	}
.br1 {
		width: 100%;
		height: 3rpx;
		background-color: #F4F5F6;
		margin-left: 30rpx;
	}	
.br2 {
		width: 100%;
		height: 30rpx;
		background-color: #F5F5F5;
	}
.br3 {
		width: 100%;
		height: 30rpx;
		background-color: #F5F5F5;
	}
</style>
