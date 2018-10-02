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
      nodes: [],
      edges: []
    }
  },
  methods: {
    setTree: function (tree) {
      this.nodes = tree.nodes
      this.edges = tree.edges
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
