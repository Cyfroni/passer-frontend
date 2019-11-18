<template>
  <div class="home">
    <img alt="Passer logo" src="../assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
