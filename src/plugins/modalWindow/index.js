export default {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),
      show (settings) {
        this.EventBus.$emit('onShown', settings)
        // console.log('show')
      },
      hide () {
        this.EventBus.$emit('onHide')
        // console.log('hide')
      }
    }
  }
}
