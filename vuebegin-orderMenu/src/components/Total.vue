<template>
  <div>
    <h2>订单</h2>
    <li v-for="(item,index) in lists" :key="index">
      商品名称：{{item.name}}
      商品价格：{{item.price}}
      <button @click="add(item,index)">+</button>
      <span>{{typeof item.num === 'undefined'? 0 : item.num}}</span>
      <button @click="minus(item,index)">-</button>
    </li>
    <h2>结账</h2>
    <li v-for="(item,index) in lists" :key="index">
      商品名称：{{item.name}}
      商品单价：{{item.price}}
      商品总价：{{item.price*item.num}}
    </li>
    <span>总价：{{total}}</span>
  </div>
</template>

<script>
export default {
  name: 'Total',
  data () {
    return {
      lists: this.$store.state.lists
    }
  },
  computed: {
    total () {
      let sum = 0
      this.lists.forEach((item, index) => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    add (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num = item.num + 1
      this.$set(this.lists, index, item)
    },
    minus (item, index) {
      if (typeof item.num === 'undefined') {
        item.num = 0
      }
      item.num = item.num - 1
      if (item.num < 0) {
        item.num = 0
      }
      this.$set(this.lists, index, item)
    }
  }
}
</script>
