<template>
  <div>
    <button
      v-for="i in pages"
      :key="i"
      :class="{ active: curPage === i }"
      @click="onClickPage(i)"
    >
    {{ i }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Array,
      default: () => []
    },
    curPage: String
  },
  methods: {
    onClickPage (p) {
      this.$emit('emitPaginate', p)
      console.log(p)
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
    background: #030303;
    color: white;
}
</style>
