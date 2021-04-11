<template>
  <div class="main-container">
    <div class="fields-container">
      <Select
        v-bind:title="this.t('base_select_title')"
        v-bind:selected="left"
        name="left"
        v-bind:options="currencies"
        v-on:currencyChange="changed"
      />
      <Input
        name="base-input"
        v-bind:amount="base"
        @onChange="baseChange"
        v-bind:title="left"
        v-bind:faclass="`fa fa-${left.toLowerCase()}`"
      />
    </div>
    <div class="fields-container">
      <Select
        v-bind:selected="right"
        name="right"
        v-bind:title="this.t('target_select_title')"
        v-bind:options="currencies"
        v-on:currencyChange="changed"
      />
      <Input
        name="target-input"
        v-bind:amount="target"
        @onChange="targetChange"
        v-bind:title="right"
        v-bind:faclass="`fa fa-${right.toLowerCase()}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Select from './Select.vue'
import Input from './Input.vue'
import { latest } from '../models/latest'
import { Currency } from '../models/types'

interface State {
  left: Currency
  right: Currency
  currencies: string[]
  formula: Record<Currency, number> | null
  base: number
  target: number
}

interface Event {
  target: {
    name: string
    value: string
  }
}

const Calculator = Vue.extend({
  data (): State {
    return {
      left: Currency.USD,
      right: Currency.GBP,
      currencies: [],
      formula: null,
      base: 1,
      target: 0
    }
  },
  components: {
    Select,
    Input
  },
  methods: {
    async getFormula (currency: Currency = Currency.USD): Promise<void> {
      try {
        const { rates } = await latest(currency)
        this.left = currency
        this.formula = rates
        this.target = parseFloat(rates[this.right].toFixed(3))
        this.currencies = Object.keys(rates)
      } catch (error) {
        throw new Error(error)
      }
    },
    changed ({
      name,
      value
    }: {
      name: 'right' | 'left'
      value: Currency
    }): void {
      this[name] = value
      if (name === 'left') {
        this.getFormula(value)
      } else {
        this.target = parseFloat(this.formula[value].toFixed(3))
      }
    },
    baseChange ({ target: { value } }: Event): void {
      const result = this.formula[this.right] * ((value as unknown) as number)
      this.target = parseFloat(result.toFixed(3))
    },
    targetChange ({ target: { value } }: Event): void {
      console.log(value)
      const result = ((value as unknown) as number) / this.formula[this.right]
      this.base = parseFloat(result.toFixed(3))
    }
  },
  created: function () {
    this.getFormula()
  }
})
export default Calculator
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-container {
  max-width: 60%;
  margin: auto;
}
.fields-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 8%;
}
select, input {
  width: 100px;
  height: 30px;
  box-sizing: border-box;
}

.select-field {
  display: flex;
  flex-direction: column;
}
label {
  align-self: flex-start;
}

/* @media only screen (max-width: 756px) {
  max-width: 100%;
} */
@media only screen and (max-width: 756px){
  .main-container {
    max-width: 100%;
  }
}
</style>
