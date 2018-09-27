<template>
  <div id="app">
    <navleft class="navleft"/>
    <router-view class="content"/>
  </div>
</template>

<script>
import Vue from 'vue'
import navleft from '@/components/navleft'
import VueNumeric from 'vue-numeric'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import * as vue2vis from 'vue2vis'

const NeighborJoining = require('./algorithms/NeighborJoining')

export default {
  name: 'App',
  components: {navleft},
  created: function () {
    Vue.use(VueNumeric)
    Vue.component(VueNumberInput.name, VueNumberInput)
    Vue.component('timeline', vue2vis.Timeline)
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

.navleft {
  height: 100%;
  width: 20%;
  position: fixed;
  margin: 0px;
}

.content {
  height: 100%;
  width: 80%;
  position: fixed;
  left: 20%;
  margin: 0px;
}

</style>
