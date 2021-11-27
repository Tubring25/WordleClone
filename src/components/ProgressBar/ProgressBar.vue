<!--
 * @Description: progress-bar
 * @Date: 2021-11-23 11:14:42
 * @LastEditTime: 2021-11-25 18:06:23
-->
<template>
  <div class="progress-wrapper">
    <span class="time">
      start-time
    </span>
    <div class="progress-wrapper__bar">
      <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
          <div class="progress" ref="progress"></div>
          <div class="progress-wrapper__btn" ref="progressBtn">
            <div class="progress-btn"></div>
          </div>
        </div>
      </div>
    </div>
    <span>
      end-time
    </span>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { songStore } from '@/store/song'

export default defineComponent({
  name: '',
  setup() {
    const SongStore = songStore()
    SongStore.$subscribe((mutation, state) => {
      console.log(mutation, state.songInfo)
    })
  }
})
</script>
<style lang="less" scoped>
.progress-wrapper {
  display: flex;
  align-items: center;
  margin: 0px auto;
  padding: 10px 0;
  width: 90%;
  .progress-wrapper__bar {
    flex: 1;
    margin-right: 5px;
    .progress-bar {
      height: 30px;
      cursor: pointer;
      .bar-inner {
        position: relative;
        top: 13px;
        height: 4px;
        background: rgba(54,173,106, .3);
        .progress {
          position: absolute;
          height: 100%;
          background-color: @active-color;
        }
        .progress-btn-wrapper {
          position: absolute;
          top: -13px;
          left: -8px;
          width: 30px;
          height: 30px;
          .progress-btn {
            position: relative;
            top: 7px;
            left: 7px;
            box-sizing: border-box;
            width: 16px;
            height: 16px;
            border: 3px solid #fff;
            border-radius: 50%;
            background: @active-color;
          }
        }
      }
    }
  }
}
</style>
