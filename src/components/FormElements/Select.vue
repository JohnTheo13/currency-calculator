<template>
  <div class="select-field">
    <label :for="name">{{ title }}</label>
    <select
      :name="name"
      :id="`${name}-currency`"
      @change="$emit('currencyChange', $event.target)"
    >
      <option
        :selected="selected === option"
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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

<style lang="scss" scoped>
.select-field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  select {
    width: 80%;
    align-self: center;
    background: $secondary;
    border-radius: 2px;
  }
}
</style>
