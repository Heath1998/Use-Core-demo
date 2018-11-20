<template>
  <div>
    <button @click="useCorsData">用Cors跨域</button>
    <input type="text" v-model="useCors">
    <hr>
    <button @click="noUseCorsData">不用Cors跨域</button>
    <input type="text" v-model="noUseCore">
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data(){
    return {
      useCors:'',
      noUseCore: ''
    }
  },
  methods: {
    useCorsData: function() {
      axios.get('http://localhost:3000/test/getData')
      .then( (res) => {
        this.useCors = res.data.str;
      })
      .catch() 
    },
    noUseCorsData: function() {
      axios.get('http://localhost:3000/test/nocors')
      .then( (res) => {
        this.noUseCore = res.data.str;
      })
      .catch() 
    }
  }

}
</script>

<style scoped>
button {

}
</style>
