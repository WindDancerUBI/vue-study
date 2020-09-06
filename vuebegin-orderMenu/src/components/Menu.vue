<template>
  <div class="menu">
    <h2>点菜</h2>
    <div>
      <span>
        商品名称：
      </span>
      <input type="text" v-model="name">
    </div>
    <div>
      <span>
        商品价格：
      </span>
      <input type="text" v-model="price">
    </div>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      name: '',
      price: 0
    }
  },
  methods: {
    add () {
      const val = {
        name: this.name,
        price: this.price
      }
      this.$store.commit('setList', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
