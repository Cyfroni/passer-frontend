<template>
  <div class="retrieve-form">
    <div class="form-group md-4">
      <select id="inputState" class="form-control" v-model="selectedFile">
        <option :value="null" disabled hidden>Choose file</option>
        <option v-for="file in files" :value="file" :key="file.hash">{{
          file.name
        }}</option>
      </select>
    </div>
    <button type="button" class="btn btn-success" @click="retrieveFile">
      Retrieve
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import fileDownload from 'js-file-download'

export default {
  name: 'RetrieveForm',
  data() {
    return { files: [], selectedFile: null }
  },
  methods: {
    async retrieveFile() {
      const res = await axios.post(
        'http://localhost:8030/api/retrieveFile',
        this.selectedFile
      )
      const data = res.data.data
      fileDownload(data, this.selectedFile.name)
      this.selectedFile = null
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8030/api/files')
    this.files = response.data
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
