<template>
  <div>
      About
      <button @click="openModalAuth">OpenAuth</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openModalAuth () {
      this.$modal.show({ title: 'Auth Form', content: 'auth' })
    }
  }
}
</script>

<style>

</style>
