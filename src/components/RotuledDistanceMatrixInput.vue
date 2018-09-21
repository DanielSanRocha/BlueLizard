<template>
  <div>
    <span>Number of Specimens: <number-input controls v-model="number" :min="1" :max="5"></number-input></span>
    <ul>
      <li v-for="(rotule, index) in rotules" :key="index">
        <input class="rotule-input" v-model="rotules[index]"/>
      </li>
    </ul>
    <table>
     <tr v-for="(row,rowIndex) in matrix" v-bind:key="rowIndex">
       <td v-for="(distance,columnIndex) in row" v-bind:key="columnIndex">
         <vue-numeric class="distance-input" :precision="2" v-model="row[columnIndex]"></vue-numeric>
       </td>
     </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'RotuledDistanceMatrixInput',
  data: function () {
    let number = 1
    let rotules = ['Specimen 1']
    let matrix = [[0]]
    return {number: number, rotules: rotules, matrix: matrix}
  },
  methods: {
    getMatrix: function () {
      return this.matrix
    },
    getRotules: function () {
      return this.rotules
    }
  },
  watch: {
    number: function (val, oldVal) {
      if (val > oldVal) {
        for (let i = oldVal; i < val; i++) {
          this.rotules.push('New Specimen ' + (i + 1))
          let emptyArray = Array(val).fill(0)
          this.matrix.push(emptyArray)
        }
        for (let i = 0; i < oldVal; i++) {
          let emptyArray = Array(val - oldVal).fill(0)
          this.matrix[i].push(...emptyArray)
        }
      } else {
        this.rotules = this.rotules.slice(0, val)
        this.matrix = this.matrix.slice(0, val)
        for (let i = 0; i < val; i++) {
          this.matrix[i] = this.matrix[i].slice(0, val)
        }
      }
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

input.distance-input {
  width: 2em;
}

input.rotule-input {
  width: 60%
}
</style>
