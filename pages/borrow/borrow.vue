<template>
  <view class="show">
    <view class="book">
      <view class="imag">
        <image :src="book.picturePath" style="width: 208rpx; height: 258rpx;"></image>
      </view>
      <view class="book-name">{{book.bookName}}</view>
    </view>
    <!-- 分割线 -->
    <view class="br3"></view>

    <!-- #ifndef MP-WEIXIN -->
    <view class="text">
      <view class="book-Name">{{book.bookName}}</view>
      <view class="book-author">作者：
        <view>{{book.author}}</view>
      </view>
      <view class="book-publisher">出版社：
        <view>{{book.publisher}}</view>
      </view>
      <view class="book-publish-time">出版年：
        <view>{{book.publisherYear}}</view>
      </view>
    </view>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <view class="text" style="margin-top: 10rpx; height: 210rpx; width: auto;">
      <view class="book-Name">{{book.bookName}}</view>
      <view class="book-author">作者：
        <view>{{book.author}}</view>
      </view>
      <view class="book-publisher">出版社：
        <view>{{book.publisher}}</view>
      </view>
      <view class="book-publish-time">出版年：
        <view>{{book.publisherYear}}</view>
      </view>
    </view>
    <!-- #endif -->


    <!-- 分割线 -->
    <view class="br3"></view>
    <!-- <view class="order-book"> -->
    <!--
barcode: "1118"
book: Object
bookId: 7510
isBorrowed: false
isCirculating: false
isEnable: true
latitude: 36.309051
library: Object
address: "<script>alert(1)</script>"
isEnable: true
latitude: 12
libraryId: 1
longitude: 12
name: "中山图书馆"
ownerId: 1
type: false
userId: 1-->
    <block v-for="(item,index) in list" :key="index">
      <view class="order-book-image">
        <image class="house-image" src="../../static/images/个人图书馆.jpg"></image>
      </view>
      <view class="order-book-right">
        <view class="right-name">
          {{item.library.name}}
        </view>
        <view class="order-book-right1">
          <view class="order-ok">
            <!--在馆-->不可预约
          </view>
          <!--<view class="count">
            数量：<view style="color:#00AAFF;">2</view>
          </view>-->
          <view class="address">
            <image style="width: 30rpx;height: 30rpx;" src="../../static/images/dingwei.png"></image>约<view style="color: #00AAFF;">1196</view>km
          </view>

        </view>
        <view class="btnSubmmit">
          <navigator :url="`/pages/order/order?realBookId=${item.realBookId}&bookId=${book.bookId}&index=${index}`">
            <button class="orderSubmmit"><view class="orderText">借走</view>
            </button>
          </navigator>
        </view>
      </view>
    </block>
    <!-- </view> -->
  </view>
</template>

<script>
import {getBookByBookId,realBook} from "../../api"
export default {
  data() {
    return {
      book:{},
      //图书馆列表
      list:{}
    }
  },
  methods: {
    Inappointment: function(e) {
      uni.showActionSheet({
        itemList: ['预约自提','预约物流' ],
        success: function (res) {
          console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
          /* var that = this;
          uni.request({
              url:getApp().globalData.URL+"api/reserveList/onlineBooking",
              data:{
                book_id:7509,
                library_id:1,
                mode:res.tapIndex

               },
               header: {
                 'content-type': 'application/json;charset=UTF-8' // 默认值
                 },
              success:res =>{
                console.log("后台传来的",res.data)
                that.logistics = res.data;
                }
            }) */
        },
        fail: function (res) {
          console.log(res.errMsg);
        }
      });

    },
    checkAppointment: function(){
      uni.showToast({
        title: '该图书正在预约中',
        duration: 2000
      })
    }
  },
  onLoad(query){
    //获取到图书信息
    getBookByBookId({bookId:query.bookId}).then(({data})=>{
      this.book = data.book;
      this.list = data.list;
    })
  }
}
</script>

<style>
.book{
  height: 350rpx;
}
.imag{
  margin-left: 35%;
  margin-top: 40rpx;

}
.book-name{
  font-size: 36rpx;
  color: #333333;
  margin-top: 9rpx;
  text-align: center;
}
.br3{
  height: 26rpx;
  background-color: #F4F5F6;
}
.text{
  margin-top: 20rpx;
  height: 200rpx;
  margin-left: 50rpx;
}
.book-Name{
  font-size: 36rpx;
  color: #333333;
}
.book-author{
  display: flex;
  margin-top: 5rpx;
  font-size: 26rpx;
  color: #999999;
}
.book-publisher{
  display: flex;
  margin-top: 5rpx;
  font-size: 26rpx;
  color: #999999;
}
.book-publish-time{
  display: flex;
  margin-top: 5rpx;
  font-size: 26rpx;
  color: #999999;
}
/* .order-book{
  height: 280rpx;
  border: #18B566 1rpx solid;
  display: flex;
} */
.order-book-image{
  margin-top: 30rpx;
  margin-left: 30rpx;
  align-items: center;
}
.house-image{
  width: 166rpx;
  height:126rpx;
  /* border: #000000 1rpx solid; */
}
.order-book-right{
  margin-top: -140rpx;
  margin-left: 230rpx;
}
.order-book-right1{
  display: flex;
  font-size: 26rpx;
  color: #999999;
  margin-top: 10rpx;
  margin-bottom: 20rpx;
}
.right-name{
  font-size: 36rpx;
}
.count{
  display: flex;
  margin-left: 30rpx;
}
.address{
  display: flex;
  margin-left: 30rpx;
}
.btnSubmmit{
  margin-left: 220rpx;
  /* line-height: center; */
}
.orderSubmmit{
  background-color: #5E49F5;
  width: 146rpx;
  height: 46rpx;
  border-radius: 23rpx;
  font-size: 28rpx;
  color: #FFFFFF;

}
.orderText{
  margin-top: -13rpx;
}
</style>
