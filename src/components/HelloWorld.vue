<template>
  <div class="hello">
    <h2>{{ greetings }}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return { greetings: '' }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8030/api/home')
    this.greetings = response.data.greetings
  }
}
</script>

<style scoped></style>
