import { it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calc from '../components/Calc.vue'

describe ('Test Calc', () => {
    it ('Test first operand input value', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        //   operand1.element.value = '1'
        //   operand1.trigger('input')
        expect(wrapper.vm.operand1).toBe(1)
    })

    it ('Test second operand input value', () => {
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        expect(wrapper.vm.operand2).toBe(2)
    })

    it ('Test method add', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        const methodSum = wrapper.find('button[name="+"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(3)
    })

    it ('Test method subtraction', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('7')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        const methodSum = wrapper.find('button[name="-"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(4)
    })

    it ('Test method multiply', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('5')
        const methodSum = wrapper.find('button[name="*"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(10)
    })

    it ('Test method div', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('14')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('7')
        const methodSum = wrapper.find('button[name="/"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(2)
    })

    it ('Test method div by zero', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('7')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('0')
        const methodSum = wrapper.find('button[name="/"]')
        methodSum.trigger('click')
        expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')
    })

    it ('Test method exp op2 = 0', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('5')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('0')
        const methodSum = wrapper.find('button[name="a^b"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(1)
    })

    it ('Test method exp op2 = 1', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('13')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')
        const methodSum = wrapper.find('button[name="a^b"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(13)
    })

    it ('Test method exp op2 >= 2', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        const methodSum = wrapper.find('button[name="a^b"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(27)
    })

    it ('Test method exp op2 = -1', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('8')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('-1')
        const methodSum = wrapper.find('button[name="a^b"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(0.1250)
    })

    it ('Test method exp op2 < -2', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('-2')
        const methodSum = wrapper.find('button[name="a^b"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(0.1111)
    })

    it ('Test method intDiv', () => {
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('11')
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        const methodSum = wrapper.find('button[name="div"]')
        methodSum.trigger('click')
        expect(wrapper.vm.result).toBe(3)
    })
})