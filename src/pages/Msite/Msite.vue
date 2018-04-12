<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
        <router-link  slot="search" to="/search"   class="header_search">
            <i class="iconfont icon-sousuo"></i>
        </router-link>
      <router-link slot="login" to="/login" class="header_login">
            <span class="header_login_text">登录|注册</span>
      </router-link>

    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container" v-if="categorys.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index2) in categorys"
            :key="index2">
              <div class="food_container">
                <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination">
        </div>
      </div>
      <img src="./images/msite_back.svg">
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>

      <ShopList/>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
    export default {
    data(){
      return{
        imgBaseUrl:'https://fuss10.elemecdn.com'
      }
    },
      mounted(){
        //异步获取食品分类列表
        this.$store.dispatch('getCategorys')
        //异步获取商家列表
        this.$store.dispatch('getShops')

      },
      computed:{
        ...mapState(['address','categorys']),
        categorysArr(){
          const arr=[] //二维数组
          const {categorys}=this
          let smallArr=[]//内部的小数组
          const max=8
          //遍历所有分类
          categorys.forEach(c=>{
          if(smallArr.length===0){
            arr.push(smallArr)
          }
          //将分类保存到小数组中
            smallArr.push(c)
            //一旦小数组满了，准备一个新的数组
            if(smallArr.length===max){
            smallArr=[]
            }
          })
          return arr
        }
      },
      watch:{
        categorys(value){
          this.$nextTick(()=>{
            new Swiper('.swiper-container',{
              loop:true,
              pagination:{
                el:'.swiper-pagination'
              }
            })
          },1000)
        }
      },
      components:{
        HeaderTop,
        ShopList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
     /* .shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .star //2x图 3x图
                      float left
                      font-size 0
                      .star-item
                        display inline-block
                        background-repeat no-repeat
                      &.star-48
                        .star-item
                          width 20px
                          height 20px
                          margin-right 22px
                          background-size 20px 20px
                          &:last-child
                            margin-right: 0
                          &.on
                            bg-image('./images/stars/star48_on')
                          &.half
                            bg-image('./images/stars/star48_half')
                          &.off
                            bg-image('./images/stars/star48_off')
                      &.star-36
                        .star-item
                          width 15px
                          height 15px
                          margin-right 6px
                          background-size 15px 15px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star36_on')
                          &.half
                            bg-image('./images/stars/star36_half')
                          &.off
                            bg-image('./images/stars/star36_off')
                      &.star-24
                        .star-item
                          width 10px
                          height 10px
                          margin-right 3px
                          background-size 10px 10px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star24_on')
                          &.half
                            bg-image('./images/stars/star24_half')
                          &.off
                            bg-image('./images/stars/star24_off')
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    color #666
                  .segmentation
                    color #ccc*/
</style>
