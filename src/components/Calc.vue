<template>
  <div class='calc'>
    <div class='display'>
        <input v-model.number='operand1' type='number' />
        <input v-model.number='operand2' type='number' />
        = {{ result }}
    </div>
    <div class='keyboard'>
        <!-- <button @click="calculate('+')">+</button>
        <button @click="calculate('-')">-</button>
        <button @click="calculate('*')">*</button>
        <button @click="calculate('/')">/</button>
        <button @click="calculate('a^b')">a<sup>b</sup></button>
        <button @click="calculate('div')">div</button> -->
      <button
        v-for="operand in operands"
        @click="calculate(operand)"
        v-bind:key="operand"
        v-bind:title="operand"
      >
        {{ operand }}
      </button>
    </div>
    <div v-if="error">Ошибка! {{ error }}</div>
    <!-- <div v-show="error">Ошибка! {{ error }}</div> -->
    <div class="screen_keyboard">
      <br />
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label>
      <br />
      <div v-show="checked">
        <button
          v-for="key in keys"
          v-bind:key="key"
          v-bind:title="key"
          @click="inputOperand(key, checkedOperand)"
        >
          {{ key }}
        </button>
        <br />
        <input type="radio" id="op1" v-model="checkedOperand" value="1" />
        <label for="op1">Операнд 1</label>
        <input type="radio" id="op2" v-model="checkedOperand" value="2" />
        <label for="op2">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      operands: ['+', '-', '*', '/', 'a^b', 'div'],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      checked: false,
      keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<-'],
      checkedOperand: ''
    }
  },
  methods: {
    calculate (operation = '+') {
      this.error = ''
      switch (operation) {
        case '+':
          this.add()
          break
        case '-':
          this.subtraction()
          break
        case '*':
          this.multiply()
          break
        case '/':
          this.div()
          break
        case 'a^b':
          this.exp()
          break
        case 'div':
          this.intDiv()
          break
      }
    },
    add () {
      const { operand1, operand2 } = this
      this.result = operand1 + operand2
    },
    subtraction () {
      const { operand1, operand2 } = this
      this.result = operand1 - operand2
    },
    multiply () {
      const { operand1, operand2 } = this
      this.result = operand1 * operand2
    },
    div () {
      const { operand1, operand2 } = this
      if (operand2 === 0) {
        this.error = 'Делить на 0 нельзя!'
      } else {
        this.result = (operand1 / operand2).toFixed(4)
      }
    },
    exp () {
      const { operand1, operand2 } = this
      if (operand2 === 0) {
        this.result = 1
      } else if (operand2 === 1) {
        this.result = operand1
      } else if (operand2 >= 2) {
        this.result = operand1
        for (let i = 2; i <= operand2; i++) {
          this.result = this.result * operand1
        }
      } else if (operand2 === -1) {
        this.result = (1 / operand1).toFixed(4)
      } else if (operand2 < -1) {
        this.result = operand1
        for (let i = -2; i >= operand2; i--) {
          this.result = this.result * operand1
        }
        this.result = (1 / this.result).toFixed(4)
      }
    },
    intDiv () {
      const { operand1, operand2 } = this
      this.result = parseInt(operand1 / operand2)
    },
    inputOperand (number = '0', checkedOperand = '1') {
      this.error = ''
      switch (checkedOperand) {
        case '':
          this.error = 'Не выбран операнд для ввода числа!'
          break
        case '1':
          this.operand1 += number
          this.operand1 = parseInt(this.operand1)
          if (number === '<-') {
            this.operand1 = String(this.operand1)
            this.operand1 = (this.operand1).slice(0, this.operand1.length - 1)
            if (this.operand1.length === 0) {
              this.operand1 = 0
            }
            this.operand1 = parseInt(this.operand1)
          }
          break
        case '2':
          this.operand2 += number
          this.operand2 = parseInt(this.operand2)
          if (number === '<-') {
            this.operand2 = String(this.operand2)
            this.operand2 = (this.operand2).slice(0, this.operand2.length - 1)
            if (this.operand2.length === 0) {
              this.operand2 = 0
            }
            this.operand2 = parseInt(this.operand2)
          }
          // this.abc(this.operand2, number)
          break
      }
    }
    // abc (chOp, x) {
    //   chOp += x
    //   console.log(chOp, x)
    //   chOp = parseInt(chOp)
    //   if (x === '<-') {
    //     chOp = String(chOp)
    //     chOp = chOp.slice(0, chOp.length - 1)
    //     if (chOp.length === 0) {
    //       chOp = 0
    //     }
    //     chOp = parseInt(chOp)
    //   }
    //   console.log(chOp)
    //   return chOp
    // }
  }
}
</script>
