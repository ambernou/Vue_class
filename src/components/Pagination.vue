<template>
  <div class="pagination__wrapper">
    <div @click="onClickPage(cur - 1)">-</div>
    <div
      v-for="i in amountPage"
      :key="i"
      :class="{ active: cur === i }"
      @click="onClickPage(i)"
    >
    {{ i }}
    </div>
    <div @click="onClickPage(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    n: Number,
    cur: Number,
    length: Number
  },
  computed: {
    amountPage () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClickPage (p) {
      if (p < 1 || p > this.amountPage) {
        return
      }
      this.$emit('paginate', p)
      // console.log(p)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  &__wrapper {
    justify-content: center;
    display: flex;
    & > div {
      cursor: pointer;
      padding: 10px;
    }
  }
}
.active {
    background: #030303;
    color: white;
}
</style>
