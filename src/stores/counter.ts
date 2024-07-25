import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 组合式写法 hooks写法(推荐)：相当于一个setup， 使用ref和reactive来定义state
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
