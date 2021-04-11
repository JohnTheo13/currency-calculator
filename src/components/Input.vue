<template>
  <div class="select-field">
    <label v-bind:for="name"><i :class="faclass" />{{ title }}</label>
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
// import { latest } from '../models/latest'

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
