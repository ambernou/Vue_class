<template>
  <div class="context_menu_block" v-if="shown" :style="styles">
    <div v-for="(item, idx) in items"
      :key="idx"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  data () {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0
    }
  },
  methods: {
    onClick (item) {
      item.action()
    },
    onShowMenu ({ menuItem, items }) {
      this.items = items
      this.shown = true
      this.setPosition(menuItem)
    },
    onCloseMenu () {
      this.items = []
      this.shown = false
    },
    setPosition (menuItem) {
      const pos = menuItem.getBoundingClientRect()
      this.xPos = pos.left
      this.yPos = pos.top
    }
  },
  computed: {
    styles () {
      return {
        top: `${this.yPos + 5}px`,
        left: `${this.xPos + 30}px`
      }
    }
  },
  mounted () {
    this.$context.EventBus.$on('onShownMenu', this.onShowMenu)
    this.$context.EventBus.$on('onCloseMenu', this.onCloseMenu)
  },
  beforeDestroy () {
    this.$context.EventBus.$off('onShownMenu', this.onShowMenu)
    this.$context.EventBus.$off('onCloseMenu', this.onCloseMenu)
  }
}
</script>

<style lang="scss" scoped>
.context_menu_block {
  position: absolute;
  background: #eee;
  cursor: pointer;
  border: balck solid 1px;
}
</style>
