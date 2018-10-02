<template>
  <div id="navleft">
    <RotuledDistanceMatrixInput ref="RotuledDistanceMatrixInput"/>
    <button v-on:click="generateTree">Generate Tree!</button>
  </div>
</template>

<script>
import RotuledDistanceMatrixInput from '@/components/RotuledDistanceMatrixInput'

export default {
  name: 'navleft',
  components: {RotuledDistanceMatrixInput},
  methods: {
    generateTree: function () {
      let matrix = this.$refs.RotuledDistanceMatrixInput.getMatrix()
      this.$parent.NeighborJoining(matrix)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navleft {
  background-color: #f1f1f1;
  overflow: auto;
  padding: 0px;
}
</style>
