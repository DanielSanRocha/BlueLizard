<template>
  <div id="TreeViewer">
    <network class="network" :nodes="nodes" :edges="edges"></network>
  </div>
</template>

<script>
import * as vue2vis from 'vue2vis'

export default {
  name: 'TreeViewer',
  components: {'network': vue2vis.Network},
  data () {
    return {
      nodes: [
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
      ],
      edges: [
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
      ]
    }
  }
}
</script>

<style scoped>
.network {
  height: 100%;
  width: 100%;
}
</style>
