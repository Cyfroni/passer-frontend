<template>
  <div class="hello">
    <p>{{ greetings }}</p>
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
    const response = await axios.get('http://localhost:8080/api/home')
    this.greetings = response.data.greetings
  }
}
</script>

<style scoped></style>
