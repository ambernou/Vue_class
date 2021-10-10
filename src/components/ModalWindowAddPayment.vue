<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div class="header">{{ settings.title}}</div>
    <div class="content">
      <AddPaymentForm v-if="settings.content === 'addPaymentForm'"/>
      <Auth v-if="settings.content === 'auth'"/>
      <ChangePaymentForm v-if="settings.content === 'changePaymentForm'"/>
      <div class="footer">
        <button @click="onCloseClick">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './AddPaymentForm.vue'
import Auth from './Auth.vue'
import ChangePaymentForm from './ChangePaymentForm.vue'

export default {
  components: { AddPaymentForm, Auth, ChangePaymentForm },
  name: 'ModalWindowAddPayment',
  props: {
    settings: Object
  },
  methods: {
    onCloseClick () {
      this.$modal.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
    border: 1px solid red;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & .overlay {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(68, 61, 61, 0.5);
    }
    & .content {
        position: relative;
        z-index: 100;
    }
}
</style>
