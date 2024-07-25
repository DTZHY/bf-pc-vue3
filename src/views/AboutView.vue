<template>
  <div class="about">
    <div class="pinia-wrapper">
      <h3>Pinia</h3>
      <button @click="counterStore.increment">+1</button>
      <span style="padding-left: 10px">{{ counterStore.count }}</span>
    </div>
    <div class="axios-wrapper">
      <h3>Axios</h3>
      <img v-for="(item, index) in dogList" :src="item" :key="index" alt="" />
      <br />
      <button @click="getDog">点击获取dog</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import useDog from '@/hooks/useDog'

const counterStore = useCounterStore()
const { dogList, getDog } = useDog()

const getCount = () => {}
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    .pinia-wrapper {
      flex: 1;
      height: 300px;
      padding: 20px;
      border: 1px solid #e7e7e7;
    }
    .axios-wrapper {
      flex: 1;
      height: 300px;
      padding: 20px;
      border: 1px solid #e7e7e7;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
