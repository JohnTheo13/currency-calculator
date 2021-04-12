<template>
  <div class="select-field">
    <label v-bind:for="name">
      <i :class="faclass" />
      {{ title }} <!-- not all currencie in font awesome thus we keep title -->
    </label>
    <input
      type="number"
      min="0"
      v-bind:id="`${name}-currency`"
      v-bind:name="name"
      @input="$emit('onChange', $event)"
      v-bind:value="amount"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const Input = Vue.extend({
  props: {
    options: Array,
    name: String,
    title: String,
    amount: Number,
    faclass: String
  }
})
export default Input
</script>

<style scoped>
i {
  margin-right: 3px;
}
</style>
