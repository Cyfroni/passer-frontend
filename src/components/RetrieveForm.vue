<template>
  <div class="retrieve-form">
    <div class="form-group md-4">
      <label for="inputState">Choose file</label>
      <select id="inputState" class="form-control" v-model="selectedFile">
        <option v-for="(file, index) in files" v-bind:key="index">
          {{ file }}
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-primary" @click="retrieveFile">
      Retrieve
    </button>
  </div>
</template>

<script>
export default {
  name: 'RetrieveForm',
  data() {
    return { files: ['file1', 'file2'], selectedFile: '' }
  },
  methods: {
    retrieveFile() {
      console.log(this.selectedFile)
    }
  }
}
</script>

<style scoped>
.retrieve-form {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
