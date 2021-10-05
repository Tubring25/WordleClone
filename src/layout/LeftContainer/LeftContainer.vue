<!--
 * @Description: Left Container
 * @Date: 2021-10-03 15:01:29
 * @LastEditTime: 2021-10-05 22:25:10
-->
<template>
  <div class="left__container">
    <div class="left__container__top">
      <div class="left__container__top__item"><i class="iconfont icon-home" /><span>首页</span></div>
      <div class="left__container__top__item"><i class="iconfont icon-search"></i><span>搜寻</span></div>
      <div class="left__container__top__item"><i class="iconfont icon-list"></i><span>你的音乐库</span></div>
    </div>
    <div class="left__container__middle">
      <div class="left__container__middle__item"><i class="iconfont icon-add"></i><span>建立播放清单</span></div>
      <div class="left__container__middle__item"><i class="iconfont icon-love"></i><span>已点赞的歌曲</span></div>
    </div>
    <div class="left__container__bottom">
      <div class="left__container__bottom__item">日本</div>
      <div class="left__container__bottom__item">英国</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftContainer',
});
</script>
<style lang="less" scoped>
.left__container {
  min-width: 150px;
  width: 15%;
  background: @theme-bg-dark;
  color: @text-gray;
  i {
    display: inline-block;
    margin-right: 20px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    &::before {
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
    }
  }
  &__top {
    margin-top: 50px;
    padding: 0 10px;
    &__item {
      height: 42px;
      border-radius: 5px;
      line-height: 42px;
      &:hover {
        background: @theme-bg-gray;
        color: @text-color;
        cursor: pointer;
      }
      i {
        padding-left: 10px;
        font-size: 18px;
      }
    }
  }
  &__middle {
    margin: 30px 20px 0 20px;
    border-bottom: 1px solid @theme-bg-gray;
    &__item {
      margin-bottom: 15px;
      height: 24px;
      line-height: 24px;
      i {
        background: @text-gray;
        color: @theme-bg-gray;
        &::before {
          display: inline-block;
        }
        &.icon-love {
          background: linear-gradient(to bottom right,#3223A3, #A2BBB0);
          color: @text-gray;
          font-size: 12px;
          &::before {
            background: rgba(0, 0, 0, 0.2);
          }
        }
      }
      &:hover {
        color: @text-color;
        cursor: pointer;
        i{
          background: @text-color;
          &.icon-love {
            background: linear-gradient(to bottom right,#3223A3, #A2BBB0);
            color: @text-color;
            &::before {
              background: none;
            }
          }
        }
      }
    }
  }
  &__bottom {
    margin: 10px 20px 0 20px;
    &__item {
      height: 28px;
      line-height: 28px;
      &:hover {
        color: @text-color;
        cursor: pointer;
      }
    }
  }
}
</style>
