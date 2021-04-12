<template>
  <div class="input-field">
    <label :for="name">
      <i :class="faclass" />
      {{ title }} <!-- not all currencie in font awesome thus we keep title -->
    </label>
    <input
      type="number"
      min="0"
      :id="`${name}-currency`"
      :name="name"
      @input="$emit('onChange', $event)"
      :value="amount"
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

<style lang="scss" scoped>
.input-field {
  position: relative;
  width: 100%;
  input {
    width: 80%;
    border-radius: 2px;
  }
  i {
    margin-right: 3px;
  }
}
</style>
