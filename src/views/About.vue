<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <button @click="actionIncrease(cc)" class="btn"> + {{ cc }}</button>
    <button @click="reset" class="btn"> 0 </button>
    <button @click="actionDecrease(cc)"  class="btn"> - {{ cc }}</button>
    <td></td>
    <input type="number" v-model="cc"  placeholder="输入+-数" style="margin-top:20px">
   


  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return{
      cc :0
    }
  },
  computed: {
    // ...mapGetters 為 ES7 寫法
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: 'getCount',
      
    }),
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'reset',
    
    ]),
  
  },
}
</script>

<style scoped>
button.btn{
  margin : 15px ;
}
</style>