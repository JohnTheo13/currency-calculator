<template>
  <div class="select-field">
    <label v-bind:for="name">{{ title }}</label>
    <select
      v-bind:name="name"
      v-bind:id="`${name}-currency`"
      v-on:change="$emit('currencyChange', $event.target)"
    >
      <option
        v-bind:selected="selected === option"
        v-for="option in options"
        v-bind:key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { latest } from '../models/latest'

const Select = Vue.extend({
  props: {
    options: Array,
    name: String,
    title: String,
    selected: String
  }
})
export default Select
</script>
