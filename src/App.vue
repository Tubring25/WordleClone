<!--
 * @Description: 
 * @Date: 2022-02-18 14:23:58
 * @LastEditTime: 2022-02-21 23:49:48
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

interface HtmlElWithOtherPro extends HTMLElement {
  bgColor: string,
  letter?: string
}
const KEYS = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','ENTER','Z','X','C','V','B','N','M','<']
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

const setTileRef = (el: HtmlElWithOtherPro) => {
  if(el && guessTileEls.length < WORDLENGTH * 6) {    
    guessTileEls.push(el)
  }
}
const setKeyRef = (el: HtmlElWithOtherPro) => {
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
      'x-rapidapi-key': '28a2fe6362msh60dcf0c1db952d4p19e932jsne77635e993f9'
    }
  };
  axios.request(options).then(function (response) {
    wordle = _.sample(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  m
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
    const keyEl = keysEls[KEYS.findIndex(item => item === letter)]
    console.log(KEYS.findIndex(item => item === letter), keyEl, letter);

    const wordleArr = wordle.toUpperCase().split('')
    el.bgColor = letter === wordleArr[index] ? 'correct' : wordleArr.includes(letter as string) ? 'fuzzy' : 'absent'
    keyEl.classList.add(el.bgColor)
    setTimeout(() => {
      el.classList.remove('filled')
      el.classList.add('flip')
      el.classList.add(el.bgColor)
    }, 500 * index)
  });
  rowTiles.forEach((el:HtmlElWithOtherPro) => {
    el.classList.remove('flip')
  })
}

</script>

<template>
<div class="page-container">
  <header>
    <h1 class="title">Wordle</h1>
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
    <!-- <div v-for="(keyRow, index) in KEYS" :key="index" class="keys-container__key-row">
      <span :class="['keys-container__key-row__key', key === 'ENTER' ? 'large' : '']" v-for="key in keyRow" :key="key" :ref="setKeyRef" @click="keyClick(key)" >{{key}}</span>
    </div> -->
    <button v-for="(key, index) in KEYS" :key="index" class="keys-container__key-row" :ref="setKeyRef" @click="keyClick(key)">{{key}}</button>
  </div>
</div>
</template>

<style lang="less" scoped>
.page-container {
  width: 60%;
  margin: 0 auto;
  min-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  header {
    border-bottom: 1px solid gray;
    .title {
      width: 100%;
      text-align: center;
      margin: 0.5rem;
    }
  }
  .message-container {
    display: block;
    height: 70px;
    .message {
      display: inline-block;
      border-radius: 5px;
      background: #111;
      color: #fff;
      font-weight: bold;
      padding: 5px 15px;
      margin: 15px;
      }
  }
  .tiles-contaienr {
    width: 600px;
    min-width: 600px;
    &__guess-row {
      &__tile {
        display: inline-block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 3px;
        border: 2px solid #D3D6DA;
        margin: 3px;
        vertical-align: top;
        font-size: 2.2rem;
        font-weight: bold;
        &.filled {
          border: 2px solid #111;
          animation: bounce 0.2s;
        }
        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
  .key-container {
    display: flex;
    flex-wrap: wrap;
    width: 510px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: (translateX(-50%));
    button {
      margin: 4px;
      width: 43px;
      height: 58px;
      border: none;
      border-radius: 4px;
      // background-color: #D3D6DA;
      &:nth-child(11) {
        margin-left: 30px;
      }
      &:nth-child(20),
      &:nth-child(28) {
        width: 68px;
      }
    }
  }
  .correct {
    background: #6AA964;
    color: #fff;
    border-color: #6AA964 ;
  }
  .fuzzy {
    background: #CAB458;
    color: #fff;
    border-color: #CAB458 ;
  }
  .absent {
    background: #787C7E;
    color: #fff;
    border-color: #787C7E;
  }
  .flip {
    animation: flip 1s ;
  }
  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
}
</style>
