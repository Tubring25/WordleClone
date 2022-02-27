<!--
 * @Description: 
 * @Date: 2022-02-24 15:47:43
 * @LastEditTime: 2022-02-26 12:38:37
-->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'WStatistics' })
</script>
<script lang="ts" setup>
import { ref, withDefaults } from 'vue'
import { NCard, NButton } from 'naive-ui'
import * as _ from 'lodash'
const props = defineProps<{
  answersView: Array<string | undefined>
  isFinish: boolean
}>()
const emit = defineEmits<{
  (e: 'restart'): void
}>()

const statisticsInfo: number[] = JSON.parse(localStorage.getItem('sta') ?? '[]')
const winPercent: string =
  statisticsInfo.filter((item) => item === 1).length === 0
    ? '0'
    : (
        (statisticsInfo.filter((item) => item === 1).length /
          statisticsInfo.length) *
        100
      ).toFixed(1) + '%'

const copyResult = () => {
  navigator.clipboard.writeText('🟩🟨⬜️\n')
}
const shareAnsInfo = (): void => {
  // const asnInfoInRow = _.chunk(props.answersView, 5)
  let answersViewCube = props.answersView.map((item) => {
    switch (item) {
      case 'absent':
        item = '⬜️'
        break
      case 'fuzzy':
        item = '🟨'
        break
      default:
        item = '🟩'
    }
    return item
  })
  const asnInfoInRow = _.chunk(answersViewCube, 5).map((row) => {
    return row.join(' ')
  })

  console.log(asnInfoInRow)

  navigator.clipboard.writeText(
    `Wordle ${asnInfoInRow.length}/6\n\n${asnInfoInRow.join('\n')}`
  )
}
</script>

<template>
  <n-card
    class="statistics-container"
    style="width: 100%"
    preset="card"
    size="huge"
    :bordered="false"
  >
    <h2 class="title">STATISTICS</h2>
    <div class="percent">
      <div class="percent__item">
        <h3 class="number">{{ statisticsInfo.length }}</h3>
        <span class="label">TIMES</span>
      </div>
      <div class="percent__item">
        <h3 class="number">{{ winPercent }}</h3>
        <span class="label">WIN</span>
      </div>
    </div>
    <div class="actions">
      <n-button type="primary" ghost @click="emit('restart')">Restart</n-button>
      <n-button
        type="primary"
        :disabled="
          answersView.includes(undefined) ||
          answersView.length === 0 ||
          !isFinish
        "
        @click="shareAnsInfo"
        >Share</n-button
      >
    </div>
  </n-card>
</template>

<style lang="less" scoped>
@color-correct: #6aa964;
@color-absent: #787c7e;
.statistics-container {
  .title {
    text-align: center;
  }
  .percent {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &__item {
      text-align: center;
      h3 {
        margin: 0;
        color: @color-correct;
      }
    }
  }
  .actions {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    .n-button {
      width: 100px;
      text-align: center;
    }
  }
}
</style>
