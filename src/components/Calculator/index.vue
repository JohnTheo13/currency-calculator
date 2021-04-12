<template>
  <div class="main-container">
    <Input
      name="base-input"
      :amount="base"
      @onChange="baseChange"
      :title="top"
      :faclass="`fa fa-${top.toLowerCase()}`"
    />
    <div class="select-container">
      <Select
        :title="this.t('base_select_title')"
        :selected="top"
        name="top"
        :options="currencies"
        @currencyChange="changed"
      />
      <Select
        :selected="bottom"
        name="bottom"
        :title="this.t('target_select_title')"
        :options="currencies"
        @currencyChange="changed"
      />
    </div>
    <Input
      name="target-input"
      :amount="target"
      @onChange="targetChange"
      :title="bottom"
      :faclass="`fa fa-${bottom.toLowerCase()}`"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Select from '../FormElements/Select.vue'
import Input from '../FormElements/Input.vue'
import { latest } from '../../models/latest'
import { Currency } from '../../models/types'
import './calculator.scss'

interface State {
  // better naming needed
  top: Currency
  bottom: Currency
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
      top: Currency.USD,
      bottom: Currency.GBP,
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
        this.top = currency
        this.formula = rates
        this.target = parseFloat(rates[this.bottom].toFixed(3))
        this.currencies = Object.keys(rates)
      } catch (error) {
        throw new Error(error)
      }
    },
    changed ({
      name,
      value
    }: {
      name: 'top' | 'bottom'
      value: Currency
    }): void {
      this[name] = value
      if (name === 'top') {
        this.getFormula(value)
      } else {
        this.target = parseFloat(this.formula[value].toFixed(3))
      }
    },
    baseChange ({ target: { value } }: Event): void {
      const result = this.formula[this.bottom] * ((value as unknown) as number)
      this.target = parseFloat(result.toFixed(3))
    },
    targetChange ({ target: { value } }: Event): void {
      const result = ((value as unknown) as number) / this.formula[this.bottom]
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
<style lang="scss">
@import './calculator.scss';
</style>
