<template>
  <div class="not-found-container">
    <div class="container">
      <img src="../assets/404page.png" alt="">
      <h1>Oops! Something went wrong.</h1>
      <router-link to="/"><a-button  type="primary" ghost>Back</a-button></router-link>
    </div>
  </div>
</template>
<style lang="less">
.not-found-container {
  height: 100vh;
  width: 100vw;
  background: #f6f7ef;
}
.container {
  width: 50%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  h1 {
    color: #EDD18D;
    font-size: 40px;
    font-weight: bolder;
  }
  img {
    width: 80%;
    display: block;
    margin: 0 auto;
  }

}
</style>
