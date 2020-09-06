<template>
  <div class="home">
    <Menu></Menu>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Menu
  }
}
</script>
