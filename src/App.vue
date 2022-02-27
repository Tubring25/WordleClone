<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'Index' })
</script>
<script setup lang="ts">
import { ref, computed, onMounted, watch, onBeforeMount } from 'vue'
import * as _ from 'lodash'
import axios from 'axios'
import { AxiosRequestConfig } from 'axios'
import { NSwitch, NButton, NIcon, NDrawer, NDrawerContent } from 'naive-ui'
import WStatistics from './components/WStatistics.vue'

const KEYS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<'],
]
const WORDLENGTH = 5
const guessRows = ref([...Array(6)].map(() => [...Array(WORDLENGTH)].fill('')))
const statisticsInfo: number[] = JSON.parse(localStorage.getItem('sta') ?? '[]')

let wordle = 'super'
const currentRow = ref<number>(0)
const currentTile = ref<number>(0)
const currentTileInd = computed(
  () => currentRow.value * WORDLENGTH + currentTile.value
)
const isFinish = ref<boolean>(false)
const msgInfo = ref('')
let msgEl = null
let guessTileEls: Array<HtmlElWithOtherPro> = []
let keysEls: Array<HtmlElWithOtherPro> = []

const setTileRef = (el: any) => {
  if (el && guessTileEls.length < WORDLENGTH * 6) {
    guessTileEls.push(el)
  }
}
const setKeyRef = (el: any) => {
  if (el && keysEls.length < 28) {
    keysEls.push(el)
  }
}

const init = () => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://random-word-api.herokuapp.com/word?number=200',
  }
  axios
    .request(options)
    .then(function (response) {
      wordle = _.sample(
        response.data.filter((words: string) => words.length === WORDLENGTH)
      )
    })
    .catch(function (error) {
      console.error(error)
    })
}
onMounted(() => {
  init()
})

const keyClick = (letter: string) => {
  if (isFinish.value) return
  switch (letter) {
    case '<':
      guessRows.value[currentRow.value][currentTile.value - 1] = ''
      guessTileEls[currentTileInd.value - 1].classList.remove('filled')
      if (currentTile.value > 0) currentTile.value--
      break
    case 'ENTER':
      checkeWord()
      break
    default:
      addTile(letter)
  }
}

const addTile = (letter: string) => {
  if (currentTile.value <= 4) {
    guessRows.value[currentRow.value][currentTile.value] = letter
    guessTileEls[currentTileInd.value].letter = letter
    guessTileEls[currentTileInd.value].classList.add('filled')
    currentTile.value++
  }
}

const checkeWord = async () => {
  const isAWord = await checkIsAWord(
    guessRows.value[currentRow.value].join('').toLowerCase()
  )
  if (!isAWord) {
    msgInfo.value = 'Not A Word!'
    return
  } else {
    msgInfo.value = ''
  }
  if (currentTile.value > 4) {
    flipWord()
    if (guessRows.value[currentRow.value].join('').toLowerCase() === wordle) {
      isFinish.value = true
      msgInfo.value = 'Success!'
      statisticsInfo.push(1)
      localStorage.setItem('sta', JSON.stringify(statisticsInfo))
    } else {
      if (currentRow.value === 5) {
        isFinish.value = true
        msgInfo.value = wordle
        statisticsInfo.push(0)
        localStorage.setItem('sta', JSON.stringify(statisticsInfo))
      } else {
        currentTile.value = 0
        currentRow.value++
      }
    }
  } else {
    msgInfo.value = 'Please Complete'
  }
}

const checkIsAWord = async (letter: string): Promise<boolean> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=1&is_need_mean=1&word=${letter}`,
  }
  const res = await axios.request(options)

  return res.data.message.length > 0
    ? letter === res.data.message[0].key
    : false
}

const flipWord = () => {
  const rowTiles = _.slice(
    guessTileEls,
    currentTileInd.value - 5,
    currentTileInd.value
  )
  rowTiles.forEach((el: HtmlElWithOtherPro, index: number) => {
    const letter = el.letter
    const keyEl = keysEls[KEYS.flat().findIndex((item) => item === letter)]

    const wordleArr = wordle.toUpperCase().split('')
    el.bgColor =
      letter === wordleArr[index]
        ? 'correct'
        : wordleArr.includes(letter as string)
        ? 'fuzzy'
        : 'absent'
    keyEl.classList.add(el.bgColor)
    setTimeout(() => {
      el.classList.remove('filled')
      el.classList.add('flip')
      el.classList.add(el.bgColor as string)
    }, 500 * index)
  })
  rowTiles.forEach((el: HtmlElWithOtherPro) => {
    el.classList.remove('flip')
  })
}

const switchRailStyle = ({
  focused,
  checked,
}: {
  focused: boolean
  checked: boolean
}) => {
  const style: { background: string; color: string; boxShadow: string } = {
    background: '',
    color: '',
    boxShadow: '',
  }
  if (checked) {
    style.background = '#3a3a3a'
    if (focused) {
      style.boxShadow = '0 0 0 2px #fff'
    }
  } else {
    style.background = '#121213'
    if (focused) {
      style.boxShadow = '0 0 0 2px #121213'
    }
  }
  return style
}

const changeTheme = (value: boolean) => {
  value
    ? (document.body.className = 'theme-dark')
    : (document.body.className = 'theme-light')
}

const resetAll = () => {
  guessRows.value = [...Array(6)].map(() => [...Array(WORDLENGTH)].fill(''))
  currentRow.value = 0
  currentTile.value = 0
  isFinish.value = false
  isShowModal.value = false
  init()

  guessTileEls.forEach(
    (item) => (item.className = 'tiles-contaienr__guess-row__tile')
  )
  keysEls.forEach((item) => (item.className = 'key-container__key-row__key'))
  msgInfo.value = ''
}

const isShowModal = ref<boolean>(false)
const modalType = ref<number>(0) // 0: statistics 1: rules
const answersView = ref<Array<string | undefined>>([])
const showModal = (type: number) => {
  isShowModal.value = true
  modalType.value = type
  if (type === 0) {
    answersView.value = guessTileEls
      .map((tileEl) => {
        return tileEl.bgColor
      })
      .slice(0, currentTileInd.value)
  }
}

const isMobile = () => {
  return window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
}
</script>

<template>
  <div class="page-container">
    <header>
      <div class="left-actions">
        <n-icon size="35" @click="resetAll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6c0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93c0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 0 0 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"
              fill="currentColor"
            ></path>
          </svg>
        </n-icon>
        <n-icon size="40" @click="showModal(1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm0 7.5A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5zm0-6a2 2 0 0 1 2 2c0 .73-.212 1.14-.754 1.708l-.264.27C8.605 8.87 8.5 9.082 8.5 9.5a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27C8.895 7.13 9 6.918 9 6.5a1 1 0 0 0-2 0a.5.5 0 0 1-1 0a2 2 0 0 1 2-2z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </n-icon>
        <!-- <n-button strong secondary type="primary" @click="refreshPage">Refresh</n-button> -->
      </div>
      <h1 class="title">Wordle</h1>
      <div class="right-actions">
        <n-icon size="30" @click="showModal(0)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                d="M29 4a1 1 0 1 0-2 0v24a1 1 0 1 0 2 0V4zm-7.5 1A3.5 3.5 0 0 1 25 8.5v3a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 3 11.5v-3A3.5 3.5 0 0 1 6.5 5h15zM23 8.5A1.5 1.5 0 0 0 21.5 7h-15A1.5 1.5 0 0 0 5 8.5v3A1.5 1.5 0 0 0 6.5 13h15a1.5 1.5 0 0 0 1.5-1.5v-3zM21.5 17a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 9 23.5v-3a3.5 3.5 0 0 1 3.5-3.5h9zm1.5 3.5a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-3z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </n-icon>
        <n-switch :rail-style="switchRailStyle" :on-update:value="changeTheme">
          <template #checked></template>
          <template #unchecked></template>
        </n-switch>
      </div>
    </header>
    <div class="message-container">
      <span
        class="message"
        :ref="
          (el) => {
            msgEl = el
          }
        "
        >{{ msgInfo }}</span
      >
    </div>
    <div class="tiles-container">
      <div
        v-for="(row, rowInd) in guessRows"
        :key="rowInd"
        class="tiles-contaienr__guess-row"
      >
        <span
          v-for="(tile, tileInd) in row"
          :key="tileInd"
          :ref="setTileRef"
          class="tiles-contaienr__guess-row__tile"
          >{{ tile }}</span
        >
      </div>
    </div>
    <div class="key-container">
      <div
        v-for="(keyRow, index) in KEYS"
        :key="index"
        class="key-container__key-row"
      >
        <button
          class="key-container__key-row__key"
          v-for="key in keyRow"
          :key="key"
          :ref="setKeyRef"
          @click="keyClick(key)"
        >
          {{ key }}
        </button>
      </div>
    </div>
  </div>

  <n-drawer
    v-model:show="isShowModal"
    :placement="isMobile() ? 'top' : 'right'"
    :style="`height: 100%; width: ${isMobile() ? '100%' : '25%'}`"
  >
    <n-drawer-content title="" closable>
      <WStatistics
        v-if="modalType === 0"
        @restart="resetAll"
        :answersView="answersView"
        :isFinish="isFinish"
      />
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
