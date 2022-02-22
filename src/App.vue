<!--
 * @Description: 
 * @Date: 2022-02-18 14:23:58
 * @LastEditTime: 2022-02-22 17:54:19
-->
<script lang="ts">
import { defineComponent,computed, onMounted, watch } from 'vue'
export default defineComponent({name: 'Index'})
</script>
<script setup lang="ts">
import {ref} from 'vue'
import * as _ from 'lodash'
import axios from 'axios'
import { AxiosRequestConfig } from 'axios'
import { NSwitch, NButton } from 'naive-ui'

interface HtmlElWithOtherPro extends HTMLElement {
  bgColor?: string,
  letter?: string
}
const KEYS = [['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['ENTER','Z','X','C','V','B','N','M','<']]
const WORDLENGTH = 5

const guessRows = ref(new Array(6).fill(0).map(() => new Array(WORDLENGTH).fill('')))
let wordle = 'super'
const currentRow = ref<number>(0)
const currentTile = ref<number>(0)
const currentTileInd = computed(()=> currentRow.value * 5 + currentTile.value)
const isFinish = ref<boolean>(false)
const msgInfo = ref('')
let msgEl = null
let guessTileEls: Array<HtmlElWithOtherPro> = []
let keysEls: Array<HtmlElWithOtherPro> = []

const setTileRef = (el:any ) => {
  if(el && guessTileEls.length < WORDLENGTH * 6) {    
    guessTileEls.push(el)
  }
}
const setKeyRef = (el:any) => {
  if(el && keysEls.length < 28) {
    keysEls.push(el)
  }
}

onMounted(() => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {count: '5', wordLength: '5'},
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': 'f69640fae8msh51b6b46f4527b45p1ebe1djsne16871614ede' // need to replace with your own api key
    }
  };
  axios.request(options).then(function (response) {
    wordle = _.sample(response.data)
  }).catch(function (error) {
    console.error(error);
  });
})

const keyClick = (letter: string) => {  
  if(isFinish.value) return
  switch(letter){
    case '<':
      guessRows.value[currentRow.value][currentTile.value - 1] = ''
      guessTileEls[currentTileInd.value - 1].classList.remove('filled')
      if(currentTile.value > 0) currentTile.value--
      break
    case 'ENTER':
      checkeWord()
      break
    default:
      addTile(letter)
  }
}

const addTile = (letter:string) => {
  if(currentTile.value <= 4){
    guessRows.value[currentRow.value][currentTile.value] = letter
    guessTileEls[currentTileInd.value].letter = letter
    guessTileEls[currentTileInd.value].classList.add('filled')
    currentTile.value++
  }
}

const checkeWord = async() => {  
  if(isFinish.value) return
  const isAWord = await checkIsAWord(guessRows.value[currentRow.value].join('').toLowerCase())
  if(!isAWord) {
    msgInfo.value = 'Not A Word!'
    return
  }
  if(currentTile.value > 4) {
    flipWord()
    if(guessRows.value[currentRow.value].join('').toLowerCase() === wordle) {
      isFinish.value = true
      msgInfo.value = 'Success!'
    } else {
      currentTile.value = 0
      currentRow.value++
    }
  } else {
    msgInfo.value = 'Please Complete'
  }
}

const checkIsAWord = async(letter: string): Promise<boolean> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=1&is_need_mean=1&word=${letter}`,
  };
  const res = await axios.request(options)
  
  return res.data.message.length > 0 ? letter === res.data.message[0].key : false
}

const flipWord = () => {
  const rowTiles = _.slice(guessTileEls, currentTileInd.value - 5, currentTileInd.value)
  rowTiles.forEach((el:HtmlElWithOtherPro, index:number) => {
    const letter = el.letter
    const keyEl = keysEls[KEYS.flat().findIndex(item => item === letter)]
    console.log(KEYS.flat().findIndex(item => item === letter), keyEl, letter);

    const wordleArr = wordle.toUpperCase().split('')
    el.bgColor = letter === wordleArr[index] ? 'correct' : wordleArr.includes(letter as string) ? 'fuzzy' : 'absent'
    keyEl.classList.add(el.bgColor)
    setTimeout(() => {
      el.classList.remove('filled')
      el.classList.add('flip')
      el.classList.add(el.bgColor as string)
    }, 500 * index)
  });
  rowTiles.forEach((el:HtmlElWithOtherPro) => {
    el.classList.remove('flip')
  })
}

const switchRailStyle = ({ focused, checked }: {focused: boolean, checked: boolean}) => {
  const style: {background:string, color: string, boxShadow: string} = {background:'', color: '', boxShadow: ''}
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
  value ? document.body.className = 'theme-dark' : document.body.className = 'theme-light'
}

const refreshPage = () => {
  location.reload()
}

</script>

<template>
<div class="page-container">
  <header>
    <n-button strong secondary type="primary" @click="refreshPage">Refresh</n-button>
    <h1 class="title">Wordle</h1>
    <n-switch :rail-style="switchRailStyle" :on-update:value="changeTheme">
      <template #checked>Light</template>
      <template #unchecked>Dark</template>
    </n-switch>
  </header>
  <div class="message-container">
    <span class="message" :ref="el=>{msgEl=el}">{{msgInfo}}</span>
  </div>
  <div class="tiles-container">
    <div v-for="(row, rowInd) in guessRows" :key="rowInd" class="tiles-contaienr__guess-row">
      <span v-for="(tile, tileInd) in row" :key="tileInd" :ref="setTileRef" class="tiles-contaienr__guess-row__tile">{{tile}}</span>
    </div>
  </div>
  <div class="key-container">
    <div v-for="(keyRow, index) in KEYS" :key="index" class="key-container__key-row">
      <button class="key-container__key-row__key" v-for="key in keyRow" :key="key" :ref="setKeyRef" @click="keyClick(key)" >{{key}}</button>
    </div>
    <!-- <button v-for="(key, index) in KEYS" :key="index" class="keys-container__key-row" :ref="setKeyRef" @click="keyClick(key)">{{key}}</button> -->
  </div>
</div>
</template>

<style lang="less" scoped>
@import url('./style/index.less');
</style>
