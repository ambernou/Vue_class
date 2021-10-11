export default {
  install (Vue) {
    if (this.installed) {
      return
    }
    this.installed = true
    // this.menuItem = null

    Vue.prototype.$context = {
      EventBus: new Vue(),
      show ({ event, items }) {
        const menuItem = event.currentTarget
        if (menuItem !== this.menuItem) {
          this.menuItem = menuItem
          this.EventBus.$emit('onShownMenu', { menuItem, items })
        // console.log('showMenu')
        } else {
          this.close()
        }
      },
      close () {
        this.EventBus.$emit('onCloseMenu')
        // console.log('closeMenu')
      }
    }
  }
}
