<template>
  <div id="app">
    <navleft/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import navleft from '@/components/navleft'
import VueNumeric from 'vue-numeric'
import VueNumberInput from '@chenfengyuan/vue-number-input'
const NeighborJoining = require('./algorithms/NeighborJoining')

export default {
  name: 'App',
  components: {navleft},
  created: function () {
    Vue.use(VueNumeric)
    Vue.component(VueNumberInput.name, VueNumberInput)
  },
  methods: {
    NeighborJoining: function (matrix) {
      NeighborJoining.apply(matrix)
    }
  }
}
</script>

<style>

body {
  margin: 0px;
}

#app {
  margin: 0px;
  padding: 0px;
}
</style>
