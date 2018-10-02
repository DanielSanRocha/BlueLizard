<template>
  <div id="app">
    <navleft class="navleft"/>
    <router-view ref="TreeViewer" class="content"/>
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
      const tree = NeighborJoining.apply(matrix)
      this.$refs.TreeViewer.setTree(tree)
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
